# ECS Help Desk 
https://ecs-project-omega.vercel.app

## Introduction
Welcome to our comprehensive web application, designed to streamline and enhance user interaction and data visualization. This project is an amalgamation of modern web technologies and best practices, tailored to create an intuitive and responsive user experience. From interactive charts and data management to user authentication and messaging, our application covers a wide array of functionalities, making it versatile for various use cases.

## Technologies Used
This project is built using a robust stack of frontend technologies, ensuring a seamless and dynamic user experience:

- **React**: Leveraging React's component-based architecture, we have constructed a rich user interface that is both efficient and scalable.
- **JavaScript/JSX**: The core business logic and user interface elements are implemented using JavaScript and JSX, offering a blend of functionality and presentation.
- **CSS and Tailwind CSS**: Styled with CSS and the utility-first Tailwind CSS framework, the application boasts a clean, modern design that is both mobile-responsive and easy to customize.
- **Chart.js**: We have integrated Chart.js for rendering various interactive and visually appealing charts, enhancing the data representation aspect of our application.
- **Context API**: Utilizing React's Context API for state management, we ensure a smooth and coherent state flow across different components.
- **Custom Hooks**: Custom React hooks are employed to encapsulate and manage the application's logic, promoting code reuse and simplicity.
- **SVGs and Assets**: The use of SVGs and other assets enhances the visual appeal and user experience of the application.
 
## Screenshots

