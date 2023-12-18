const pool = require('../db');
async function getAllProducts() {
    try {
      let result = await pool.query('SELECT title, description, category, country, city, date_found, contact_name, contact_email, contact_phone, imagename, imageurl FROM founditems WHERE is_deleted = true');
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async function getAllProductss() {
    try {
      let result = await pool.query('SELECT title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename, imageurl FROM lostitems WHERE is_deleted = true');
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async function getRetrevF({ page, limit, search }) {
    try {
      const query = {
        text: `
          SELECT * FROM founditems
          WHERE is_deleted = true
          and title ILIKE $1
          OFFSET $2 LIMIT $3
        `,
        values: [`%${search}%`, page * limit, limit],
      };
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async function getTotalretrevCount(search) {
    try {
      const totalQuery = {
        text: `
          SELECT COUNT(*) FROM founditems
          WHERE title ILIKE $1
        `,
        values: [`%${search}%`],
      };
      const totalResult = await pool.query(totalQuery);
      return parseInt(totalResult.rows[0].count, 10);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
 

  
module.exports = {
    getAllProducts,
    getAllProductss,
    getTotalretrevCount,
    getRetrevF
};