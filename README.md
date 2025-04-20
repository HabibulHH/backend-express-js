
# Backend Express.js

This is a backend application built using **Node.js** and **Express.js**. It includes features like user management, request validation, rate limiting, and audit logging.

---

## 🚀 Features

- **User Management**: Perform CRUD operations on user data.
- **Middleware**:
  - Request validation
  - User-Agent validation
  - Audit logging of incoming requests
- **Rate Limiting**: Restricts excessive requests per IP
- **Config via `.env`**: Supports environment-specific settings

---

## 📁 Project Structure

```
├── app.js                 # Main application file
├── controllers/
│   └── userController.js  # Handles user-related logic
├── middleware/
│   ├── audit/
│   │   └── auditLogger.js # Logs request data for auditing
│   ├── logs/
│   │   └── requests.json  # Stores audit logs
│   └── user.js            # Validates User-Agent, etc.
├── route/
│   └── user.js            # User-related API routes
├── service/
│   └── userService.js     # Business logic layer
├── utils/
│   └── logger.js          # Logging utilities
├── userAgents.json        # Allowed User-Agent list
├── blocked.json           # List of blocked IPs
├── package.json           # Project metadata and dependencies
├── .gitignore             # Git ignored files
└── README.md              # Project documentation
```

---

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

---

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with necessary environment variables. Example:

   ```env
   PORT=3000
   ```

4. Customize `userAgents.json` and `blocked.json` to match your app's needs.

---

## ▶️ Usage

Start the server:

```bash
npm start
```

Access the API at:

```
http://localhost:<PORT>/api/user
```

---

## 📬 API Endpoints examples (it can differ with original one)

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | `/api/user`        | Fetch all users        |
| POST   | `/api/user`        | Add a new user         |
| PUT    | `/api/user/:id`    | Update user by ID      |
| DELETE | `/api/user/:id`    | Delete user by ID      |

### Sample POST Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## 🧩 Middleware Summary

- **Audit Logger**: Logs incoming requests to `logs/requests.json`.
- **Rate Limiter**: Limits to 1 request per second per IP.
- **User-Agent Validator**: Blocks requests from disallowed clients.

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for bug fixes or improvements.
