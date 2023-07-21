// Remove the 'import' statements for express and the router
const {
    gettAll,
    getUser,
    AddUser,
    updateUser,
    deleteUser,
  } = require('../Controllers/user');
  
  const router = express.Router();
  
  router.get('/gettAll', gettAll);
  router.get('/getUser/:id', getUser);
  router.put('/updateUser', updateUser);
  router.post('/AddUser', AddUser);
  router.delete('/deleteUser/:id', deleteUser);
  
  module.exports = router;
  