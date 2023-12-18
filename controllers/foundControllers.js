const db =require ('../db');
const foundModel = require('../models/foundModels');

const additem = async (req, res) => {
    const { id,title,description, category, country,city, date_found,contact_name,contact_email,contact_phone,imagename ,imageurl} = req.body;
  
    try {
      const found = await foundModel.additem(id ,title,description, category,country,city,date_found,contact_name,contact_email,contact_phone,imagename,imageurl);
      console.log(found)

      res.status(200).json({ message: 'item added successfully', data: found });
    } catch (error) {
      console.error('Error adding item: ', error);
      res.status(500).json({ error: 'Error adding item' });
    }
  };
async function getAllProducts(req, res) {
    try {
        const products = await foundModel.getAllProducts();
        // console.log(products)
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error in getting the home');
    }
}

async function getProductById(req, res) {
  try {
    // console.log("id",req.params.id );
      const productId = req.params.productId;
      console.log(productId);
      const product = await foundModel.getProductById(productId);
      res.json(product);
  } catch (error) {
      // console.error(error);
      res.status(500).json({ error: 'Failed to get one product' });
  }
}
async function getFound(req, res) {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const users = await foundModel.getFoundF({ page, limit, search });
    const total = await foundModel.getTotalfoundsCount(search);

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
    getAllProducts,
    additem,
    getProductById,
    getFound
    
};