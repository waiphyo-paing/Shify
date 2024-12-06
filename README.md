# Shify

#### **Shify - Flexible Workforce Scheduling and Management System**

Shify is a web-based platform designed to streamline workforce management by providing flexible scheduling, real-time communication, and financial transparency. The system empowers employees to manage their shifts, view earnings, and stay informed, while giving managers powerful tools for scheduling, shift management, and team coordination.

## Features

- **Shift Management**: Assign, drop, and pick up shifts with compliance checks.
- **Employee Dashboard**: View shifts, earnings, and manage time-off requests.
- **Manager Dashboard**: Oversee team schedules and approve time-off requests.
- **Real-Time Communication**: Group chat and notifications.
- **Analytics & Reporting**: Visualize team availability and generate reports.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Databases**: PostgreSQL, MongoDB
- **Hosting**: Docker, Vercel (Frontend), AWS (Backend)

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/EmployeeShift.git
   cd EmployeeShift

2. Start the application using Docker Compose:
    ```docker-compose up --build```

3. Access the application:
    - Frontend: http://localhost:3000
    - Backend: http://localhost:5001

---

#### **Project Structure**

```
EmployeeShift/
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   └── Dockerfile
├── backend/           # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── Dockerfile
└── docker-compose.yml  # Docker Compose configuration
```

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.