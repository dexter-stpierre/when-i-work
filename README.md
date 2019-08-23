# when-i-work

Code challenge for When I work

## Prerequesits

Node.js v10

If you do not have this installed I advice installing it through [nvm]([google.com](https://github.com/nvm-sh/nvm))

MySQL

If you do not have this installed follow the directions [here](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
I use [MySQL Workbench](https://www.mysql.com/products/workbench/) to interact with MySQL

## Getting Started

- Clone the repository to your local machine
- Use terminal to navigate to this directory
- Run `npm install`.
- Copy `.env.dist` to a file named `.env`
- Change environment variables to match your credentials
- Run the SQL queries in `db/schema.sql` against your local MySQL client
- Run `npm run dev`
- Make requests to the server on `localhost:3000` or whichever port you set it to

## Authorization

All requests to this server must be authorized using a bearer token
