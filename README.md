Express indicative validator [![Build Status](https://travis-ci.org/EvGorbenko/express-indicative-validator.svg?branch=master)](https://travis-ci.org/EvGorbenko/express-indicative-validator) [![Coverage Status](https://coveralls.io/repos/github/EvGorbenko/express-indicative-validator/badge.svg?branch=master)](https://coveralls.io/github/EvGorbenko/express-indicative-validator?branch=master)
=========

A small library that validate incoming requests using middleware

## Installation

  `npm install express-indicative-validator`

## Usage

    const { validate } = require('express-indicative-validator');

    router.post('/', validate({ price: 'required|number' }), OrderController.store);
  
## Validation documentation

  https://indicative.adonisjs.com

## Tests

  `npm test`
