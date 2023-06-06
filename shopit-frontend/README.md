# Real World Ecommerce System

![screenshot of Ecomerce System](/resources/screenshot.png)

## Table of Contents

- [Real World Ecommerce System](#real-world-ecommerce-system)
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

📝 In this project we are using react as front end frameworks. It included both user and admin side UI Element.
💡 Component are divided based on functionality .
✨ Key idea of designing the system keeping reusablity, lower coupling [know more... ](#usage).

If this repository is helping your ⭐️⭐️⭐️ star ⭐️⭐️⭐️ is the best support for me.

🕐 This repository will keep update. It is welcome for any pull request for making the code better 🚀🚀🚀.

Realworld Ecommerce System - This repository is only containe frontend.
[💾 Backend ](https://github.com/clonglam/shopIt-backend-master)

## Technology

- [ReactJS](https://react.dev/) Model Front end JS Framework. we are using React 18
- [React-query](https://tanstack.com/query/v3/) Sate management tools for handdling asynchronous data state (Server State) like products and collections.
- [react-router-dom](https://reactrouter.com/) handle for page routering
- [zustand](https://github.com/pmndrs/zustand) Light weight and scalable state-management tools and we use it to handle the Client (UI) state like current user, selected theme etc
- [zod](https://zod.dev/) Data validation tool and use it to validate the form data
- [framer-motion](https://www.framer.com/motion/) Easy and light weight Animation Library
- [Stripe](https://stripe.com/docs/payments) Third party Payment API, provide secure payment handling.
- [chakra-ui](https://chakra-ui.com/) simple, modular compent I also created Autocomplete component for the Chakra UI in this project

## Features

💁‍♂️ User authentication
🖥️ Product Catalog
🛒 Product Cart
💵 Secure Payment integration
📈 Amazing Admin dashboard
💽 Data fetch from backend server
✨ [Low Coupling & High Cohesion](#usage)
✨ [Highly Reuesablity](#usage)
💡 [Code Quality](#code-quality)

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
