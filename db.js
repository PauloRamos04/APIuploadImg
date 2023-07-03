const mongoose = require("mongoose");
const { connect } = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xyli5t6.mongodb.net/?retryWrites=true&w=majority`);

    console.log("Conectado com sucesso!");
}

main().catch((err) => console.log(err))


module.exports = main;