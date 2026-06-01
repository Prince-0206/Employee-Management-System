
  const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Design Landing Page",
          "taskDescription": "Create a high-fidelity responsive design for the main landing page.",
          "taskDate": "2026-06-02",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false,
          "taskTitle": "Fix Auth Bug",
          "taskDescription": "Resolve the issue where session state drops on page refresh.",
          "taskDate": "2026-05-28",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Update Documentation",
          "taskDescription": "Add new API endpoints schema to the project Readme file.",
          "taskDate": "2026-06-04",
          "category": "Documentation"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Database Optimization",
          "taskDescription": "Index frequently queried collections to speed up load times.",
          "taskDate": "2026-06-03",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true,
          "taskTitle": "Setup Analytics Server",
          "taskDescription": "Configure alternative cloud pipeline for automated user metrics.",
          "taskDate": "2026-05-25",
          "category": "DevOps"
        },
        {
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Review Pull Requests",
          "taskDescription": "Check the code quality for the newly pushed profile views.",
          "taskDate": "2026-06-02",
          "category": "Development"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false,
          "taskTitle": "Create Social Graphics",
          "taskDescription": "Design promotional templates for the product product hunt release.",
          "taskDate": "2026-05-30",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Tailwind Refactoring",
          "taskDescription": "Clean up duplicated styles in global CSS sheets and components.",
          "taskDate": "2026-06-05",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Client Feedback Meeting",
          "taskDescription": "Gather UI revision pointers from the beta group stakeholders.",
          "taskDate": "2026-06-02",
          "category": "Management"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Write Unit Tests",
          "taskDescription": "Implement testing suites for calculation and helper modules.",
          "taskDate": "2026-06-04",
          "category": "QA"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false,
          "taskTitle": "Deploy Patch v1.1",
          "taskDescription": "Push hotfix bundle to production and monitor server crashes.",
          "taskDate": "2026-05-29",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true,
          "taskTitle": "SEO Keyword Research",
          "taskDescription": "Analyze search volumes to optimize marketing copies.",
          "taskDate": "2026-05-24",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Dark Mode Enhancements",
          "taskDescription": "Fine-tune contrast and accessibility for charcoal UI cards.",
          "taskDate": "2026-06-03",
          "category": "Design"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Integrate Payment Gateway",
          "taskDescription": "Connect Stripe webhooks to process core dashboard subscriptions.",
          "taskDate": "2026-06-10",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false,
          "taskTitle": "Optimize Image Assets",
          "taskDescription": "Compress static media graphics to cut initial load footprint.",
          "taskDate": "2026-05-27",
          "category": "Performance"
        },
        {
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false,
          "taskTitle": "Secure API Endpoints",
          "taskDescription": "Sanitize user parameters and set query rate delimiters.",
          "taskDate": "2026-06-02",
          "category": "Backend"
        }
      ]
    }
  ];
  const admin = [{
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
  ];

  export const setlocalstorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getlocalstorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
  }