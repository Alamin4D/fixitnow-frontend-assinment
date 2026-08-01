# 🔧 FixItNow Frontend

> **Your Trusted Home Service Platform**

A modern, responsive, and role-based home service marketplace built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Shadcn UI**. Customers can browse services, book technicians, complete secure payments, and manage bookings, while technicians and admins have dedicated dashboards to manage their workflows.

---

## 🌐 Live Demo

- **Frontend:** https://your-frontend-url.vercel.app
- **Backend API:** https://your-backend-api-url.com
- **Backend Repository:** https://github.com/your-username/fixitnow-backend

---

## 📌 Features

### 🌍 Public Features

- Responsive landing page
- Browse available home services
- View technician profiles
- Advanced search & filtering
- Service categories
- Responsive design for all devices
- Skeleton loading states
- Error handling pages

---

### 👤 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Role-based Access Control
- Protected Routes using Next.js Middleware

Supported Roles:

- Customer
- Technician
- Admin

---

### 👨‍💼 Customer Features

- Browse services
- View technician details
- Book services
- Choose available date & time
- Booking history
- Cancel eligible bookings
- Payment integration (Stripe/SSLCommerz)
- Payment history
- Leave reviews after completed jobs

---

### 👨‍🔧 Technician Features

- Dashboard overview
- Manage profile
- Update skills & experience
- Set service pricing
- Availability scheduler
- Manage booking requests
- Accept bookings
- Decline bookings
- Start jobs
- Complete jobs

---

### 👨‍💻 Admin Features

- Dashboard statistics
- User management
- Ban / Unban users
- Booking overview
- Category management
- Platform monitoring

---

## 📊 Booking Status

| Status | Description |
|---------|-------------|
| REQUESTED | Waiting for technician response |
| ACCEPTED | Customer can proceed to payment |
| DECLINED | Booking rejected |
| PAID | Payment completed |
| IN_PROGRESS | Technician has started the job |
| COMPLETED | Service completed |
| CANCELLED | Booking cancelled |

---

## 🛠 Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Hook Form
- Zod
- TanStack Query
- Axios
- Lucide React
- Sonner Toast
- Framer Motion
- Date-fns

---

## 📁 Project Structure

```
src
│
├── app
│   ├── (auth)
│   ├── dashboard
│   │   ├── admin
│   │   ├── customer
│   │   └── technician
│   ├── services
│   ├── technicians
│   └── payment
│
├── components
│
├── hooks
│
├── lib
│
├── providers
│
├── services
│
├── types
│
└── utils
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/fixitnow-frontend.git
```

```bash
cd fixitnow-frontend
```

---

### Install Dependencies

```bash
npm install
```

---

### Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

### Run Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 🔐 Authentication

Authentication uses JWT tokens issued by the backend API.

Protected routes are handled using:

- Next.js Middleware
- Cookies
- Server Actions

---

## 📡 API Integration

| Feature | Endpoint |
|----------|----------|
| Register | POST /api/auth/register |
| Login | POST /api/auth/login |
| Services | GET /api/services |
| Categories | GET /api/categories |
| Technicians | GET /api/technicians |
| Bookings | GET /api/bookings |
| Create Booking | POST /api/bookings |
| Payments | POST /api/payments/create |
| Reviews | POST /api/reviews |

---

## 📷 Screenshots

### Home Page

_Add screenshot_

### Services

_Add screenshot_

### Technician Dashboard

_Add screenshot_

### Customer Dashboard

_Add screenshot_

### Admin Dashboard

_Add screenshot_

---

## ✨ Future Improvements

- Real-time notifications
- Chat between customer & technician
- Dark mode
- Push notifications
- Email notifications
- Analytics dashboard
- Calendar synchronization

---

## 👨‍💻 Author

**Md Alamin Ahmed**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

## 📄 License

This project was developed for educational purposes as part of the **Next Level Web Development Assignment 5**.