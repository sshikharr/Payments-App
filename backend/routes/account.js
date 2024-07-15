const express = require('express');
const accountRouter = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { User, Account } = require('../db');
const authMiddleware = require('../middleware/middleware');

accountRouter.get('/balance', authMiddleware, async(req,res)=>{
        const account = await Account.findOne({userId: req.userId});
        res.status(200).json({
            balance: account.balance
        });
    
});

accountRouter.post('/transfer', authMiddleware, async(req, res)=>{
   const {to, amount} = req.body
   const toAccount = await Account.findOne({userId:to});
   const fromAccount = await Account.findOne({userId: req.userId});
   if(!toAccount){
    res.status(400).json({
        message:"Invalid Account"
    })
   }
   if(fromAccount.balance < amount){
        res.status(400).json({
            message:"Insufficient Balance"
        });
   }
   await Account.updateOne(fromAccount, {
    $inc: {balance: -amount}
   });
   await Account.updateOne(toAccount, {
    $inc: {balance: amount}
   });
   res.status(200).json({
    message: "Transaction Successful"
   })
});

module.exports = accountRouter