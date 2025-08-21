# 🚀 Project Management Backend API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose)
![JWT](https://img.shields.io/badge/JWT-Authentication-blue?logo=jsonwebtokens)
![Validator](https://img.shields.io/badge/Express--Validator-Validation-yellow)

---

## ✅ Features

- ✔️ User Registration & Login with **JWT Authentication**
- ✔️ Create & Manage **Projects**
- ✔️ Add **Tasks (Work)** inside each project
- ✔️ Role-based fields (`assignTo`, `status`, `hours`, `startDate`, `endDate`)
- ✔️ Validation using **express-validator**
- ✔️ Secure password hashing with **bcryptjs**
- ✔️ Modular structure with **Controllers, Routes, Middleware**

---

## 📂 Folder Structure

backend/
│── config/
│ └── db.js # Database connection
│
│── controllers/
│ ├── userController.js
│ ├── projectController.js
│ └── workController.js
│
│── middleware/
│ └── authMiddleware.js
│
│── models/
│ ├── User.js
│ ├── Project.js
│ └── Work.js
│
│── routes/
│ ├── userRoutes.js
│ ├── projectRoutes.js
│ └── workRoutes.js
│
│── utils/
│ └── token.util.js # JWT Token Generator
│
│── validators/
│ ├── userValidator.js
│ ├── projectValidator.js
│ └── workValidator.js
│
│── .env # Environment variables
│── index.js # Entry point


---

## ⚙️ Tech Stack

- **Backend Framework:** Express.js  
- **Database:** MongoDB (Atlas)  
- **ODM:** Mongoose  
- **Authentication:** JWT  
- **Validation:** express-validator  
- **Password Security:** bcryptjs  

---

## 🔑 API Endpoints

### 👤 User
- `POST /api/users/register` → Register a new user  
- `POST /api/users/login` → Login & get JWT token  

### 📁 Projects
- `POST /api/projects` → Create a new project (auth required)  
- `GET /api/projects` → Get all user projects  

### 📝 Tasks
- `POST /api/projects/:projectId/tasks` → Add task inside a project  
- `GET /api/projects/:projectId/tasks` → Get tasks of a project  

---

## 🔒 Authentication

All project & task routes are **protected** with JWT.  
Send token in headers:  


Authorization: Bearer <your_token_here>


---

## ⚡ Installation

```bash
# Clone repo
git clone https://github.com/yourusername/your-backend-repo.git

# Go inside project
cd backend

# Install dependencies
npm install

# Add environment variables
touch .env