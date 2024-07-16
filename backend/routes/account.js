const express = require('express');
const accountRouter = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { Account } = require('../db');
const authMiddleware = require('../middleware/middleware');

accountRouter.get('/balance', authMiddleware, async(req,res)=>{
        const account = await Account.findOne({userId: req.userId});
        res.status(200).json({
            balance: account.balance
        });
    
});

accountRouter.post('/transfer', authMiddleware, async(req, res)=>{
   const { amount, to } = req.body;

    const account = await Account.findOne({
        userId: req.userId
    });

    if (account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        message: "Transfer successful"
    })
});

module.exports = accountRouter