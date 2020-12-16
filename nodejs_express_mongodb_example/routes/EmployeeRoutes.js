const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//Read ALL
app.get('/employees', async (req, res) => {
  const employees = await employeeModel.find({});

  try {
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Create New Record
/*
    //Sample Input as JSON
    //application/json as Body
    {
      "firstname": "Pritesh",
      "lastname": "Patel",
      "salary": "5000"
    }
*/
app.post('/employee', async (req, res) => {
    const employee = new employeeModel(req.body);
  
    try {
      await employee.save();
      res.send(employee);
    } catch (err) {
      res.status(500).send(err);
    }
  });

//Update Record
app.patch('/employee/:id', async (req, res) => {
    try {
      await employeeModel.findByIdAndUpdate(req.params.id, req.body)
      await employeeModel.save()
      res.send(employee)
    } catch (err) {
      res.status(500).send(err)
    }
  })

//Delete Record
//localhost:8081/employee/5d1f6c3e4b0b88fb1d257237
app.delete('/employee/:id', async (req, res) => {
    try {
      const employee = await employeeModel.findByIdAndDelete(req.params.id)
  
      if (!employee) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app