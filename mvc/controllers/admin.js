const {DataTypes} = require('sequelize');
const {sequelize,Sequelize}= require("../models/index");
const Admin = require("../models/admin")(sequelize,DataTypes);
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


module.exports.index = async (req, res) => {

    Admin.findAll().then(data => {

      res.status(201).json(data)
    })
    .catch(err => res.json(err))
 
}



