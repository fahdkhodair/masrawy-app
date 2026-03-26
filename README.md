# Financial Accounting Company System - Suez

## 📌 Project Overview

This project is my **first freelance backend project** for a **financial accounting company in Suez**.
The system is designed to manage financial accounts, users, and company operations using **Node.js and MongoDB**.

The goal of this project is to build a secure and scalable backend system for handling financial data and company services.

---

## 🏢 Company

**Financial Accounting Company - Suez, Egypt**

This system helps the company manage:

* Users
* Financial accounts
* Services
* Authentication
* Data management
* API system for frontend connection

---

## 🚀 Features

* User Authentication (Signup / Login)
* JWT Authentication
* Secure Password Hashing
* OTP Verification
* Financial Account Management
* REST API
* MongoDB Database
* Error Handling
* Middleware System
* Postman API Testing

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Postman
* Render (Deployment)
* GitHub

---

## 📂 Project Structure

```
## 📂 Project Structure

```
src
│
├── config        # Database and environment configuration
├── middleware    # Authentication & error handling middleware
├── models        # MongoDB models (User, Account, etc.)
├── public        # Static files
├── routes        # API routes
├── services      # Business logic and services
├── utils         # Helper functions (JWT, OTP, response, etc.)
│
├── app.js        # Express app configuration
├── index.js      # Server entry point
│
uploads           # Uploaded files
.gitignore        # Ignored files
.hintrc           # Lint configuration
package.json      # Project dependencies
package-lock.json # Dependency lock file
```

### 🔎 Structure Explanation

* **config** → database connection and environment setup
* **middleware** → authentication and error handling
* **models** → MongoDB schemas
* **routes** → API endpoints
* **services** → business logic
* **utils** → helper functions like JWT, OTP, response
* **app.js** → express configuration
* **index.js** → server start
* **uploads** → file uploads

This structure follows clean architecture and is suitable for scalable backend systems.

```

---

## 🔐 Authentication

* Signup
* Login
* Verify OTP
* Generate Token
* Protected Routes

---

## 📡 API Endpoints

### Auth

```
POST /auth/signup
POST /auth/login
POST /auth/verify-otp
```

### Users

```
GET /users
GET /users/:id
```

---

## ⚙️ Installation

### 1- Clone project

```
git clone https://github.com/your-username/financial-company-system
```

### 2- Install dependencies

```
npm install
```

### 3- Run server

```
npm run dev
```

---

## 🌐 Environment Variables

Create `.env`

```
PORT=5000
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret
```

---

## 🧪 Postman

You can test API using Postman.

Example:

```
POST /auth/signup
POST /auth/login
GET /users
```

---

## 🚀 Deployment

Backend deployed on:

* Render
* MongoDB Atlas
* GitHub

---

## 👨‍💻 Developer

**Fahd Khodair**

Backend Node.js Developer
Freelancer

GitHub:
https://github.com/your-username

Email:
[your-email@gmail.com](mailto:your-email@gmail.com)

---

## 🎯 Project Status

✅ Completed
🚀 First Freelance Project
🏢 Financial Accounting Company - Suez

---

## 📄 License

This project is for freelance and company use.
