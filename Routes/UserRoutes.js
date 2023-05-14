const express = require("express");
const {getUser} = require("../Controller/User")

const Router = express();

Router.get("/" , getUser);

module.exports = {Router}
