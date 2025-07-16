# BikePartsAPI

**BikePartsAPI** is a work-in-progress (WIP) RESTful API built using **Express.js** to manage bike parts inventory.

---

## 🚀 Getting Started

This API allows you to perform basic CRUD operations on an inventory of bike parts. All routes are prefixed with `/api`.

---

## 📦 Available Endpoints

### Inventory Management

| Method | Route                  | Description                           |
|--------|------------------------|---------------------------------------|
| `GET`  | `/api/inventories`     | Get a list of all inventories         |
| `GET`  | `/api/inventories/:id` | Get details of a specific inventory   |
| `POST` | `/api/inventories`     | Create a new inventory                |
| `PUT`  | `/api/inventories/:id` | Update an existing inventory by ID    |
| `DELETE` | `/api/inventories/:id` | Delete an inventory by ID           |

---

## 🛠️ How to Use

Make sure to prepend each route with the base URL (e.g., `http://localhost:3000/api/inventories` if running locally).

- Replace `:id` in the URL with the actual inventory ID when making requests.
- Use tools like **Postman**, **curl**, or **Insomnia** for testing the endpoints.
- Ensure request bodies are sent in **JSON format** where applicable.

---

## 🧑‍💻 Development Status

This project is currently under active development. More features will be added soon!
