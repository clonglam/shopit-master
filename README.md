# Real World Ecommerce System Master

![screenshot of Ecomerce System](/resources/screenshot.png)

## Table of Contents

- [Real World Ecommerce System Master](#real-world-ecommerce-system-master)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technology](#technology)
  - [Features](#features)
  - [Included Admin Dashboard](#included-admin-dashboard)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Start](#start)
  - [Usage](#usage)
    - [System Overview](#system-overview)
    - [Code Quality](#code-quality)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

📝 In this project we are using react as frontend frameworks. It included both user and admin side UI Element.
💡 Component are divided based on functionality .
✨ Key idea of designing the system keeping reusablity, lower coupling [know more... ](#usage).

If this repository is helping your ⭐️⭐️⭐️ star ⭐️⭐️⭐️ is the best support for me.

🕐 This repository is the master Repository, It is welcome for any pull request for making the code better 🚀🚀🚀.

Realworld Ecommerce System - Master Repository is the current stable version, and latest feature will be first updated in Frontend and Backend Repository first.  
[🖥️ Frontend ](https://github.com/clonglam/shopit-frontend)
[💾 Backend ](https://github.com/clonglam/shopIt-backend)

## Technology

- [ReactJS](https://react.dev/) Model Front end JS Framework. we are using React 18
- [ExpressJS](https://expressjs.com/) Light weight web framework
- [Prisma](https://www.prisma.io/) TypeScript ORM
- [AWS Aurora](https://aws.amazon.com/rds/aurora/) A scalable secure Database
- [Swagger](https://swagger.io/tools/swagger-ui/) A Documentation tools generated by OpenAPI
- [EC2](https://aws.amazon.com/ec2/) A Secure and resizable compute capacity
- [Typescript](https://www.typescriptlang.org/) Ensure the type safety

## Features

💁‍♂️ User authentication
🖥️ Product Catalog
🛒 Product Cart
💵 Secure Payment integration
📈 Amazing Admin dashboard
💽 Data fetch from backend server

## Included Admin Dashboard

Data Visualization
![screenshot of Ecomerce System](/resources/adminDashboard.png)

Custom Admin Dashbaord created for CRUD Actions.
![screenshot of Ecomerce System](/resources/ProductGrids.png)

Custom Admin Dashbaord created entities with react hook form.
![screenshot of Ecomerce System](/resources/createProduct.png)

More and more feature ...

## Prerequisites

🔧 This project is required Node.js, React 18, PostgreSql database system.
💵 You may need to register a [Stripe](https://stripe.com/docs/payments/checkout) API key

🔧 sample.env is provided just put the API key to VITE_STRIPE_PRUBLIC_KEY=

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