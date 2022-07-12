Cars-Hub-Mern-App

## Details about app:

car-management-system-Mern-App-
The car management system "Cars Hub" is developed in mern stack technologies. 
Key features of this app are: 
1)Login and Signup with authentication and authorization with Jwt.
2)On signup,Wellcome email will be send to user address with password 
3)Complete CRUD operation for Car managemnt -Admin Dashboard 
4)Complete CRUP for user managment -Admin Dashboard 
5)Protected Routes for Admin

## Getting Started

1. Fork and clone the project.
2. Update the .env file with your correct local information 
PORT = 4000
NODE_ENV = DEVELOPMENT
NODE_ENV=PRODUCTION

DB_LOCAL_URI = mongodb://localhost:27017/carshop

JWT_SECRET =
JWT_EXPIRES_TIME= 
COOKIE_EXPIRES_TIME=


SMTP_HOST = 
SMTP_PORT = 
SMTP_EMAIL =
SMTP_PASSWORD = 
SMTP_FROM_EMAIL =
SMTP_FROM_NAME =Cars-Hub

3. Install dependencies: `npm install`
4. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
5. Run the server: `npm run dev`
  - Note: nodemon is used, so you should not have to restart your server
6. Run the frontend App in another terminal: `npm start`
  - Note: nodemon is used, so you should not have to restart your server
7. Visit `http://localhost:3000/`


## Dependencies Backend

"bcryptjs": "^2.4.3",
    "body-parser": "^1.20.0",
    "cloudinary": "^1.30.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "express-fileupload": "^1.4.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.3.0",
    "nodemailer": "^6.7.3",
    "nodemon": "^2.0.15",
    "validator": "^13.7.0"

## Dependencies Frontend
"axios": "^0.27.2",
    "formik": "^2.2.9",
    "mdbreact": "^5.2.0",
    "react": "^18.1.0",
    "react-alert": "^7.0.3",
    "react-alert-template-basic": "^1.0.2",
    "react-bootstrap": "^2.3.0",
    "react-dom": "^18.1.0",
    "react-helmet": "^6.1.0",
    "react-redux": "^8.0.1",
    "react-router": "^6.3.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.4.1",
    "web-vitals": "^2.1.4"
# Car-Hub---Mern-Stack-Application
