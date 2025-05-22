# API Testing Framework

A framework to test APIs for a React-based application with MySQL data validation.

## Setup
1. **Backend**:
   - Navigate to `server` folder: `cd server`
   - Install dependencies: `npm install`
   - Ensure MySQL is running with database `test_db` and table `users`
   - Update MySQL credentials in `server.js` if needed
   - Start server: `npm start`
2. **Frontend**:
   - Navigate to `api-testing-app` folder: `cd api-testing-app`
   - Install dependencies: `npm install`
   - Start React app: `npm start`
3. **Run Tests**:
   - In `server` folder: `npm test`

## Tech Stack
- Backend: Node.js, Express, MySQL
- Frontend: React, Axios
- Testing: Jest, Supertest

## Output
- Frontend: View user data at `http://localhost:3000`
- Backend: API at `http://localhost:3001/api/users`
- Test results: Logged in console
