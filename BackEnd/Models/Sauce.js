const mongoose = require('mongoose');
const validator = require('../middleware/formValidation');

const sauceSchema = mongoose.Schema({
    userId: { type: String },
    name: { type: String, required: true, validate: validator.nameValidator },
    manufacturer: { type: String, required: true, validate: validator.manufacturerValidator },
    description: { type: String, required: true, validate: validator.descriptionValidator },
    mainPepper: { type: String, required: true, validate: validator.pepperValidator },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number },
    dislikes : { type : Number },
    usersLiked : { type : [String] },
    usersDisliked : { type : [String] }
  });
  
  module.exports = mongoose.model('Sauce', sauceSchema);