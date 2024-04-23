
- **a guide to building REST API server** 
- Follow universal REST guideline `module/route_name`
- have a versioning for routes to unify module related routes
- Use Propper protocol for each endpoint (GET, POST, PUT, DELETE)
- Use appropriate HTTP status Codes 
(200-> ok, 400 -> bad requests, 500 -> internal server errors, 201 -> created) e.t.c
- use very descriptive messages
- Maximize the power of middlewares.
- user snake_case for request parameters
- use snake_cases for query parameters
- prefer JSON response format
- return responses in the same format 
`{ "status":'success',"data" : {}, "code": 200 } or { "status":'error', "data" : {}, "code": 400 }`

- # Useful Materials for learning
- [ Free code camp ]: https://www.freecodecamp.org/news/how-to-use-rest-api/
- [ learning rest ]: https://www.restapitutorial.com/