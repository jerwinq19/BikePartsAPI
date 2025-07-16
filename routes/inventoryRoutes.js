const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventoryController')



router.get('/inventories', inventoryController.GetInventories)          // GET all
router.get('/inventories/:id', inventoryController.GetInventorie)       // GET one
router.post('/inventories', inventoryController.CreateInventory)           // CREATE
router.put('/inventories/:id', inventoryController.EditeOneItem)        // UPDATE
router.delete('/inventories/:id', inventoryController.DeleteOneItem)     // DELETE


module.exports = router