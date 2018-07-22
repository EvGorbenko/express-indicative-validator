Express indicative validator
=========

A small library that validate incoming requests using middleware

## Installation

  `npm install express-indicative-validator`

## Usage

    const { validate } = require('express-indicative-validator');

    router.post('/', validate({ price: 'required|number' }), OrderController.store);
  


## Tests

  `npm test`
