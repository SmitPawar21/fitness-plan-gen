# FitGenius | AI-Based Fitness Plan Generation App

This repository contains an AI-driven fitness plan generation application that uses user biometrics to create personalized fitness plans. With an intuitive dashboard, users can monitor analytics, manage subscriptions, track tasks, and generate unique fitness plans with guidance from an integrated chatbot.

## Table of Contents

- Features
- Tech Stack
- Database Schema
- Usage

## Features
- Dashboard: Displays user analytics, subscription details, and a to-do list for task management.
- Plan Generation: The "Plan Generation" button allows users to create a new fitness plan. Once saved, the plan appears on the "Plan Details" page.
- Personalized Chatbot: An AI chatbot provides users with personalized recommendations and guidance based on their biometrics.
- Authentication: User authentication with JWT for secure access to personalized data.
- Dynamic Biometrics Tracking: Updates and retrieves user biometrics for real-time fitness recommendations.

## Tech Stack
- Frontend: React, Material UI
- Backend: Node.js, JWT Authentication
- Database: PostgreSQL
- AI Model: Plan generation is powered by the Gemini model.

## Database Schema

The application uses a PostgreSQL database with two tables:

- Users

  - id - Primary key
  - email - User's email
  - password - User's hashed password
  
- User_Biometrics

  - user_id - Foreign key referencing Users(id)
  - height - User's height
  - weight - Array to track historical weight values
  - age - User's age
  - Other biometric fields as needed
 
## Usage

- Dashboard: Navigate through analytics, subscription details, and manage tasks on the to-do list.
- Plan Generation: Click the "Plan Generation" button to create a personalized fitness plan.
- Chatbot: Engage with the AI-powered chatbot for personalized fitness guidance.

### I Love Contributions
Feel free to fork this repository and submit pull requests if you have suggestions for optimizations or alternative solutions.

Feedback is always welcome!

📧 Contact - dynaster21@gmail.com

If you have any questions or suggestions, please don't hesitate to reach out.
