[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/X5sSivKc)

# Week 13 Dandi Rizky (Connecting RESTAPI to DATABASE)

---

For this week assignment, i'm trying to connect RESTAPI that i've been created on week 12 to PostgreSQL Databases using PrismaORM.

## Installation 🔨

---

In order to run this project locally, you need to clone this repository first using git clone

```bash
$ git clone https://github.com/revou-fsse-1/w13-my-database-api-DandiRizkyy.git
```

then run `yarn install` in your terminal to download all dependencies

```bash
$ yarn install
```

create `docker-compose.yaml` on root folder (where the package.json installed) and fill with these commands to install postgresql database locally on your computer

```
version: "3"
services:
  postgres:
    image: postgres:14
    ports:
    - 5432:5432
    environment:
    - POSTGRES_DB=revou
    - POSTGRES_USER=revou
    - POSTGRES_PASSWORD=password
    volumes:
    - ./postgres-data:/var/lib/postgresql/data
  pgadmin:
    image: dpage/pgadmin4
    environment:
      - PGADMIN_DEFAULT_EMAIL=user@gmail.com
      - PGADMIN_DEFAULT_PASSWORD=password
    ports:
      - 15432:80

```

don't forget to create `.env` files on root folder same like before with these command:

```
DATABASE_URL="postgresql://revou:password@localhost:5432/revou?schema=public"
```

and run docker with these command:

```
docker-compose up -d
```

after that you can start the server using these following command :

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

if you want to stop docker, you can use these command

```
docker-compose stop
```

## Documentation 📷

---

You can follow my documentation on postman: [Link](https://documenter.getpostman.com/view/24409630/2s93eX1DJf)

- RESTAPI Products Links : https://w13-my-database-api-dandirizkyy-production.up.railway.app/products

  ```
  || Products Endpoint ||

  GET     /products
  GET     /products/1
  POST    /products
  PUT     /products/1
  PATCH   /products/1
  DELETE  /products/1

  ```

- RESTAPI Users Links : https://w13-my-database-api-dandirizkyy-production.up.railway.app/users

  ```
  || Users Endpoint ||

  GET     /users
  POST    /users
  ```

## Technologies 💻

---

- NestJS
- Typescript
- PrismaORM
- PostgreSQL
- Docker
- Postman
