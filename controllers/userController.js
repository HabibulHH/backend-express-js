// Mock data (in real apps, this would come from a database)
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  const getAllUsers = (req, res) => {
    res.json(users);
  };
  
  const deleteUser = (req, res) => {
    res.json({ message: 'Delete user logic goes here', users });
  };
  
  const updateUser = (req, res) => {
    res.json({ message: 'Update user logic goes here', users });
  };

  module.exports = {
    getAllUsers,
    deleteUser,
    updateUser
  };