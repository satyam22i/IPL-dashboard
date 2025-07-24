# 🏏 IPL Live Score Dashboard

A full-stack IPL live score dashboard built with **React**, **Node.js**, **MongoDB**, and **Tailwind CSS**.  
It displays live and completed match data, pulled from a MongoDB database with filter support.

---

## 📌 Features

- 🎯 View real-time IPL match scores
- 🔍 Filter matches by status: **Live** or **Completed**
- 🎨 Clean and responsive UI with Tailwind CSS
- 🌐 Backend API using Express.js & MongoDB
- 📦 Data stored on MongoDB Atlas cluster

---

## 🧰 Tech Stack

### 👨‍💻 Frontend
- React.js (Vite)
- Axios (for API calls)
- Tailwind CSS (for styling)

### 🔧 Backend
- Node.js
- Express.js
- MongoDB (using Mongoose)
- CORS enabled

---

## 🚀 How to Run the Project

### 1. Clone the Repo
```bash
git clone https://github.com/YOUR_USERNAME/ipl-live-dashboard.git
cd ipl-live-dashboard

## SetUp Backend: 
cd Backend
npm install

## Create a .env file:

Mongo_URI= mongo_connection_url
PORT=5000

## Start the server:

node server.js

## Setup Frontend:

cd ../Frontend
npm install
npm run dev



