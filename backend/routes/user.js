const express = require('express');
const { userCreate, userSignin, userUpdate } = require('./inputType');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')
const { User, Account } = require('../db');
const authMiddleware = require('../middleware/middleware');


userRouter.post('/signup', async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = userCreate.safeParse(createPayload);
    if(!parsedPayload){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        });
    }
    const userExists = await User.findOne({username:createPayload.username});
    if(userExists){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        });
    }
    const user = await User.create({
        username : createPayload.username,
        firstName : createPayload.firstName,
        lastName : createPayload.lastName,
        password : createPayload.password
    });
    const userId = user._id;
    const account = await Account.create({
        userId: userId,
        balance: (1+Math.random()*10000)
    })
    const token = jwt.sign({userId: userId}, JWT_SECRET);
    return res.status(200).json({
        message: "User created successfully",
	    token: token,
        balance:account.balance
    })
});

userRouter.post('/signin', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const {success} = userSignin.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message: "Error while logging in"
        })
    }

    const user = await User.findOne({username, password});
    if(!user){
        res.status(411).json({
            message: "Error while logging in"
        })
    }
    const token = jwt.sign({userId: user._id}, JWT_SECRET)
    res.status(200).json({
        token: token
    })
});

userRouter.put('/user', authMiddleware, async (req, res)=>{
    const {success} = userUpdate.safeParse(req.body);
    const id = req.userId;
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    try{
        await User.findOneAndUpdate({_id: id},{
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password
    });
        res.status(200).json({
            message: "Updated successfully"
        })
    }
    catch(err){
        res.status(411).json({
            message: "Error while updating information"
        })
    }
});

userRouter.get('/bulk', async (req, res)=>{
    const filter = req.query.filter ||"";
    const users = await User.find({$or:[{"firstName":{"$regex": filter}} || {"lastname":{"$regex": filter}}]});
    if(users){
        res.status(200).json({
            users: users.map((user)=>({
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                _id: user._id
            }))
        })
    }
});  

module.exports = userRouter;