# 🌙 DreamLok

**DreamLok** is a full-stack, personal dream journaling web app — built to help you record, reflect, and unlock the deeper meanings of your dreams.

Secure, simple, and surreal — your subconscious deserves a home.

---

## Features

- 📝 Add detailed dream entries with date, emotion, meaning, and reflection
- 🔍 View and scroll through all past dreams
- 💾 Dreams are stored in a MongoDB database
- 📦 Backend powered by Express + Node.js
- 🎨 Beautiful, mobile-friendly frontend using vanilla HTML/CSS/JS
- 🔐 Local-first by default, extensible for cloud deployment

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB (Cloud or Local) |
| Deployment | `localhost` or any VPS (Render, Railway, etc.) |

---

## 📁 Project Structure

DreamLok/               
├── server.js # Express server & routes                           
├── public/                                                   
│ └── index.html # Frontend UI                               
├── models/                                 
│ └── Dream.js # Mongoose model                                                          
├── routes/                                  
│ └── dreams.js # API endpoints (optional separation)                                       
├── package.json                
└── README.md


---

## How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/DreamLok.git
cd DreamLok
```


### 2. Install dependencies
```
npm install
```

### 3. Add your MongoDB URI
Create a .env file:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dreamlokDB
```
Or directly edit in server.js (not recommended for production).

### 4. Start the server
```
node server.js
```
### 5. Visit in browser:
```
http://localhost:5000
```

: MIT © 2025