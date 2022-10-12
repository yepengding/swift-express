# Swift Express

A swift TypeScript-based Express web framework. It adopts the aspect-oriented programming style and implements useful
modules like logging aspect and global exception handler to boost the development.

[swift-express-graphql](https://github.com/yepengding/swift-express-graphql) is a variant that integrates features based
on GraphQL.

# Quickstart

## By Docker Compose

1. Duplicate `.env.example` as `.env` and configure environment variables;
2. Configure `Dockerfile` and `docker-compose.yml`;
3. Compose and run containers.

```shell
docker compose up -d
```

## By Docker

1. Duplicate `.env.example` as `.env` and configure environment variables;
2. Configure `Dockerfile`;
3. Build Docker image

```shell
docker build -t vcs .
```

3. Run in container

```shell
docker run -p <host_port>:<container_port> --name <container_name> -d vcs
```

## Manually

1. Install dependencies

```shell
yarn install
```

2. Duplicate `.env.example` as `.env` and configure environment variables

3. Build project to `dist`

```shell
npm run build
```

4. Run project

```shell
npm run start
```

# API Document Endpoint

*/api-docs/

# Development

## Create new models

Refer to `User.ts` and `User.dto.ts` to create new entities and data transfer objects in folder `src/models`.

## Create new repositories

Refer to `UserRepository.ts` to create new repositories in folder `src/repositories`.

## Create new services

Refer to `UserService.ts` to create new services in folder `src/services`.

## Create new controllers

Refer to `UserController.ts` to create new controllers in folder `src/controllers`.

## Run in dev

Run project in development server

```shell
npm run dev
```

## Run code analysis

```shell
npm run lint
```

---

# References

- [Express](https://expressjs.com/)
- [routing-controllers](https://github.com/typestack/routing-controllers)
- [TypeORM](https://typeorm.io/)
- [TypeDI](https://github.com/typestack/typedi)
- [winston](https://github.com/winstonjs/winston)
