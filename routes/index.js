
var express = require('express'); 
var ProductController = require('../controllers/ProductController');
var router = express.Router();

router.get('/api/count-tag', ProductController.countOfTagSpecial);
router.post("/api/add-product", ProductController.addProduct);
router.put("/api/update-tag", ProductController.updateTagging);
router.delete("/api/delete-tag", ProductController.removeTagging);

module.exports = router;


