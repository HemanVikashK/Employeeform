CREATE DATABASE empdetails;
CREATE TABLE emp(
    id SERIAL PRIMARY KEY,
    e_name VARCHAR (300),
    e_department VARCHAR(300),
    e_designation VARCHAR(300),
    e_salary VARCHAR(300),
    e_address VARCHAR(300),
    e_dob VARCHAR(300)
);