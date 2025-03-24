const ShoesModel = require('../models/ShoesModel')

const createShoe = (req, res) => { // create new item 
  const {menShoes, womenShoes, kidsShoes} = req.body
  const shoes = new ShoesModel({ menShoes, womenShoes, kidsShoes })
  shoes.save().then((result) => {
        res.json({message:'shoes created', data: result})
    }).catch((err) => {
        console.log(err)        
    })
}

const getShoe = (req, res) => { 
    let { id } = req.params;
    
    if(id){  // if the id is available return that items
        ShoesModel.find({_id:id})
            .then((result) => {
              res.json({message: 'Shoe info found', data: result})
            }).catch((err) => {
              console.log(err)              
            })
    }else{ // if not id is available return all items
        ShoesModel.find().then((result) => {
            res.json({message: 'Shoes retrieved', data: result})
            }).catch((err) => {
                console.log(err) 
                res.json({message: 'Error fetching info', data: err})
       
            })
    }
}

module.exports = {createShoe, getShoe}