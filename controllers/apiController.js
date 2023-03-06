const Item = require('../models/Item');
const Tresure = require('../models/Activity');
const Treveler = require("../models/Booking");
const Category = require("../models/Category")
const Bank = require("../models/Bank")
const Member = require("../models/Member");
const Booking = require('../models/Booking');

module.exports = {

getAllBank: async (req , res) =>{
  try {
    const dataBank = await Bank.find()
    res.status(200).json({
       message: "Success Get All Bank",
       result : dataBank
    })
  } catch (error) {
    console.log("error " , error)
  }
},

getbyidBank : async (req, res ) =>{
  const {bankName} = req.body;
  try {
    const dataBank = await Bank.findOne({ nameBank: bankName });
    res.status(200).json({
      meessage : "find one bank name",
      result: dataBank
    })
  } catch (error) {
    console.log("erorr" , error)
    
  }
},

getallproduct : async (req , res) =>{
try {
  const dataitem = await Item.find()
  res.status(200).json({
    message: "Success Get All Item",
    result : dataitem
  })
}catch (error){
  console.log("error" , error)
}
},

getallmember : async (req , res) =>{
  try{
    const datamember = await Member.find()
    res.status(200).json({
      message: "Success Get All Member",
      result : datamember
    })
  }catch (error){
    console.log("error" , error)
  }
},

getallbooking : async (req , res) =>{
  try{
    const databooking = await Booking.find()
    const datatreveler= await Treveler.find()
    res.status(200).json({
      message : "Success Get All Booking & Treveler",
      booking : databooking ,
      treveler : datatreveler,
    })
   } catch (error){
    console.log("error" , error)
   }
  
},

getallitem : async (req , res)=>{
  try{
    const dataitem = await Item.find()
    const datamember = await Member.find()
    const databooking = await Booking.find()
    res.status(200).json({
      message : "Berhasil Menampilkan",
      item : dataitem,
      member : datamember,
      booking : databooking,
    })
  }catch (error){
    console.log("error" , error)
  }
},

getbyidname : async (req , res)=>{
  const {idname} = req.body
  try{
    const datamember = await Member.findOne({firstName : idname})
    res.status(200).json({
      message : "menemukan member",
      result : datamember,
    })
  } catch (error){
    console.log("error" , error)
  }

}


}