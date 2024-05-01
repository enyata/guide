
- Use standard es6 statments 
- prefer Functional Programming over Object Oriented Programming
- Use middlewares extensively
- follow strict folder guidelines, deviation from ptovided structure is ill adviced
- Prefer SQL queries over ORM's and Query builders
- Prefer pg-promise for [postgreSQL] database connections, [Mongoose] for mongoDB database connections
- file size should be limited to 250 lines as much as possible 
- Limit nested tennary oparators use multiple `if` instead.
- Prefer Select `column_name` over select `*`
- use PascalCase to name imported classes or functions
- use  camelCase to name functions
- use global logger
- Avoid unused declarations
- Avoid repeatated functions, Use Helper functions and Util functions
- Use Message enums instead of direct input in functions
- always ignore the package-lock.json file
- 


## Bundler

- for javascript projects, use esm, babel or babel-node
- setup `eslint` rules `quotes: 'single' `

# Security useful links for security

- [security guide]: https://www.nodejs-security.com/book/code-injection?type=book
