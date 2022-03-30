const Client = require("../models/Client");

exports.createClient = async (req,res) => {

  try {

    const client = await Client.create(req.body);

    res.status(201).json({
      status: "Client successfully created",
      client
    });

  } catch(error) {

    res.status(400).json({
      status: "Something went wrong",
      error
    })

  }

}