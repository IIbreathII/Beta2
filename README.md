
![Без имени-1122123](https://github.com/user-attachments/assets/536f2c37-dcea-453a-b85a-30c68e131db6)

# Lead Main

**Lead Main** is a web application for interaction between teachers and students. It includes client and server parts, providing tools for creating tests, managing pages and content, and user interaction.

---

![Видео без названия — сделано в Clipchamp](https://github.com/user-attachments/assets/284cc775-b434-42df-9af2-29a1a39cb78f)


## 🚀 Working with the Website

Once the application is up and running, you can interact with the various features it offers. Here’s a breakdown of how to use the different sections of the site:

### 1. **Home Page**
   - **Purpose**: This is the main page you’ll see when you first open the application.
   - **Features**: 
     - **Animations**: The home page features interactive animations that provide a dynamic experience for users.
     - **Introduction**: You’ll find an overview of the site and instructions on how to use the platform.
     - **Navigation**: From the home page, you can navigate to the teacher’s page or the test-taking section.

### 2. **Teacher’s Page**
   - **Purpose**: The teacher's page is where educators can manage tests and monitor results.
   - **Features**:
     - **Manage Tests**: Teachers can create, edit, and delete tests. They can also configure questions, answers, and test time limits.
     - **View Results**: Teachers can view results of students who have completed the tests. This includes seeing individual answers and scores.
     - **Test Settings**: Teachers can set up different types of questions (e.g., multiple choice, true/false) and adjust time constraints for each test.
   
### 3. **Test Pages**
   - **Purpose**: These pages are where users (students) can take the tests.
   - **Features**:
     - **Start a Test**: When a user starts a test, they will see a countdown timer showing the time remaining.
     - **Answer Questions**: Students can select answers for each question, and they can navigate between questions.
     - **Submit Test**: After answering all the questions, students can submit their test for evaluation.
     - **View Results**: After submitting, students can view their test results, including a breakdown of answers.

### 4. **Popups and Notifications**
   - **Purpose**: Popups are used throughout the site to provide important messages or information to the user.
   - **Features**:
     - **Countdown Timer Popup**: Displays a popup when a timer is about to expire or if the test time is up.
     - **Information and Alerts**: When an important event occurs (e.g., a test submission), a popup will inform the user.

### 5. **Settings and Configuration**
   - **Purpose**: The settings section allows users to adjust their preferences for using the platform.
   - **Features**:
     - **Language Settings**: Users can change the interface language if supported.
     - **Notifications**: Users can choose whether to receive notifications for test updates and other events.

---

## 📖 Example Flow for Students

1. **Login**: Open the home page and log in with your credentials (if authentication is set up).
2. **Take a Test**: Navigate to the test section from the homepage or the teacher’s page.
3. **Complete Questions**: Answer all the questions within the set time.
4. **Submit and Review Results**: Submit your test and review your answers and results.

---

## 📖 Example Flow for Teachers

1. **Login**: Log in to the teacher’s page to access the test management interface.
2. **Create or Edit a Test**: Use the test management section to add new tests or modify existing ones.
3. **Monitor Student Results**: View the results of students who have completed the tests and check their answers.
4. **Adjust Test Settings**: Modify test settings, such as duration, question types, and available languages.

---

By following this guide, you can easily navigate through the application and use its features effectively for both teaching and testing.



## 🎯 Key Features

1. **Page Management**:  
   - A home page with interactive design and animations.  
   - A teacher’s page with tools for managing tests and viewing results.  
   - Test pages for creating, editing, and taking tests.  

2. **Countdown Timer**: A component for managing time limits during tests and other tasks.  

3. **Popups**: Display modal windows for information or settings.  

4. **Animations**: Smooth transitions and effects powered by the GSAP library.  

5. **Data Handling**:  
   - Data exchange between the client and server through a REST API.  
   - JSON-based configuration saving and loading.  

---
ㅤ
# **📂 Project Structure**
```plaintext
Lead-main/
│
├── client/                # Клиентская часть
│   ├── public/            # Статические ресурсы
│   ├── src/               # Исходный код
│   │   ├── components/    # Компоненты React
│   │   ├── pages/         # Страницы приложения
│   │   ├── utils/         # Утилиты и константы
│   └── vite.config.js     # Конфигурация Vite
│
├── server/                # Серверная часть
│   ├── server.py          # Основной серверный файл
│   ├── requirements.txt   # Зависимости Python
│
└── README.md              # Документация
```
ㅤ

---

## 📜 Detailed Code Description

### Client Side

- **Components (`components/`)**:  
  - **CountDown**: A countdown timer used for managing test time.  
  - **Popup**: A modal window for displaying notifications or settings.  
  - **Question**: Displays and interacts with test questions.  

- **Pages (`pages/`)**:  
  - **HomeSc**: The home page with animations (uses GSAP).  
  - **TeacherSc**: Teacher interface for managing tests and viewing statistics.  
  - **TestSc**: Pages for taking tests and viewing results.  

- **Utilities (`utils/constants.js`)**: A file for storing global variables and settings.  

### Server Side

- **server.py**: The main server script.  
  - Handles API requests for data exchange between the client and server.  
  - Supports user authentication and management (optional).  

- **requirements.txt**: A list of required libraries, such as Flask or Django (depending on implementation).  

---

## 🚀 Installation and Launch

### Client Side

1. Ensure [Node.js](https://nodejs.org/) is installed.  
2. Navigate to the `client` folder and install dependencies:  
   ```bash
   cd client
   npm install
3. Start the client:
  ```bash
  npm run dev
  ```
### Server Side
1. Ensure Python (version 3.8 or higher) is installed.
2. Install dependencies:
```bash
pip install -r server/requirements.txt
```
3. Start the server:
```bash
python server/server.py
```
## **📖 Usage**
1.Open the application in a browser at http://localhost:5173.

2.Use the interface to perform tasks:
- The home page contains descriptions and animations.
- The teacher’s section allows test management.
- The test pages let users create or take tests.

## **🛠️ Technologies**
- **Frontend**: React, GSAP, Vite.
- **Backend**: Python, Flask.
- **CSS**: For styling the interface.
