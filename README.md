# AI Email Reply Generator

An AI-powered web application that generates professional, casual, and friendly email replies using OpenAI.

Users can enter an email, select a preferred tone, generate an AI-powered reply, edit the generated response, and save it for later use.

## 🚀 Live Demo

Frontend:  
https://ai-email-reply-generator-two.vercel.app/

Backend:  
https://ai-email-reply-generator-backend.onrender.com

## 📂 GitHub Repository

https://github.com/Aadityajain453/AI-Email-Reply-Generator

---

## ✨ Features

- Enter or paste an original email
- Select email tone:
  - Professional
  - Casual
  - Friendly
- Generate AI-powered email replies using OpenAI
- Loading state while generating replies
- Frontend validation and error handling
- Generated reply can be edited before saving
- Save generated replies to MongoDB
- View all previously saved replies
- Display saved date and time
- Copy generated replies to clipboard
- Prevent repeated save clicks after a successful save
- Responsive Bootstrap-based interface
- Secure OpenAI API key using environment variables
- Deployed frontend and backend

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Axios
- React Bootstrap
- Bootstrap
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- OpenAI API
- CORS
- dotenv

### Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📁 Project Structure

```text
AI-Email-Reply-Generator/
│
├── backend/
│   ├── controllers/
│   │   └── replyController.js
│   │
│   ├── models/
│   │   └── Reply.js
│   │
│   ├── routes/
│   │   └── replyRoutes.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── mycomponents/
│   │   │   ├── EmailForm.jsx
│   │   │   └── SavedReplies.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Aadityajain453/AI-Email-Reply-Generator.git
cd AI-Email-Reply-Generator
```

### 2. Backend Setup

Open the backend folder:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

Start the backend:

```bash
node index.js
```

For development using Nodemon:

```bash
npx nodemon index.js
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open a new terminal and go to the frontend folder:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The application will be available on the Vite development URL.

---

## 🔐 Environment Variables

The application uses environment variables to keep sensitive information secure.

### Backend Environment Variables

- `PORT` - Backend server port
- `MONGODB_URI` - MongoDB Atlas connection string
- `OPENAI_API_KEY` - OpenAI API key

### Frontend Environment Variable

- `VITE_API_URL` - Backend API base URL

> Never expose the OpenAI API key in the frontend and never commit `.env` files to GitHub.

---

## 🔌 API Endpoints

The backend provides the following API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/generate-reply` | Generates an AI-powered email reply using OpenAI |
| POST | `/api/save-reply` | Saves the generated reply to MongoDB |
| GET | `/api/replies` | Fetches all saved replies from MongoDB |

### Generate Reply

```text
POST /api/generate-reply
```

Request body:

```json
{
  "email": "Original email content",
  "tone": "professional"
}
```

The backend sends the email and selected tone to the OpenAI API and returns the generated reply.

### Save Reply

```text
POST /api/save-reply
```

Request body:

```json
{
  "originalEmail": "Original email content",
  "generatedReply": "Generated email reply",
  "tone": "professional"
}
```

The reply is stored in MongoDB.

### Get Saved Replies

```text
GET /api/replies
```

This endpoint fetches all saved replies from MongoDB and returns the newest replies first.

---

## 🤖 OpenAI Integration

The application uses the OpenAI API to generate email replies based on the user's selected tone.

The frontend sends the original email and selected tone to the backend. The backend creates a prompt and sends it to the OpenAI API.

The generated response is then returned to the frontend and displayed in an editable textarea.

The OpenAI API key is stored securely in the backend `.env` file and is never exposed in the frontend.

---

## 🗄️ MongoDB

MongoDB Atlas is used to store generated email replies.

Each saved reply contains:

- `originalEmail` - The original email entered by the user
- `generatedReply` - The AI-generated reply
- `tone` - The selected email tone
- `createdAt` - Date and time when the reply was saved

Mongoose is used to define the schema and communicate with MongoDB.

Saved replies are retrieved from MongoDB with the newest replies displayed first.

---

## ✅ Validation and Error Handling

The application includes validation and error handling on both frontend and backend.

### Frontend Validation

- Email cannot be empty
- A tone must be selected before generating a reply
- Loading state is displayed while the AI reply is being generated
- Save button is disabled after a successful save
- Toast notifications are displayed for success and error messages

### Backend Validation

- Email and tone are required for generating a reply
- Original email, generated reply, and tone are required before saving
- Errors from OpenAI, MongoDB, and API operations are handled using `try...catch`

---

## 🚀 Deployment

The application is deployed using the following services:

### Frontend

The React frontend is deployed on Vercel.

Production URL:

https://ai-email-reply-generator-two.vercel.app/

### Backend

The Node.js and Express backend is deployed on Render.

Production URL:

https://ai-email-reply-generator-backend.onrender.com

### Database

MongoDB Atlas is used as the production database.

The deployed backend connects to MongoDB Atlas using the `MONGODB_URI` environment variable.

---

## 📋 Assignment Requirements

The project includes the following required functionality:

- React frontend
- Email input textarea
- Tone selection
- OpenAI API integration
- Node.js and Express backend
- MongoDB database integration
- Generated reply display
- Editable generated reply
- Save generated reply
- Saved replies list
- Loading state
- Validation and error handling
- Secure API key using environment variables
- Frontend and backend deployment

---

## 👨‍💻 Author

**Aditya Jain**

GitHub:  
https://github.com/Aadityajain453/AI-Email-Reply-Generator
