'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baseDatesSchema = new Schema({
  nameActuacion: {
    type: String
  },
  priceActuacion: {
    type: Number
  },
  imageActuacion: {
    type: String
  },
  descriptionActuacion: {
    type: String
  },
  typeActuacion: {
    type: String,
    enum: ['monologo', 'concierto', 'charla']
  },
  dateActuacion: {
    type: Date
  },
  nameBebida: {
    type: String
  },
  priceBebida: {
    type: Number
  },
  imageBebida: {
    type: String
  },
  typeBebida: {
    type: String,
    enum: ['cerveza', 'whisky', 'ron', 'ginebra', 'refresco']
  },
  stockBebida: {
    type: Number
  }
  
});

const BaseDates = mongoose.model('BaseDates', baseDatesSchema);

module.exports = BaseDates;
