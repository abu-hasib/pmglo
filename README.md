# PM Glo

[![npm version](https://badge.fury.io/js/mongodb.svg)](https://badge.fury.io/js/mongodb)
[![npm version](https://badge.fury.io/js/mongoose.svg)](https://badge.fury.io/js/mongoose)
[![npm version](https://badge.fury.io/js/node.svg)](https://badge.fury.io/js/node)

PM Glo is a RESTful JSON HTTP API gateway that allows programmatic CRUD operations on user records. Some other features:

[1] All requests is authenticated using HTTP Basic Authentication i.e. RFC2617
[2] Its API gateway is available on a publicly accessible server.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. The project uses [yarn](https://yarnpkg.com/ 'Yarn homepage') as the default package manager, use yarn to avoid clash with `package-lock.json` file which `npm` uses.

## Prerequisites

The app uses [Node][1] and also [MongoDB](https://docs.mongodb.com/manual/administration/install-community/ 'Install Mongo'). To run the project you need to install both.

## Installing

- Clone the repo

  ```
  git clone https://github.com/abu-hasib/pmglo.git
  ```

- Install dependences
  ```
  yarn
  ```
- Start the app
  ```
  npm start
  ```
- Run webpack
  ```
  npm run dev
  ```
- Check the app running in the web browser

## Built With

- [Node][1] - Web and API server
- [MongoDB][2] - Database
- [Mongoose][3] - mongodb object modeling package

[1]: https://nodejs.org/en/
[2]: https://www.mongodb.com/
[3]: https://mongoosejs.com/

## Contributing

Coming soon...

## Versioning

Standard git branches used for now

## Authors

- Ridwan Abiola - Creator and Maintainer - [abu-hasib](https://github.com/abu-hasib)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/abu-hasib/miniphonesmart/blob/staging/LICENSE) file for details

## Acknowledgements

1. Good Docs
2. Awesome Online Tutorials
