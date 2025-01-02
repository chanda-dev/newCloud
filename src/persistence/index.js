const connection = require('../index'); // Import the connection object

// Example function to get all users from the database
async function getAllUsers() {
  try {
    const [rows] = await connection.promise().query('SELECT * FROM users');
    return rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; 
  }
}

module.exports = { getAllUsers };