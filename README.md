# GIS Website with ReactJS

Api with add, update, delete students information.

## Installation

Use the package manager [npm] to install foobar.

```bash
npm init -y
```

## Installation package

```bash
npm install nodemon body-parser express mysql
```

## Start server

Note: You need to start mysql first (can use Xampp)

```bash
nodemon server.js
```

## You can use

- GET:       localhost:{your PORT}/students
- GET by ID: localhost:{your PORT}/students/:id
- POST:      localhost:{your PORT}/students (send with your req.body)
- PUT:       localhost:{your PORT}/students/:id
- DELETE:    localhost:{your PORT}/students/:id