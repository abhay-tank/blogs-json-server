# Feather API

Feather API is a Nodejs Express REST API which provides blog details.

### Base URL

```
https://feather-api.herokuapp.com
```

## API ENDPOINTS

### Fetch blogs

```
/blogs
```

A simple **GET** request on /blogs will return all blogs in database.

```
/blogs?limit=10
```

**GET** request on /blogs with query **limit** will return specified number of blogs in database.

```
/blogs/:id
```

**GET** request on /blogs with specified id in params will return blog with specific id.

### Create new Blog

```
/blogs
```

#### **author, title, content and imageURL are required\***

#### Request Body

```json
{
	"author": "Blog Author",
	"title": "Blog Title.",
	"content": "Blog content",
	"imageURL": "Blog image URL",
	"relatedLinks": [
		{
			"title": "Related Blog Title.",
			"id": "Existing Blog id"
		},
		{
			"title": "Related Blog Title.",
			"id": "Existing Blog id"
		}
	]
}
```

### Update blog

```
/blogs:id
```

**PATCH** request on /blogs with specified id in params and request body with specified key value will update specified blog.

#### \*While updating relatedLinks, make sure to add older links else will be replaced by new links

```json
{
	"title": "Updated Blog Title.",
	"content": "Updated Blog content",
	"relatedLinks": [
		{
			"title": "Updated Related Blog Title.",
			"id": "Existing Blog id"
		}
	]
}
```

#### Delete Blog

**DELETE** request with specified id will delete the blog from database.

```
/blogs/:id
```

### Directory Tree

```
.
├── app.js
├── config.env
├── config.sample.env
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── configuration
    │   └── config.js
    ├── controllers
    │   └── blogsController.js
    ├── data
    │   └── blogs.json
    ├── helpers
    │   └── validateLinks.js
    ├── middlewares
    │   ├── checkBlogId.js
    │   ├── responses
    │   │   ├── sendErrorResponse.js
    │   │   └── sendSuccessResponse.js
    │   └── validateRequestBody.js
    ├── Models
    │   ├── Blog.js
    │   ├── BlogLink.js
    │   └── ErrorResponse.js
    └── routes
        └── blogsRouter.js
```

### Installation

Feather requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies and start the server.
Create config.env by refering config.sample.env

```sh
$ npm install
$ npm run dev
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production npm run start
```

##### POSTMAN Collection Link - [Feather API](https://www.getpostman.com/collections/555c3129555e05068655)

## Deployed on Heroku - [https://feather-api.herokuapp.com/](https://feather-api.herokuapp.com/)
