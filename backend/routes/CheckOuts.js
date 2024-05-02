const express = require('express');
const CheckOuts = require('../models/CheckOut');

const router = express.Router();

//Add Items
router.post('/checkout/create', (req,res) =>{
    let newCheckOuts = new CheckOuts(req.body);

    newCheckOuts.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"CheckOutt saved successfully"
        });
    });
});

//get all checkouts
router.get('/checkout/get', (req,res) =>{
    CheckOuts.find().exec((err,CheckOuts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCheckOuts:CheckOuts
        });
    });
});

//get specific Item
router.get('/checkout/:id', (req, res) => {
    const productId = req.params.id;
    CheckOuts.findById(productId, (err, checkout) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res.status(200).json({
        success: true,
        checkout
      });
    });
  });

//update checkouts
router.put('/checkout/update/:id',(req,res)=>{
    CheckOuts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"CheckOuts update Successfully"
            });
        }
    );
});

//delete checkouts
router.delete('/checkout/delete/:id',(req,res) =>{
    CheckOuts.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});

module.exports = router;