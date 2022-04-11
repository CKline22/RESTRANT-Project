const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'http://placekitten.com/350/350'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'surely not that old?'],
    max: [new Date().getFullYear(), 'hey, this year is in the future!']
  }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)

  //atributions for pics
//restrant | Photo by <a href="https://unsplash.com/@seitamaaphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sandra Seitamaa</a> on <a href="https://unsplash.com/s/photos/restaurants?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//latte| Photo by <a href="https://unsplash.com/@fahmipaping?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fahmi Fakhrudin</a> on <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  