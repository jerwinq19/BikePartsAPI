const db = require('../models/db')

let inventories = [
    { id: 1, name: "Helmet", price: 100, quantity: 10 },
    { id: 2, name: "SKEACE Powerpoint Crankset 49T", price: 7500, quantity: 5 },
    { id: 3, name: "SKEACE Outboard Crankset", price: 6700, quantity: 4 },
    { id: 4, name: "Mountainpeak XS‑1 Air Fork", price: 3200, quantity: 6 },
    { id: 5, name: "Mountainpeak XF‑1/XF‑2 Air Fork", price: 2878, quantity: 7 },
    { id: 6, name: "WTB Volt Saddle", price: 1800, quantity: 8 },
    { id: 7, name: "Shimano Tourney Derailleur", price: 1100, quantity: 12 },
    { id: 8, name: "KMC Z410 Chain (Single Speed)", price: 350, quantity: 15 },
    { id: 9, name: "Continental Ultra Sport Tire 700x25c", price: 1400, quantity: 10 },
    { id: 10, name: "Maxxis Ikon MTB Tire 27.5x2.2", price: 1900, quantity: 6 },
    { id: 11, name: "Lixada Clipless Pedals", price: 1200, quantity: 9 },
    { id: 12, name: "ODI Lock-On Grips", price: 900, quantity: 14 },
    { id: 13, name: "RockBros Bike Bag (Top Tube)", price: 700, quantity: 11 },
    { id: 14, name: "Litepro Seatpost (for folding/fixie)", price: 1800, quantity: 5 },
    { id: 15, name: "Shimano Hydraulic Disc Brake Set", price: 2500, quantity: 4 },
    { id: 16, name: "Jagwire Brake Cable Set", price: 450, quantity: 13 },
    { id: 17, name: "Zefal Mini Floor Pump", price: 850, quantity: 6 },
    { id: 18, name: "Lazer Tonic KinetiCore Helmet", price: 3300, quantity: 3 },
    { id: 19, name: "Deore 10-Speed Cassette", price: 2100, quantity: 7 },
    { id: 20, name: "Venzo Platform Pedals", price: 950, quantity: 10 }
];


// read
const getAllProduct = () => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO inventory (name, price, quantity) values ('Ragusa 44mm sealed bearing Headset', 214, 10)`, (err) => {
            if (err) return reject(err)

            db.all(`SELECT * FROM inventory`, (error, rows) => {
                if (error) return reject(error)
                resolve(rows)
            })
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
    inventories.push(data)
}

// delete by id 
const DeleteByID = (id) => {

    const index = inventories.findIndex(i => i.id === id)

    if (index !== -1) {
        inventories.splice(index, 1)
        return true
    }
    return false
}

// update by id 
const UpdateByID = (id, data) => {

    const index = inventories.findIndex(i => i.id === id)

    const { name, price, quantity } = data

    inventories[index] = {
        ...inventories[index],
        name,
        price,
        quantity
    }

    if (index) return index
}


module.exports = {
    inventories,
    getAllProduct,
    createProduct,
    getOneProductById,
    DeleteByID,
    UpdateByID
}
