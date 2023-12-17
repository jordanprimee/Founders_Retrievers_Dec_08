const db = require('../db');
const lostModel = require('../models/retreve');
async function getAllProductss(req, res) {
    try {
      const products = await lostModel.getAllProductss();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error in getting the home');
    }
  }
  async function getAllProducts(req, res) {
    try {
      const products = await lostModel.getAllProducts();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error in getting the home');
    }
  }
  async function getRetrev(req, res) {
    try {
      const page = parseInt(req.query.page) - 1 || 0;
      const limit = parseInt(req.query.limit) || 5;
      const search = req.query.search || "";
  
      const users = await lostModel.getRetrev({ page, limit, search });
      const total = await lostModel.getTotalUsersCount(search);
  
      const response = {
        error: false,
        total,
        page: page + 1,
        limit,
        users,
      };
  
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
  }
  module.exports = {
      getAllProductss,
      getAllProducts,
      getRetrev
     
  };