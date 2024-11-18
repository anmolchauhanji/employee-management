
   const employees= [
      {
        "id": "EMP001",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "password": "password123",
        "tasks": [
          {
            "title": "Design Homepage",
            "description": "Create a wireframe for the new homepage design.",
            "date": "2024-11-20",
            "category": "Design",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          },
          {
            "title": "Fix Login Bug",
            "description": "Resolve the issue where users cannot log in with special characters.",
            "date": "2024-11-18",
            "category": "Bug Fix",
            "active": false,
            "completed": true,
            "new": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP002",
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "password": "securepass456",
        "tasks": [
          {
            "title": "Write Blog Post",
            "description": "Draft a blog post about the latest industry trends.",
            "date": "2024-11-19",
            "category": "Content Writing",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          },
          {
            "title": "Update Privacy Policy",
            "description": "Revise the privacy policy to comply with new regulations.",
            "date": "2024-11-22",
            "category": "Legal",
            "active": false,
            "completed": false,
            "new": true,
            "failed": false
          },
          {
            "title": "Team Meeting Preparation",
            "description": "Prepare slides for the quarterly team meeting.",
            "date": "2024-11-21",
            "category": "Management",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP003",
        "name": "Mark Lee",
        "email": "marklee@example.com",
        "password": "mypassword789",
        "tasks": [
          {
            "title": "Backend API Development",
            "description": "Develop new endpoints for the user module.",
            "date": "2024-11-20",
            "category": "Development",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          },
          {
            "title": "API Documentation",
            "description": "Update Swagger documentation for all APIs.",
            "date": "2024-11-19",
            "category": "Documentation",
            "active": false,
            "completed": true,
            "new": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP004",
        "name": "Emily Davis",
        "email": "emilydavis@example.com",
        "password": "password456",
        "tasks": [
          {
            "title": "Market Research",
            "description": "Conduct research on competitors’ strategies.",
            "date": "2024-11-22",
            "category": "Marketing",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          },
          {
            "title": "Ad Campaign Setup",
            "description": "Launch the new product ad campaign.",
            "date": "2024-11-18",
            "category": "Advertising",
            "active": false,
            "completed": true,
            "new": false,
            "failed": false
          },
          {
            "title": "Website Traffic Analysis",
            "description": "Analyze recent traffic trends on the website.",
            "date": "2024-11-19",
            "category": "Analytics",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP005",
        "name": "Chris Brown",
        "email": "chrisbrown@example.com",
        "password": "chris2024",
        "tasks": [
          {
            "title": "Create Test Cases",
            "description": "Write test cases for the new payment module.",
            "date": "2024-11-21",
            "category": "Testing",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          },
          {
            "title": "Bug Fixes",
            "description": "Resolve critical issues reported by QA.",
            "date": "2024-11-20",
            "category": "Bug Fix",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP006",
        "name": "Sophia Green",
        "email": "sophiagreen@example.com",
        "password": "greenworld123",
        "tasks": [
          {
            "title": "Social Media Content",
            "description": "Plan and create content for social media platforms.",
            "date": "2024-11-18",
            "category": "Content Creation",
            "active": false,
            "completed": true,
            "new": false,
            "failed": false
          },
          {
            "title": "SEO Optimization",
            "description": "Optimize the company blog for better search rankings.",
            "date": "2024-11-22",
            "category": "SEO",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP007",
        "name": "James White",
        "email": "jameswhite@example.com",
        "password": "whitepower",
        "tasks": [
          {
            "title": "Customer Feedback",
            "description": "Analyze recent customer feedback reports.",
            "date": "2024-11-20",
            "category": "Customer Support",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP008",
        "name": "Anna Taylor",
        "email": "annataylor@example.com",
        "password": "taylorSwift",
        "tasks": [
          {
            "title": "Update App UI",
            "description": "Redesign app navigation to improve UX.",
            "date": "2024-11-19",
            "category": "Design",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP009",
        "name": "David Clark",
        "email": "davidclark@example.com",
        "password": "davidsecurepass",
        "tasks": [
          {
            "title": "Database Migration",
            "description": "Move the database to a new cloud platform.",
            "date": "2024-11-20",
            "category": "Development",
            "active": false,
            "completed": false,
            "new": true,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP010",
        "name": "Olivia Martinez",
        "email": "oliviamartinez@example.com",
        "password": "olivia456",
        "tasks": [
          {
            "title": "Performance Review",
            "description": "Prepare team performance review for Q4.",
            "date": "2024-11-21",
            "category": "HR",
            "active": true,
            "completed": false,
            "new": false,
            "failed": false
          }
        ]
      }
    ]
   const  admin= [
    {
        "id": "ADMIN001",
        "email": "admin@example.com",
        "password": "adminstrongpass"
      }]
  
  // Set data into localStorage
export const setlocalStorage = () => {
  localStorage.setItem('employee', JSON.stringify(employees)); // Use 'employee' key here
  localStorage.setItem('admin', JSON.stringify(admin)); // Use 'admin' key here
};

// Get data from localStorage
export const getlocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employee')); // Correct the key name here
  const admin = JSON.parse(localStorage.getItem('admin')); // Correct the key name here

  return { employee, admin }; // Return the values for employee and admin
};
