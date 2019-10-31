const mongoose = require('mongoose');
const Newone = mongoose.model('data');

module.exports=(app)=>{

    app.get("/oldest", (req, res) => {
        Newone.findOne({}, {}, { sort: { date: -1 } }, function(err, post) {
            res.send( post );
          });
    });
    
}

module.exports=(app)=>{

    app.get("/newest", (req, res) => {
        Newone.findOne().sort({ _id: -1 }).exec(function(err, post) { res.send( post ); });
    });
    
}