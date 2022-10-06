import 'reflect-metadata';

import {createExpressServer, getMetadataArgsStorage, useContainer as routingUseContainer} from 'routing-controllers';
import {Application} from "express";
import {useContainer as classValidatorUseContainer} from 'class-validator';
import {Container} from 'typedi';
import {env} from "./common/env";
import path from "path";
import * as swaggerUi from 'swagger-ui-express';
import {routingControllersToSpec} from "routing-controllers-openapi";
import {validationMetadatasToSchemas} from "class-validator-jsonschema";
import morgan from "morgan";
import {logger, stream} from "./logger";
import {ErrorHandler} from "./common/error-handling/ErrorHandler";
import * as http from "http";

/**
 * App Entrance
 *
 * @author Yepeng Ding
 */
export class App {
    private readonly app: Application;

    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.app = createExpressServer({
            cors: true,
            classTransformer: true,
            controllers: [path.join(__dirname + '/controllers/*.{ts,js}')],
            middlewares: [ErrorHandler],
            defaultErrorHandler: false
        });
        this.initializeCore();
        this.initializeSwagger();
    }

    /**
     * Run application
     *
     * @return HTTP Server
     */
    public run(): http.Server {
        return this.app.listen(env.app.port, () => {
            logger.info(`🚀 App is running on port ${env.app.port}`);
        });
    }

    /**
     * Initialize core settings
     * @private
     */
    private initializeCore() {
        // Initialize logging
        this.app.use(morgan(env.log.format, {stream}));

        // Set TypeDI container for routing-controllers and class-validator
        routingUseContainer(Container);
        classValidatorUseContainer(Container, {
            fallback: true,
            fallbackOnErrors: true
        });
    }

    /**
     * Initialize Swagger UI
     * @private
     */
    private initializeSwagger() {
        const storage = getMetadataArgsStorage()
        const schemas = validationMetadatasToSchemas({
            refPointerPrefix: '#/components/schemas/',
        })

        const spec = routingControllersToSpec(storage, {}, {
            components: {schemas},
            info: {title: 'Swift Express API', version: '0.1.0'},
        })
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
    }
}


