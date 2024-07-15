const zod  = require("zod");

const userCreate = zod.object({
    username: zod.string(),
    firstName: zod.string().max(50),
    lastName: zod.string().max(50),
    password: zod.string().min(6)
});

const userSignin = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

const userUpdate = zod.object({
    password: zod.optional(zod.string().min(6)),
    firstName: zod.optional(zod.string().max(50)),
    lastName: zod.optional(zod.string().max(50))
});

module.exports={
    userCreate: userCreate,
    userSignin: userSignin,
    userUpdate: userUpdate
}