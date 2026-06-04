## GitHub Profile Analyzer (Frontend + Backend)

A full-stack web application that analyzes GitHub user profiles and displays useful insights in a clean and responsive UI.

The project is built using React + Redux Toolkit + Tailwind CSS on the frontend and Node.js + Express + MySQL on the backend.

## Features
 - Analyze GitHub user profiles by username
 - Fetch and display profile details in real time 
 - State management using Redux Toolkit
 - Responsive UI using Tailwind CSS
 - REST API built with Express
 - MySQL database integration
 - Error handling and loading states
 - Clean and scalable project structure

## Tech Stack
Frontend
 - React (Vite)
 - Redux Toolkit
 - React Redux
 - Tailwind CSS
 - Axios
 - React Toastify

Backend
   - Node.js
   - Express.js
   - MySQL
   - Nodemon
   - dotenv
   - CORS


## Project Structure 
```bash
github-analyzer/

│── controllers/

├── frontend/

│   ├── src/

│   │   ├── components/

│   │   ├── features/        # Redux slices

│   │   ├── App.jsx

│   │   └── main.jsx

│   └── vite.config.js


│── routes/

│── config/

|── index.js

│

└── README.md

```


##  Environment Variables
```env
PORT=8080
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=github_analyzer_profile
```


## Sql Cmds
```sql
create database github_analyzer_profile;

use github_analyzer_profile;

create table github_analyze_profiles(
id INT AUTO_INCREMENT PRIMARY KEY,
github_id BIGINT UNIQUE,
username VARCHAR(200),
name VARCHAR(200),
bio TEXT,
public_repos INT,
followers INT,
following INT,
public_url VARCHAR(500),
created_at DATETIME,
analyze_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from github_analyze_profiles 

```

## Running the Project Locally

1. Clone the Repository
   git clone https://github.com/Mr-Thanush/github-profile-analyzer.git

   cd github-profile-analyzer

2. Install Frontend Dependencies 
    cd github-analyzer-frontend
    npm install 
    npm run dev
   
   Frontend will run at:http://localhost:5173


3. Install Backend Dependencies
   npm install
   npm run server
   
   Backend will run at:http://localhost:5000


## API Example
  - Analyze GitHub Profile
    POST /github/analyze/profile
  Request Body
     {
  "username": "octocat"
    }

   Response (Example)
      {
  "name": "The Octocat",
  "publicRepos": 8,
  "followers": 5000,
  "following": 9
      }



## Error Handling
- Invalid GitHub username handling
- API error messages using Toast notifications
- loading.. during API calls


##  Author
Thanush V
Aspiring MERN-Stack Developer
Focused on MERN & backend development

## License
This project is licensed under the MIT License.
