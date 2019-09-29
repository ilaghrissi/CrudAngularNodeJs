var connector = require('../connectors/mongo-connector');
var mongoose = connector.connectToDB();
var Schema = mongoose.Schema;

/* Customer schema */ 
var customerSchema = new Schema({
  firstname: String,
  lastname: String,
  birthday: {
    day: Number,
    month: Number,
    year: Number
},
  address: {
	city: String,
	region: String,
	country: String,
	postalCode: String
  },
  phone: String,
  email: String,
  active: Boolean,
  created_at: Date
},{ collection: 'customer_collection' });

/* change _id to id in mongoDB  */
customerSchema.method('toClient', function() {
  var obj = this.toObject();
  //Rename fields
  obj.id = obj._id;
  delete obj._id;
  return obj;
});

// Export the models
module.exports = mongoose.model('customer_collection', customerSchema);;


