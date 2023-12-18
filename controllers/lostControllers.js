// const db =require ('../db');
// const lostModel = require('../models/lostModels');
// const additem = async (req, res) => {
//     const { title,description, category, country,city,date_lost,contact_name,contact_email,contact_phone ,imagename, imageurl} = req.body;
  
//     try {
//       const lost = await lostModel.additem(title,description, category,country,city, date_lost,contact_name,contact_email,contact_phone,imagename, imageurl);
//       res.status(200).json({ message: 'item added successfully', data: lost });
//     } catch (error) {
//       console.error('Error adding item: ', error);
//       res.status(500).json({ error: 'Error adding item' });
//     }
//   };
// async function getAllProducts(req, res) {
//     try {
//         const products = await lostModel.getAllProducts();
//         res.json(products);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error in getting the home');
//     }
// }
// module.exports = {
//     getAllProducts,
//     additem
// };
const db = require('../db');
const lostModel = require('../models/lostModels');

const addItem = async (req, res) => {
  console.log(456);
  const {
    title,
    description,
    category,
    country,
    city,
    date_lost,
    contact_name,
    contact_email,
    imagename,
    contact_phone,
    imageurl
  } = req.body;
 

  try {
    const lost = await lostModel.addItem(title, description, category, country, city, date_lost, contact_name, contact_email, imagename,contact_phone,  imageurl);
    console.log(lost);
    res.status(200).json({ message: 'item added successfully', data: lost });
  } catch (error) {
    console.error('Error adding item: ', error);
    res.status(500).json({ error: 'Error adding item' });
  }
};

async function getAllProducts(req, res) {
  try {
    const products = await lostModel.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error in getting the home');
  }
}
async function getProductById(req, res) {
  try {
      const productId = req.params.id;
      const product = await lostModel.getProductById(productId);
      res.json(product);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get one product' });
  }
}
async function getLost(req, res) {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const users = await lostModel.getLostF({ page, limit, search });
    const total = await lostModel.getTotallostCount(search);

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
    addItem,
    getProductById,
    getLost
};