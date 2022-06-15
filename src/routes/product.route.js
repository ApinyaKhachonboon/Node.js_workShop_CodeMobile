const router = require('express').Router();
const productController = require('../controllers/product.controller');
// let multer = require('multer');
// let upload = multer();
// route 
// http method

router.get('/', productController.getProducts);
router.get('/price', productController.getProductByPrice);
router.get('/:id', productController.getProduct);
router.post('/', productController.addProduct);
// router.post('/', upload.fields([]), (req, res) => {
//     // res.send(req.body);
//     res.send(req.body);
// });
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
