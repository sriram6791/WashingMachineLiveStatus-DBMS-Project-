# Washing Machine Status Tracker

## **Database Management Systems - Project**

## **Project Overview**

The **Washing Machine Status Tracker** project is a web-based application designed to automate and manage the usage of washing machines in hostel/PG environments. It provides real-time updates on the availability of washing machines, helping students reduce waiting time and improve the overall laundry experience. The system also includes an administrative dashboard for managing and monitoring the washing machines.

This project focuses on providing a seamless user experience and efficient management of washing machines, making it a valuable tool in student hostels or PGs where the demand for laundry facilities is high.

## **Project Features**
- **Real-time Monitoring**: Track the live status of washing machines (available/occupied).
- **User Logs**: Maintain logs of students using the washing machines.
- **Admin Dashboard**: Allows admin to manage washing machine status, user complaints, and monitor the overall system.
- **Feedback System**: Students can submit complaints/feedback about the washing machines.
- **User Authentication**: Login system for both students and admins with proper authorization.

## **Technology Stack**

### **Frontend Technologies:**
- **HTML**: Structure and content of web pages.
- **CSS**: Styling and ensuring a responsive interface.
- **JavaScript**: Client-side scripting to add interactivity.

### **Backend Technologies:**
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for handling HTTP requests.
- **pg (PostgreSQL Client)**: Connects Node.js with PostgreSQL database.

### **Database Technologies:**
- **PostgreSQL**: Open-source relational database for storing user, feedback, and washing machine data.

### **System Requirements:**
- Any operating system.
- Internet connection.
- Compatible with all major browsers.

## **System Features**

### **User Features:**
- **Login Page**: Authentication system for students and admins.
- **Live Status Page**: View real-time status of washing machines.
- **Feedback Page**: Submit complaints or feedback about washing machines.

### **Admin Features:**
- **Admin Dashboard**: Manage washing machine status, update machine availability, view user logs, and handle complaints.
- **Maintenance Page**: Admin interface to update machine conditions and maintenance status.

## **Database Schema**

### **Tables:**
- **Feedback Table**: Stores complaints/feedback given by users.
  - `Complaint_ID (Primary Key), Complaint_Status, WM_ID (Foreign Key), Student_ID`
  
- **Status Table**: Stores washing machine status (working/under maintenance).
  - `Last_Maintenance_Date, Condition, WM_ID (Foreign Key)`
  
- **User_Log Table**: Logs user interactions with washing machines.
  - `Security_ID (Foreign Key), Date, Time, WM_ID (Foreign Key), Student_ID`
  
- **Login Table**: Stores user login credentials.
  - `UserName (Primary Key), Password`
  
- **WashingMachine Table**: Stores machine details and live status.
  - `WM_ID (Primary Key), Live_Status, Type, Location`
  
- **Security Table**: Stores security IDs.
  - `Security_ID (Primary Key)`

## **Queries**

- **Login Validation**: Validate login credentials.
- **Live Status**: Display real-time status of washing machines.
- **User Log**: Insert and update user log data.
- **Complaint/Feedback Submission**: Register complaints and feedback.
- **Machine Status Update**: Update washing machine status in the system (working/under maintenance).

## **Video Demonstration**

A detailed video demonstration of the project, explaining the functionalities and how the system works, is available here:

[**Video Demonstration**](https://github.com/sriram6791/WashingMachineLiveStatus-DBMS-Project-/blob/b09b499c931c2c560c3cfa2d590fdf789079707b/Video%20demonstration.mp4)


