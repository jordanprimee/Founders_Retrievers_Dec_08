const pool = require('../db');
const addid = async (username,city,phonenumber,imagename, imageurl) => {
    try {
      const additemQuery = `
        INSERT INTO deliveryinfo ( username,city,phonenumber,imagename, imageurl)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
      console.log( username,city,phonenumber,imagename, imageurl);
      const values = [ username,city,phonenumber,imagename, imageurl];
      const { rows } = await pool.query(additemQuery, values);
     
      return rows[0];
    } catch (error) {
      throw error;
    }
  };
  async function getAll() {
    try {
      let result = await pool.query(`
      SELECT *, public.founditems.id, public.users.id_user
      FROM public.deliveryinfo
      JOIN public.users ON public.deliveryinfo.id_user = public.users.id_user
      JOIN public.founditems ON public.deliveryinfo.id_found = public.founditems.id;
      `);
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
module.exports = {
    getAll,
    addid
};