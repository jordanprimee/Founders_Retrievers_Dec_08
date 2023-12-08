const pool = require('../db');
const addid = async (username,city,phonenumber,imagename, imageurl) => {
  try {
    const additemmQuery = `
    INSERT INTO deliverylost(username,city,phonenumber,imagename, imageurl)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    
      `
    ;

    const values = [ username,city,phonenumber,imagename, imageurl];
    const { rows } = await pool.query(additemmQuery, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

  async function getAll() {
    try {
      let result = await pool.query(`
      SELECT * , public.lostitems.id, public.users.id_user
      FROM public."deliverylost"
      JOIN public.users ON public."deliverylost".id_user = public.users.id_user
      JOIN public.lostitems ON public."deliverylost".id_lost = public.lostitems.id;
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