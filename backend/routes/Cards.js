const express = require('express');
const Cards = require('../models/Card');
const { v4: uuidv4 } = require('uuid');  // Import UUID

const router = express.Router();


router.post('/card/add', (req, res) => {
    let newCard = new Cards(req.body);
    const paymentID = uuidv4();  // Generate a unique payment ID

    // You can store the paymentID in your card document if you want to keep a reference
    newCard.paymentID = paymentID;

    newCard.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Card saved successfully",
            paymentID: paymentID  // Include the payment ID in the response
        });
    });
});




//get Items
// router.get('/item/getall', (req,res) =>{
//     Items.find().exec((err,Items) =>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             existingItems:Items
//         });
//     });
// });

//get specific Item
// router.get('/item/get/:id', (req, res) => {
//     const itemId = req.params.id;
//     Items.findById(itemId, (err, item) => {
//       if (err) {
//         return res.status(400).json({ success: false, err });
//       }
//       return res.status(200).json({
//         success: true,
//         item
//       });
//     });
//   });


//update Items
// router.put('/item/update/:id',(req,res)=>{
//     Items.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }

//             return res.status(200).json({
//                 success:"Updated Successfully"
//             });
//         }
//     );
// });



//delete post

// router.delete('/item/delete/:id',(req,res) =>{
//     Items.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

//         if(err) return res.status(400).json({
//             message:"Delete Unsuccessfull",err
//         });

//         return res.json({
//             message:"Delete Successfull",deletePost
//         });
//     });
// });




module.exports = router;