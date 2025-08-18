# 🎬 Netflix Clone - Built with React.js

Overview
A responsive Netflix clone built with React.js that allows users to:

Create accounts, log in, and log out (Firebase Authentication)

Browse movies and TV shows (powered by TMDB API)

Watch trailers of selected content

Enjoy a responsive design that works on all devices


## 🚀 Features

- **User Authentication**  
  - Sign up with email and password  
  - Log in securely using Firebase Authentication  
  - **Log out functionality** to end user sessions
 
    
- **Movie Data from TMDB**  
  - Fetches the latest and popular movies from **The Movie Database (TMDB) API**  
  - Displays movie details and trailers  

- **Video Player**  
  - Watch official movie trailers directly in the app  

- **Responsive Design**  
  - Optimized for desktop, tablet, and mobile devices  

---


## 🛠️ Tech Stack

- **Frontend:** React.js, CSS (responsive design)  
- **API:** TMDB API  
- **Authentication:** Firebase Authentication  
- **Deployment:** * Vercel*

---

## 📸 Screenshots

### Home Page
![Home Page Screenshot](https://github.com/user-attachments/assets/df72e96d-c4aa-40d0-8932-f507822f3257)

### Login Page
![Login Page Screenshot](https://github.com/user-attachments/assets/bc913758-3f7f-4417-bb9d-c9f262d59c3c)

### Player Page
![Player Page Screenshot](https://github.com/user-attachments/assets/0fbeeb63-3eda-4d71-998c-61e42823703c)

---

## 📂 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-leah-mumbi/netflix-clone.git
2. Navigate to the project folder   
   cd netflix-clone
3. Install dependencies
   npm install
4. Set up environment variables
Create a .env file in the root directory and add:
  REACT_APP_TMDB_API_KEY=your_tmdb_api_key
  REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
5. Run the app
   npm start

  
Project Structure
src/
├── components/ - Reusable UI components
├── pages/      - Main page components
├── services/   - Firebase and TMDB integration
├── styles/     - Global styles
├── App.js      - Main application component
└── index.js    - Entry point

---

🌐 Live Demo
🔗clone-leah.netlify.app

