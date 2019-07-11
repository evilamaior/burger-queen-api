const router = require('express').Router();
const OrderProducts = require('../controllers/orderproducts');

router.get('/', OrderProducts.getOrderProducts);
router.get('/:id', OrderProducts.getOrderProductsById);
router.post('/', OrderProducts.postOrderProducts);
router.put('/:id', OrderProducts.putOrderProducts);
router.delete('/:id', OrderProducts.deleteOrderProducts);

module.exports = router;