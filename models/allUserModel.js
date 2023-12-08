const pool = require('../db');


async function getAllUser() {
  try {
    let result = await pool.query('SELECT * FROM users');
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error in getAllUser:", error);
    throw error;
  }
}


async function getUsers({ page, limit, search }) {
  try {
    const query = {
      text: `
        SELECT * FROM users
        WHERE username ILIKE $1
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

async function getTotalUsersCount(search) {
  try {
    const totalQuery = {
      text: `
        SELECT COUNT(*) FROM users
        WHERE username ILIKE $1
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
  getUsers,
   getTotalUsersCount,
    getAllUser
  };