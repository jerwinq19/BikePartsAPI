const Inventory = require('../models/Inventory')


exports.GetInventories = async (req, res) => {
    try {
        const products = await Inventory.getAllProduct()

        res.status(200).json({
            message: "Fetched Inventory",
            content: products
        })
    } catch (error) {
        res.status(500).json({
            "message": "error"
        })
    }



}

exports.GetInventorie = async (req, res) => {
    const ProductID = parseInt(req.params.id)

    try {
        const product = await Inventory.getOneProductById(ProductID)

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                content: null
            })
        }

        res.status(200).json({
            message: "Data Retrived!",
            content: product,
        })
    } catch (error) {
        res.status(500).json({
            message: "error fetching data!"
        })
    }

}


exports.CreateInventory = async (req, res) => {
    try {
        const { name, price, quantity } = req.body

        const newData = {
            name,
            price,
            quantity,
        }

        const createData = await Inventory.createProduct(newData)

        return res.status(201).json({
            message: "Content Created!",
            content: createData,
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong please try again."
        })
    }
}

exports.DeleteOneItem = async (req, res) => {
    try {
        const productID = parseInt(req.params.id)

        const deletedItem = await Inventory.DeleteByID(productID)

        if (!deletedItem) return res.status(500).json({
            message: "Please put a valid ID."
        })

        res.status(200).json({
            message: deletedItem
        })

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong."
        })
    }
}

exports.EditeOneItem = async (req, res) => {
    try {
        const ProductID = parseInt(req.params.id)
        const newData = {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        }
        const updateItem = await Inventory.UpdateByID(ProductID, newData)

        if (updateItem) return res.status(200).json({
            message: updateItem
        })

    } catch (error) {
        res.status(404).json({
            message: error,
            conttent: req.body
        })
    }
}