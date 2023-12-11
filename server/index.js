const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const Pool = require("./db");
app.post("/emp", async (req, res) => {
  try {
    const { name, department, designation, salary, address, dob } = req.body;
    const response = await Pool.query(
      "INSERT INTO emp(e_name,e_department,e_designation,e_salary,e_address,e_dob) VALUES($1,$2,$3,$4,$5,$6)",
      [name, department, designation, salary, address, dob]
    );
    res.send("POSTed");
  } catch (error) {
    console.log(error);
  }
});

app.get("/empall", async (req, res) => {
  try {
    const response = await Pool.query("SELECT * FROM emp");
    res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
});

app.get("/emp/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Pool.query("SELECT * FROM emp WHERE id=($1)", [id]);
    res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/emp/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Pool.query("DELETE FROM emp WHERE id=($1)", [id]);
    res.send("Deleted");
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("Server Started");
});
