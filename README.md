# PM Glo

[![npm version](https://badge.fury.io/js/mongodb.svg)](https://badge.fury.io/js/mongodb)
[![npm version](https://badge.fury.io/js/mongoose.svg)](https://badge.fury.io/js/mongoose)
[![npm version](https://badge.fury.io/js/node.svg)](https://badge.fury.io/js/node)

PM Glo is a RESTful JSON HTTP API gateway that allows programmatic CRUD operations on user records. Some other features:

- All requests is authenticated using HTTP Basic Authentication i.e. RFC2617
- Its API gateway is available on a publicly accessible server.


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

## Operations

#### 1. Create a User

**Request**

Endpoint :   "/users" e.g. `http://test.com/users`

Method: `POST`

Data:

	{
		"firstname": "chibunna",
		"lastname": "oduonye",
		"gender": "M",
		"date_of_birth": "2015-04-08"
	}

**Response**

Code: `200`

Data:

	{
		"id": "1",
		"firstname": "chibunna",
		"lastname": "oduonye",
		"gender": "M",
		"date_of_birth": "2015-04-08",
		"date_created": "2014-07-17T03:03:34",
		"date_updated": "2014-07-17T03:03:34"
	}


#### 2. Select All Users

**Request**

Endpoint :   "/users" e.g. `http://test.com/users?filter_field=firstname&filter_value=chibunna`

Method: `GET`

Parameters (Optional): 

1. sort_field - this can be any field in the JSON e.g. "firstname",
2. sort_order_mode - this can be either "asc" or "desc"
3. filter_field - this can be any field in the JSON e.g. "firstname",
4. filter_value - the criteria upon which the response data will be filtered 
5. page : The current page. Default is 1
6. page_size: The number of records per page. Default is 25

**Response**

Code: `200`

Data:

	[
    		{
			"id": "1",
				"firstname": "chibunna",
				"lastname": "oduonye",
				"gender": "M",
				"date_of_birth": "1990-04-08",
				"date_created": "2014-07-17T03:03:34",
				"date_updated": "2014-07-17T03:03:34"
    		},
    		{
			"id": "2",
				"firstname": "Godwin",
				"lastname": "Orubebe",
				"gender": "M",
				"date_of_birth": "1965-04-08",
				"date_created": "2014-07-17T04:12:25",
				"date_updated": "2014-07-17T04:12:25"
    		}
]

#### 3. Select User By ID

**Request**

Endpoint :   "/users/{id}" e.g. `http://test.com/users/1`

Method: `GET`	

**Response**:

Code: `200`

Data:

      {
		"id": "1",
	       	"firstname": "chibunna",
		"lastname": "oduonye",
		"gender": "M",
		"date_of_birth": "2015-04-08",
		"date_created": "2014-07-17T03:03:34",
	"date_updated": "2014-07-17T03:03:34"
	}

#### 4. Edit User	

**Request**

Method: `PUT`

Endpoint: "users/{id}" e.g. `http://test.com/users/1`

Payload: 

 	{
		"id": "2"
		"firstname": "Godwin",
		"lastname": "Jega",
		"gender": "M",
		"date_of_birth": "2015-04-08"
	}

**Response**

Code: `200`

Data:

	{
		"id": "2"
		"firstname": "Godwin",
		"lastname": "Jega",
		"gender": "M",
		"date_of_birth": "2015-04-08",
		"date_created": "2014-07-17T04:12:25",
		"date_updated": "2014-07-17T18:44:19"
	}

#### 5. Delete User

**Request**

Method: `DELETE`

Endpoint: "users/{id}" e.g http://test.com/1

**Response**

Code: `200`

Data: <empty>

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
