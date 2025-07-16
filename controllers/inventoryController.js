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


exports.CreateInventory = (req, res) => {
    const { name, price, quantity } = req.body

    const newData = {
        id: Inventory.inventories.length + 1,
        name,
        price,
        quantity,
    }

    Inventory.createProduct(newData)
    res.status(200).json({
        message: "Content Created!",
        content: newData
    })

}

exports.DeleteOneItem = (req, res) => {
    const ProductID = parseInt(req.params.id)

    const isDelete = Inventory.DeleteByID(ProductID)

    if (isDelete) {

        res.status(200).json({
            message: `Product with ${ProductID}#ID is deleted.`,
            content: Inventory.inventories,
        })
    } else {
        res.status(400).json({
            message: "Invalid request!"
        })
    }
}

exports.EditeOneItem = (req, res) => {
    const ProductID = parseInt(req.params.id)

    const updateInventory = Inventory.UpdateByID(ProductID, req.body)

    if (updateInventory === -1) {
        return res.status(400).json({
            message: "Please put a valid id."
        })
    }

    res.status(200).json({
        message: "Successfully updated!",
        tite: updateInventory
    })
}