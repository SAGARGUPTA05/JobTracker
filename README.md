# 🧑‍🎓 Student Job Tracker

A full-stack web app to help students keep track of their job applications.

Built with:
- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB (Atlas)
- **Database**: MongoDB Atlas
- **HTTP Client**: Axios

---

## 📦 Features

- ✅ Add a new job application (Company, Role, Status, Date, Link)
- ✅ View all applications
- ✅ Filter by status or date
- ✅ Update application status
- ✅ Delete a job application
- ✅ Fully responsive UI

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js
- npm or yarn
- MongoDB Atlas account

---

### 📁 Project Structure

# JobTracker

jobTracker/ ├── client/ # React frontend │ └── src/ │ └── StudentJobTracker.jsx ├── server/ # Node/Express backend │ ├── index.js │ ├── models/ │ └── routes/ └── .env # MongoDB Atlas connection string




Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:

env
Copy
Edit
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>.mongodb.net/jobtracker?retryWrites=true&w=majority
Start the server:

bash
Copy
Edit
npm run dev
🌐 Frontend Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd client
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend:

bash
Copy
Edit
npm run dev
📸 Screenshots
![image](https://github.com/user-attachments/assets/3ffdfd51-af52-426f-bdbe-0711d166995a)



🔗 API Endpoints
Method	Endpoint	Description
GET	/api/jobs	Get all applications
POST	/api/jobs	Add a new application
PUT	/api/jobs/:id	Update job status
DELETE	/api/jobs/:id	Delete an application
💡 Future Improvements
Authentication & user profiles

Resume/CV upload

Email reminders for follow-ups

Dashboard with charts

👨‍💻 Author
Sagar Gupta

📜 License
This project is open source and free to use under the MIT License.

yaml
Copy
Edit

---

Let me know if you want me to add instructions for deployment (e.g., on Vercel + Render) or add a logo or badges!






