import {Body, Get, JsonController, Param, Post} from 'routing-controllers';
import {UserService} from "../services/UserService";
import {Service} from "typedi";
import {User} from "../models/entities/User";
import {CreateUserBody} from "../models/dtos/User.dto";
import {Assert} from "../common/assertion/Assert";


/**
 * User Controller
 *
 * @author Yepeng Ding
 */
@JsonController('/users')
@Service()
export class UserController {

    constructor(
        /**
         * Inject user service
         */
        private userService: UserService
    ) {
    }

    /**
     * Get all users.
     *
     */
    @Get()
    async getAll() {
        return await this.userService.findAll();
    }

    /**
     * Get one user by id.
     *
     * @param id
     */
    @Get('/:id')
    async getOneById(@Param('id') id: number) {
        const user = await this.userService.retrieve(id);
        console.log(user)
        Assert.notNull(user, `User (id: ${id}) does not exist.`);
        console.log("asserted")
        return user;
    }

    /**
     * Create user.
     *
     * @param body
     */
    @Post()
    async create(@Body() body: CreateUserBody) {
        const user = new User();
        user.firstname = body.firstname;
        user.lastname = body.lastname;
        user.age = body.age;

        return await this.userService.create(user);
    }

}


