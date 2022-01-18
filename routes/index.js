
var express = require('express'); 
var ProductController = require('../controllers/ProductController');
var router = express.Router();

router.post('/api/tag-special-count', ProductController.countTagSpecial);
router.post("/api/add-product", ProductController.addProduct);
router.put("/api/update-tag", ProductController.updateTagging);
router.delete("/api/delete-tag", ProductController.removeTagging);

module.exports = router;


