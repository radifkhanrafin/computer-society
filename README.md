# WUBCS Official Website

<p align="center">
  <img src="./public/logo.png" alt="WUBCS Logo" width="140" />
</p>

<p align="center">
  <strong>Official Website of the World University of Bangladesh Computer Society</strong>
</p>

<p align="center">
A modern, secure, and scalable full-stack web application built to manage the activities, members, events, and digital presence of the World University of Bangladesh Computer Society (WUBCS).
</p>

---

## Overview

The WUBCS Official Website is designed to provide a professional online platform for the Computer Society while simplifying administrative operations through a secure management dashboard.

The application allows administrators to manage committee members, students, events, galleries, blogs, achievements, announcements, and other website content from a centralized dashboard.

The public website is optimized for performance, accessibility, responsiveness, and modern user experience.

---

# Features

## Public Website

- Modern Landing Page
- About WUBCS
- Committee Members
- Student Members
- Events & Activities
- Gallery
- Blog System
- Achievements
- Sponsors
- Contact Page
- Responsive Design
- SEO Friendly Structure
- Smooth Animations
- Optimized Images

---

## Admin Dashboard

Secure authentication protected dashboard.

### Dashboard

- Website statistics
- Quick overview
- Recent activities

### Committee Management

- Create Committee Member
- Update Committee Member
- Delete Committee Member
- Ordering Support

### Member Management

- Student Member CRUD
- Search
- Filtering

### Event Management

- Create Event
- Update Event
- Delete Event

### Blog Management

- Create Blog
- Rich Content Management

### Gallery Management

- Upload Images
- Manage Albums

### Achievement Management

- Create Achievements
- Edit Achievements

### Sponsor Management

- Manage Sponsors

### Website Settings

- Configure Website Information
- Update General Settings

---

# Technology Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- React Icons

---

## Backend

- Next.js Route Handlers
- MongoDB
- Mongoose
- JWT Authentication
- HTTP Only Cookies

---

## Development Tools

- TypeScript
- ESLint
- npm
- Git
- GitHub

---

# Security

This project follows several security best practices.

- JWT Authentication
- HTTP Only Authentication Cookies
- Password Hashing using bcryptjs
- Protected Admin Routes
- Server-side Validation
- Client-side Validation
- Secure Environment Variables
- MongoDB Schema Validation

---

# Folder Structure

```text
app/
components/
models/
lib/
hooks/
types/
public/
scripts/
middleware.ts
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to project

```bash
cd project-name
```

Install dependencies

```bash
npm install
```

Create environment file

```
.env.local
```

Example

```env
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_super_secret_key
```

Run development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Environment Variables

The application requires the following environment variables.

| Variable | Description |
|-----------|-------------|
| MONGODB_URI | MongoDB Connection URI |
| JWT_SECRET | JWT Secret Key |

---

# Authentication

The administration panel uses secure JWT authentication.

Workflow:

1. Admin Login
2. Password Verification
3. JWT Generation
4. HTTP Only Cookie
5. Protected Dashboard Access

---

# Database

MongoDB is used as the primary database.

Main Collections include:

- Admin
- Committee
- Members
- Events
- Blogs
- Gallery
- Achievements
- Sponsors
- Settings

---

# Design

The interface follows a modern UI philosophy.

- Responsive Layout
- Dark Theme
- Glassmorphism
- Smooth Motion Effects
- Mobile Friendly
- Clean Typography

---

# Performance

The application is optimized using:

- Server Components
- Route Handlers
- Image Optimization
- Lazy Loading
- Code Splitting
- Optimized Rendering

---

# Project Status

This project is currently under active development.

Features are continuously being improved and expanded to support future activities of WUBCS.

---

# License

This project is proprietary software.

Unauthorized copying, redistribution, modification, or commercial use without permission is prohibited.

© World University of Bangladesh Computer Society.

All Rights Reserved.

---

# Developer

**Md. Mahfuz Hossain**

Full Stack MERN Developer

Portfolio

```
https://mahfuz-nine.vercel.app
```

GitHub

```
https://github.com/mahfuz278
```

LinkedIn

```
https://www.linkedin.com/in/md-mahfuz-hossain-314188284/
```

---

# Acknowledgements

Special thanks to the executive committee, moderators, advisors, and members of the World University of Bangladesh Computer Society for their continuous support and contribution toward building a modern digital platform.