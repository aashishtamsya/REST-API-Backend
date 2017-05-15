var mongoose = require('mongoose');

//Book Schema

var bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	publisher: {
		type: String
	},
	pages: {
		type: String
	},
	image_url: {
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books

module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
}

// Get Book

module.exports.getBookById = function(id, callback){
	Book.findById(id, callback);
}