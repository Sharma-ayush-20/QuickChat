# QuickChat 💬

A real-time chat application built with the MERN stack that enables users to communicate instantly with features like user authentication, online/offline status, and responsive design.

## ✨ Features

- **Real-time Messaging**: Instant messaging using Socket.IO
- **User Authentication**: Secure login/signup/logout with JWT tokens
- **Online Status**: See who's online/offline in real-time
- **Responsive Design**: Mobile-friendly interface with DaisyUI components
- **State Management**: Efficient state handling with Zustand
- **Toast Notifications**: User-friendly notifications with React Hot Toast
- **Secure**: Cookie-based authentication and password hashing

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - UI library for building user interfaces
- **Tailwind CSS 4.1.11** - Utility-first CSS framework for styling
- **DaisyUI** - Tailwind CSS component library for beautiful UI
- **Zustand 5.0.6** - Lightweight state management solution
- **React Hot Toast 2.5.2** - Beautiful toast notifications
- **Socket.IO Client 4.8.1** - Real-time bidirectional communication
- **React Router DOM 7.6.3** - Client-side routing
- **React Hook Form 7.60.0** - Form validation and handling
- **Axios 1.10.0** - HTTP client for API requests
- **JS Cookie 3.0.5** - Cookie handling utility

### Backend
- **Node.js & Express 5.1.0** - Server framework
- **MongoDB & Mongoose 8.16.2** - Database and ODM
- **Socket.IO 4.8.1** - Real-time communication server
- **JWT 9.0.2** - JSON Web Token authentication
- **bcryptjs 3.0.2** - Password hashing
- **Cookie Parser 1.4.7** - Cookie parsing middleware
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 17.1.0** - Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Sharma-ayush-20/quickchat.git
cd quickchat
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

4. **Environment Setup**
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

5. **Run the Application**

Backend (Terminal 1):
```bash
cd backend
npm run dev
```

Frontend (Terminal 2):
```bash
cd frontend
npm run dev
```

## 🎯 Usage

1. **Sign Up**: Create a new account with username and password
2. **Login**: Access your account securely
3. **Chat**: Send and receive messages in real-time
4. **Online Status**: See which users are currently online
5. **Responsive**: Use on desktop, tablet, or mobile devices
6. **Logout**: Securely end your session

## 📂 Project Structure

```
quickchat/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── utils/
│   │   └── App.jsx
│   └── public/
└── README.md
```

⭐ Star this repo if you found it helpful!
