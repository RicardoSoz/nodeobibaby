const mongoose = require('mongoose');

const Data = mongoose.model('data')

const data = new Data({data: "Agustín es puto"})

data.save(function (err, data) {
    if (err) return console.error(err);
    console.log(data.name + " saved to bookstore collection.");
  });
