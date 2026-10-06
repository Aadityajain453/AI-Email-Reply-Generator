# 🤖 AI Email Reply Generator

An AI-powered web application that generates professional email replies based on the user's original email and selected tone.

The application allows users to enter an email, choose a preferred tone, generate an AI-powered reply, save the generated reply to MongoDB, and view previously saved replies.

---

## 🚀 Features

* ✉️ Enter an original email
* 🎯 Select email reply tone
* 🤖 Generate AI-powered email replies
* 💾 Save generated replies to MongoDB
* 📋 View all saved replies
* 🔄 Automatically refresh saved replies after saving
* 🛡️ Prevent duplicate saving of the same generated reply
* 🔔 Toast notifications for success and error messages
* ⚡ Loading state while generating replies
* 📱 Responsive React-based UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Bootstrap
* Bootstrap
* Axios
* React Router DOM
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* OpenAI API
* CORS
* dotenv
* Nodemon

---

## 📂 Project Structure

```text
AI-Email-Reply-Generator/
│
├── backend/
│   ├── controllers/
│   │   └── replyController.js
│   │
│   ├── models/
│   │   └── replyModel.js
│   │
│   ├── routes/
│   │   └── replyRoutes.js
│   │
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
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
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Aadityajain453/AI-Email-Reply-Generator.git
```

Move into the project directory:

```bash
cd AI-Email-Reply-Generator
```

---

# 🔧 Backend Setup

Open the backend folder:

```bash
cd backend
```

Install dependencies:

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
npm start
```

Or, if using Nodemon:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

---

# 💻 Frontend Setup

Open a new terminal and move to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

# 🔐 Environment Variables

The backend requires the following environment variables:

| Variable         | Description                                |
| ---------------- | ------------------------------------------ |
| `PORT`           | Port number for the Express server         |
| `MONGODB_URI`    | MongoDB connection string                  |
| `OPENAI_API_KEY` | OpenAI API key used for generating replies |

> ⚠️ Never upload your `.env` file or expose your API keys on GitHub.

Add this to `.gitignore`:

```text
.env
node_modules/
```

---

# 🔌 API Endpoints

## Generate Reply

**POST**

```text
/api/generate-reply
```

### Request

```json
{
  "email": "Hello, I would like to reschedule our meeting.",
  "tone": "professional"
}
```

### Response

```json
{
  "reply": "Hi, Thank you for reaching out..."
}
```

---

## Save Reply

**POST**

```text
/api/save-reply
```

The generated reply and original email are stored in MongoDB.

### Example Request

```json
{
  "originalEmail": "Hello, I would like to reschedule our meeting.",
  "generatedReply": "Hi, Thank you for reaching out...",
  "tone": "professional"
}
```

---

## Get Saved Replies

**GET**

```text
/api/replies
```

### Example Response

```json
{
  "replies": [
    {
      "_id": "123456",
      "originalEmail": "Hello...",
      "generatedReply": "Hi...",
      "tone": "professional",
      "createdAt": "2026-10-06T10:30:00.000Z"
    }
  ]
}
```

---

# 🧠 How It Works

### 1. Enter Email

The user enters the original email that needs a response.

### 2. Select Tone

The user selects the desired tone for the reply, such as:

* Professional
* Friendly
* Casual
* Formal

### 3. Generate Reply

The frontend sends the email and selected tone to the Express backend.

The backend sends a prompt to the OpenAI API and receives the generated response.

### 4. Display Reply

The generated reply is displayed in the frontend.

### 5. Save Reply

The user can save the generated reply.

The reply is stored in MongoDB along with:

* Original email
* Generated reply
* Tone
* Creation date/time

### 6. View Saved Replies

Saved replies are retrieved from MongoDB and displayed in the **Saved Replies** section.

The list automatically refreshes after a successful save.

---

# 🗄️ Database Schema

The application uses MongoDB with Mongoose.

Example Reply document:

```javascript
{
    originalEmail: String,
    generatedReply: String,
    tone: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
}
```

---

# 🛡️ Error Handling

The application handles common errors such as:

* Empty email input
* Tone not selected
* API request failure
* OpenAI API errors
* MongoDB errors
* Failed save requests

Toast notifications are used to provide feedback to the user.

---

# 📸 Screenshots

Add project screenshots here after completing the final UI.

Example:

```text
## 📸 Screenshots

### Email Generator

![Email Generator](screenshots/email-generator.png)

### Generated Reply

![Generated Reply](screenshots/generated-reply.png)

### Saved Replies

![Saved Replies](screenshots/saved-replies.png)
```

---

# 🔮 Future Improvements

Possible future improvements include:

* 🔐 User authentication
* 👤 User-specific saved replies
* ✏️ Edit saved replies
* 🗑️ Delete saved replies
* 🔍 Search saved replies
* 📅 Better date/time formatting
* 🎨 Improved UI/UX
* 🌐 Frontend and backend deployment
* 📧 Direct email sending
* 🌍 Multiple language support

---

# 👨‍💻 Author

**Aditya Jain**

MERN Stack Developer

Skills:

* MongoDB
* Express.js
* React.js
* Node.js
* REST APIs
* CRUD Operations
* JavaScript
* AI API Integration

---

## ⭐ Project

If you find this project useful, consider giving it a ⭐ on GitHub.
