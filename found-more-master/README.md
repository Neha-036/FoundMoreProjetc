Staging: [![Build Status](http://ec2-52-51-229-212.eu-west-1.compute.amazonaws.com:8080/job/found-more/job/staging/badge/icon)](http://ec2-52-51-229-212.eu-west-1.compute.amazonaws.com:8080/job/found-more/job/staging/)


# FOUND MORE

Front - and backend of the FOUND MORE system.

### Technology Stack

- Docker
- React
- GraphQL
- Prisma
- Postgres
- Nginx (Production only)


## Development

Build the docker containers.

	> docker-compose -f docker-compose-dev.yml build

Run the docker containers which will spin up the development environment.

	> docker-compose -f docker-compose-dev.yml up
> Or in daemon: `> docker-compose -f docker-compose-dev.yml up -d`

Deploy the database schema and seed the database.
> The database needs to be re-deployed after every change in the database schema.

	> docker exec -ti fm-backend-dev bash
	> prisma deploy
	> npm run import

Run test scripts.

	> docker exec -ti fm-backend-dev bash
	> npm run test

### Endpoints

| Service           | Endpoint                         |
|-------------------|----------------------------------|
|client             |`http://localhost:3000`           |
|server             |`http://localhost:4000`           |
|GraphQL Playground |`http://localhost:5000/playground`|
|Prisma             |`http://localhost:4466/found/dev` |



## Production
Set the server endpoint in the *PRISMA_API_GATEWAY_URL* environment variable.

	> export PRISMA_API_GATEWAY_URL=http://<instance ip>:4000

Build the docker containers.

	> docker-compose -f docker-compose-prod.yml build

Run the docker containers which will spin up the production environment.

	> docker-compose -f docker-compose-prod.yml up -d

Deploy the database schema and seed the database.

	> docker exec -ti fm-backend-dev bash
	> prisma deploy