![Alt text](https://i.imgur.com/Qzy1f7C.png)

![Alt text](https://i.imgur.com/STFYkG8.png)

![Alt text](https://i.imgur.com/Rr75FHG.png)

![Alt text](https://i.imgur.com/ygz2e3B.png)

![Alt text](https://i.imgur.com/XXXAJZo.png)





### Backend
- **Routes**: Description of routing mechanism.
- **Controller**: Role and functionality of controllers.
- **Model**: Structure and design of data models.
- **app.js**: Purpose and functionality of the entry file.

### Frontend
- **Tailwind CSS and Vite**: Integration and usage in the project.
- **Pages**: Structure and role of different pages.
- **Components**: Description of reusable components.
- **Partials**: Use of partials or smaller components.

## Setup Instructions

To get the project up and running on your local machine, follow these steps:

1. **Clone the Repository**
   - First, clone the repository to your local machine using Git.

2. **Backend Setup**
   - Navigate to the backend folder:
     ```
     cd backend
     ```
   - Install the necessary npm packages:
     ```
     npm install
     ```
   - Start the backend server:
     ```
     npm run dev
     ```

3. **Frontend Setup**
   - Navigate to the frontend folder:
     ```
     cd frontend
     ```
   - Install the necessary npm packages:
     ```
     npm install
     ```
   - Start the frontend development server:
     ```
     npm run dev
     ```

After following these steps, your backend and frontend servers should be running, and you can access the application through your web browser.

## Folder Structure
```plaintext

├── App.css
├── App.jsx
├── index.css
├── index2.css
├── main.jsx
├── tree.txt
├── assets
│   └── avatar.svg
├── charts
│   ├── BarChart.jsx
│   ├── BarChart01.jsx
│   ├── BarChart02.jsx
│   ├── BarChart03.jsx
│   ├── ChartjsConfig.jsx
│   ├── DoughnutChart.jsx
│   ├── LineChart01.jsx
│   ├── LineChart02.jsx
│   └── RealtimeChart.jsx
├── components
│   ├── ChatComponent.jsx
│   ├── CreateIssue.jsx
│   ├── createWorkflow.jsx
│   ├── CutomizationSettings.jsx
│   ├── Datepicker.jsx
│   ├── DateSelect.jsx
│   ├── DropdownEditMenu.jsx
│   ├── DropdownFilter.jsx
│   ├── DropdownHelp.jsx
│   ├── DropdownNotifications.jsx
│   ├── DropdownProfile.jsx
│   ├── integratedMessaging.jsx
│   ├── IssuesByCategory.jsx
│   ├── loader.gif
│   ├── Login.jsx
│   ├── Logs.jsx
│   ├── Message.jsx
│   ├── MFApop.jsx
│   ├── MFAsdmodal.jsx
│   ├── Modal.jsx
│   ├── ModalSearch.jsx
│   ├── NavBar.jsx
│   ├── registerFrame.jsx
│   ├── SearchIssues.jsx
│   ├── signInFrame.jsx
│   ├── ThemeToggle.jsx
│   ├── Tooltip.jsx
│   ├── viewAutomatedWorkflows.jsx
│   ├── chat
│   │   ├── ChatBox.jsx
│   │   ├── PotentialChats.jsx
│   │   └── UserChat.jsx
│   ├── Settings
│   │   ├── CurrentSettings.jsx
│   │   ├── MyAccounts.jsx
│   │   └── styles.css
│   └── styles
│       ├── IntegratedMessaging.css
│       ├── mfamodal.css
│       ├── modal.css
│       ├── msg.css
│       ├── regframe.css
│       └── Tickets
│           └── viewTickets.jsx
├── context
│   ├── AuthContext.jsx
│   └── ChatContext.jsx
├── css
│   ├── style.css
│   ├── tailwind.config.js
│   └── additional-styles
│       ├── flatpickr.css
│       └── utility-patterns.css
├── hooks
│   └── useFetchRecipient.js
├── icons
├── images
│   ├── favicon.png
│   ├── icon-01.svg
│   ├── icon-02.svg
│   ├── icon-03.svg
│   ├── user-36-01.jpg
│   ├── user-36-02.jpg
│   ├── user-36-03.jpg
│   ├── user-36-04.jpg
│   ├── user-36-05.jpg
│   ├── user-36-06.jpg
│   ├── user-36-07.jpg
│   ├── user-36-08.jpg
│   ├── user-36-09.jpg
│   └── user-avatar-32.png
├── pages
│   ├── addFAQs.jsx
│   ├── AutomatedWorkflows.jsx
│   ├── Chat.jsx
│   ├── CurrentSettings.jsx
│   ├── Customize.jsx
│   ├── Dashboard.jsx
│   ├── Errorlogs.jsx
│   ├── FAQs.jsx
│   ├── Issues.jsx
│   ├── LandingNav.jsx
│   ├── LandingPage.jsx
│   ├── Login.jsx
│   ├── Login2.jsx
│   ├── MFA.jsx
│   ├── Register.jsx
│   ├── securitySettings.jsx
│   ├── sendEmail.jsx
│   ├── SignUp.jsx
│   ├── Tickets.jsx
│   ├── UserSettings.jsx
│   └── Tickets
│       └── ... (ticket-related pages)
├── partials
│   ├── addFAQsCard.jsx
│   ├── Banner.jsx
│   ├── emails.jsx
│   ├── error.svg
│   ├── FAQsTable.jsx
│   ├── Header.jsx
│   ├── replyEmail.jsx
│   ├── Sidebar.jsx
│   ├── SidebarLinkGroup.jsx
│   └── dashboard
│       ├── AgentDashboardCard01.jsx
│       ├── AgentDashboardCard07.jsx
│       ├── DashboardAvatars.jsx
│       ├── DashboardCard01.jsx
│       ├── DashboardCard02.jsx
│       ├── DashboardCard03.jsx
│       ├── DashboardCard04.jsx
│       ├── DashboardCard05.jsx
│       ├── DashboardCard06.jsx
│       ├── DashboardCard07.jsx
│       ├── DashboardCard08.jsx
│       ├── DashboardCard09.jsx
│       ├── DashboardCard10.jsx
│       ├── DashboardCard11.jsx
│       ├── DashboardCard12.jsx
│       ├── DashboardCard13.jsx
│       ├── DashboardCard20.jsx
│       ├── MessageBox.jsx
│       └── WelcomeBanner.jsx
├── svgs
│   ├── bulb.svg
│   ├── Clouds.svg
│   ├── desk.svg
│   ├── EcsLayers.svg
│   ├── Ellipse 3.svg
│   ├── Ellipse 4.svg
│   ├── Ellipse1.svg
│   ├── Ellipse2.svg
│   ├── Ellipse3.svg
│   ├── Ellipse4.svg
│   ├── facebook.svg
│   ├── Frame 2.png
│   ├── github.svg
│   ├── google.svg
│   ├── Line 3.svg
│   ├── logo1.png
│   ├── pulb.svg
│   ├── pulb2.png
│   └── Vector.svg
└── utils
    ├── Info.jsx
    ├── services.js
    ├── ThemeContext.jsx
    ├── Transition.jsx
    └── Utils.js
```




