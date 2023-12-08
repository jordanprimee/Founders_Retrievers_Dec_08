const pool = require('../db');

const addItem = async (title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename,imageurl, status) => {
  try {
    console.log(title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename,imageurl, status);
    const addItemQuery = `
      INSERT INTO lostitems (title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename, imageurl, status, is_deleted)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, false)
      RETURNING *;
    `;
    
  const values = [
  title,
  description,
  category,
  country,
  city,
  date_lost,
  contact_name,
  contact_email,
  contact_phone,
  imagename,
  imageurl,
  status
];
    const { rows } = await pool.query(addItemQuery, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};
const softDeleteItem = async (itemId, newStatus) => {
  try {
    const softDeleteQuery = `
      UPDATE lostitems
      SET is_deleted = true, status = $2
      WHERE id = $1
      RETURNING *;
    `;

    const { rows } = await pool.query(softDeleteQuery, [itemId, newStatus]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};
async function getAllProducts() {
  try {
    let result = await pool.query('SELECT title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename, type,imageurl,status,id FROM lostitems WHERE is_deleted = false');
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getProductById(productId) {
  try {
      const query = 'SELECT * FROM lostitems WHERE id = $1';
      console.log(productId);
      // const  productId= req.params.id;
      const result = await pool.query(query, [productId]);
      return result.rows;
  } catch (error) {
      console.error(error);
      throw error;
  }
}

module.exports = {
  getAllProducts,
  addItem,
  // getProductsByCategory,
  getProductById
};
