const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

//static signup method
userSchema.statics.signup = async function(email, password) {
    //do validation
    if(!email || ! password){
        throw Error('Email and Password are required')
    }
    if(!validator.isEmail(email)) {
      throw Error("Invalid Email ID");
    }
    if(!validator.isStrongPassword(password)){
      throw Error("Weak Password. Please enter a stronger password.")
    }

    const exists = await this.findOne( { email} ) //check if the email exists
    if (exists) {
        throw Error ('Email is taken')
    } 
    //hashing the password before saving
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create ({email , password: hash})

    return user
}

//static login method

userSchema.statics.login = async function(email,password){
    //do validation
    if(!email || ! password){
        throw Error('Email and Password are required')
    }

    const user = await this.findOne( { email} ) //check if the email exists
    if (!user) {
        throw Error ('Email is incorrect')
    } 
    
    const match = await bcrypt.compare(password, user.password) //match the entered password with the saved one
    if(!match){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)