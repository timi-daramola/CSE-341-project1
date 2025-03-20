const swaggerAutoGen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'API to manage contacts',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/contacts.js'];

// This will generate swagger.json file in the root of the project
swaggerAutoGen(outputFile, endpointFiles, doc); 