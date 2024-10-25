# TimeZonecontatcs
TimeZoneContacts
Contact Management System
A full-featured contact management system API built with Next.js for backend development. This system includes features such as user authentication, contact management, date-time handling, CSV/Excel file uploads, and more, all deployed on a platform like Vercel or Render.

Table of Contents
Project Setup
Database Schema
Environment Variables
API Documentation
File Handling
Date-Time Handling
Security Measures
Deployment
Project Setup
Prerequisites
Node.js and npm
PostgreSQL or MySQL database
GitHub account and access to Codespaces or local development environment
Getting Started
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/contact-management-system.git
cd contact-management-system
Install Dependencies:

bash
Copy code
npm install
Configure Environment Variables: Set up a .env file in the root directory with your database and secret keys.

plaintext
Copy code
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
Run Migrations: Initialize the database and run migrations to create necessary tables.

bash
Copy code
npx sequelize-cli db:migrate
Start the Development Server:

bash
Copy code
npm run dev
Database Schema
User Table
Column	Type	Description
id	INTEGER	Primary Key
email	STRING	User’s email address
password	STRING	Hashed password
verified	BOOLEAN	Email verified status
Contact Table
Column	Type	Description
id	INTEGER	Primary Key
name	STRING	Contact’s name
email	STRING	Contact’s email
phone	STRING	Contact’s phone number
address	STRING	Contact’s address
timezone	STRING	User-defined timezone
createdAt	DATE	Timestamp of creation (UTC)
updatedAt	DATE	Timestamp of last update
Environment Variables
Variable	Description
DATABASE_URL	Database connection string
JWT_SECRET	Secret key for JWT authentication
API Documentation
Authentication Endpoints
POST /api/auth/register: Register a new user
POST /api/auth/login: Login and receive a JWT
POST /api/auth/verify: Verify email after registration
POST /api/auth/reset-password: Password reset with one-time code
Contact Management Endpoints
POST /api/contacts/add: Add a new contact
GET /api/contacts/get: Retrieve contacts with filters and sorting
PUT /api/contacts/update/:id: Update a contact by ID
DELETE /api/contacts/delete/:id: Soft delete a contact by ID
POST /api/contacts/batch: Batch processing to add/update multiple contacts
File Handling Endpoints
POST /api/contacts/upload: Upload CSV/Excel file for bulk contact creation
GET /api/contacts/download: Download all contacts as CSV/Excel
Example API Response
json
Copy code
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "address": "123 Main St",
    "timezone": "America/New_York"
  }
}
File Handling
CSV/Excel Upload: Upload CSV/Excel files for bulk adding or updating contacts. The file data is validated before storage to ensure consistency.
CSV/Excel Download: Retrieve all contacts in CSV/Excel format, including their creation date and timezone.
Date-Time Handling
All timestamps are stored in UTC format. When displaying or retrieving information, the timestamps are converted to the user’s specified timezone.

Security Measures
JWT Authentication: Secure endpoints with JWT tokens.
Rate Limiting: Rate limiting is applied to sensitive endpoints.
Password Hashing: Passwords are hashed using bcrypt for added security.
Deployment
Platform: Deploy the application on platforms like Vercel, Heroku, or Render.
Environment Variables: Configure the required environment variables in the deployment platform.
Deployment Command:
bash
Copy code
npm run build
npm start
Additional Information
ER Diagram: Refer to the docs/ERD.png for a visual representation of the database schema.
Swagger Documentation: Swagger is used to document API endpoints. Access it at /api/docs.
