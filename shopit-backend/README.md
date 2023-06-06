# Real World Ecommerce System - Backend

![screenshot of Ecomerce System](/resources/screenshot.png)

## Table of Contents

- [Real World Ecommerce System - Backend](#real-world-ecommerce-system---backend)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technology](#technology)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Start](#start)
  - [Usage](#usage)
    - [System Overview](#system-overview)
    - [Code Quality](#code-quality)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

📝 In this project we are using express as our backend, tyescript and babelrc, postgresql as database, Swagger for Documentation, Jest for unit test.

✨ Key idea of designing the system keeping reusablity, lower coupling [know more... ](#usage).

If this repository is helping your ⭐️⭐️⭐️ star ⭐️⭐️⭐️ is the best support for me.

🕐 This repository will keep update. It is welcome for any pull request for making the code better 🚀🚀🚀.

Realworld Ecommerce System - This repository is only containe backend part.
[💾 Backend ](https://github.com/clonglam/shopIt-frontend-master)

## Technology

- [Express](https://expressjs.com/) Fast and minimalist web framework for node.js
- [PostgreSQL](https://www.postgresql.org/) powerful, open source object-relational database
- [Prisma](https://www.prisma.io/) Next-generation Node.js and TypeScript ORM
- [Sawgger](https://swagger.io/tools/swagger-ui/) Easy way to do documentation and visualize and interact with the API’s resources without
- [Zod](https://zod.dev/) Data validation tool and validate the data before we put interact with our database
- [Jest](https://jestjs.io/) Testing Framework. Unit Test and ensure our code is reach the production grade
- [Stripe](https://stripe.com/docs/payments) Third party Payment API, provide secure payment handling.


## Features

📄 Clean Documentation with Sawgger
🛒 Ensured code quality with testing framework
📀 Scalable Scalable Systems
😎 Easily maintain
💁‍♂️ User authentication
💵 Secure Payment integration

## Prerequisites

🔧 This project is required Node.js, PostgreSql database system.
💵 You may need to register a [Stripe](https://stripe.com/docs/payments/checkout) API key

🔧 sample.env is provided just put the API key to the .env file and rename it to .env

## Installation

📦 Clone the repo and run `yarn install`

## Start

After the successfull installation of the packages: `yarn dev`

## Usage

🚀 I tried to divided the component based on functionality, so that we can reuse the component easily in the other project. All the component are following the rulers of Low Coupling, High Cohesion.

### System Overview

In this project mainly included following feature, we can easily reuse those feature.

- User / Authorization
- Collection
- Product
- Cart
- Form
- Table
- UI Interface
- Admin Interface
- Ads (upcoming)

### Code Quality

- Eslint and prettier are used.
- Typescript used for type Check.
- Jset and Cypress Unit Test and End2End Test will do later.

## Contributing

🤝 The project is currently fully build by [Hugo Lam](https://github.com/clonglam)
🤝 Specify will add for contributing to this project.

## License

📄 This project is licensed under the [MIT License](LICENSE).

❤️❤️❤️ if you think it is helpful, pls give ⭐️.
It is welcome for contributing.
