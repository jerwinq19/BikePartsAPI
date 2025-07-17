const db = require('../models/db')

// read
const getAllProduct = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM inventory`, (error, rows) => {
            if (error) return reject(error)
            resolve(rows)
        })
    })
}

//
const getOneProductById = (id) => {
    const query = `SELECT * FROM inventory WHERE id = ?`
    return new Promise((resolve, reject) => {
        db.get(query, [id], (error, row) => {
            if (error) return reject(error)
            resolve(row)
        })
    })
}

// create
const createProduct = (data) => {
    const query = `INSERT INTO inventory (name, price, quantity) VALUES (?,?,?)`
    const { name, price, quantity } = data
    return new Promise((resolve, reject) => {
        db.run(query, [name, price, quantity], (error) => {
            if (error) return reject(error)
            resolve({ id: this.lastID, name, price, quantity })
        })
    })
}

// delete by id 
const DeleteByID = (id) => {
    const query = `DELETE FROM inventory WHERE id = ?`
    return new Promise((resolve, reject) => {
        db.run(query, [id], (error) => {
            if (error) return reject(error)
            resolve(`delete a item with ID number of ${id}`)
        })
    })
}

// update by id 
const UpdateByID = (id, data) => {
    const query = `UPDATE inventory SET name = ?, price = ?, quantity = ? WHERE id = ?`
    const { name, price, quantity } = data
    return new Promise((resolve, reject) => {
        db.run(query, [name, price, quantity, id], (error) => {
            if (error) return reject (error)
            resolve(`Successfully Updated a Data!: ${name} ${price} ${quantity}`)
        })
    })
}


module.exports = {
    inventories,
    getAllProduct,
    createProduct,
    getOneProductById,
    DeleteByID,
    UpdateByID
}
