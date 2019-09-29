var Customer = require('../models/schemas');

/**
 * create customer
 */
exports.create = (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let customer = new Customer(request.body);
    customer.save()
    .then(customer => {
        response.status(200).json({'customer': 'customer added successfully'});
    })
    .catch(err => {
        response.status(400).send("unable to save to database");
    });	
};

/**
 * update customer
 */
exports.update = (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    Customer.findByIdAndUpdate(request.params.id, {$set: request.body})
    .then(customer => {
        response.status(200).json({'customer': 'customer updated successfully'});
    })
    .catch(err => {
        response.status(400).send("unable to save to database");
    });
};

/**
 * delete customer
 */
exports.delete = (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
   Customer.findByIdAndRemove(request.params.id)    
   .then(customer => {
    response.status(200).json({'customer': 'customer deleted successfully'});
    })
    .catch(err => {
        response.status(400).send("unable to save to database");
    });	
};

/**
* Get all customers
*/
exports.findAll = (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
	    Customer.find(request.params.id, function (err, customer) {
        if (err) return next(err);
        response.send(customer);
    })
};

/**
 * return customer detail
 */
exports.findById = (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    Customer.findById(request.params.id, function (err, customer) {
        if (err) return next(err);
        response.send(customer);
    })
};

