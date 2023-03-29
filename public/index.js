const { response } = require("express");

const fetchCustomers = async () => {
  try {
    const customers = await fetch("localhost:5001/api/customer ");

    if (!customers.ok) {
      throw new Error(`Failed to fetch customers:${response.status}`);
    }
    return customers.json();
  } catch (e) {
    console.log(e);
  }
};
