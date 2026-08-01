# API Integration Documentation

# FixItNow Frontend

This document describes how the frontend consumes the backend REST API and maps each frontend page/component to its corresponding backend endpoint.

---

# Base URL

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Production

```text
https://your-backend-api.com/api
```

---

# Authentication

Authentication is handled using **JWT** stored in HTTP-only cookies.

Protected routes are secured using **Next.js Middleware**.

Roles:

- Customer
- Technician
- Admin

---

# Authentication APIs

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Register Page | POST | `/auth/register` | Register new user |
| Login Page | POST | `/auth/login` | Login user |
| Logout Button | POST | `/auth/logout` | Logout current user |
| Current User | GET | `/auth/me` | Get authenticated user |

---

# Service APIs

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Home Featured Services | GET | `/services` | Fetch featured services |
| Services Page | GET | `/services` | Fetch all services |
| Search Services | GET | `/services?search=` | Search services |
| Filter Services | GET | `/services?category=&price=&location=` | Filter services |

---

# Category APIs

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Service Filters | GET | `/categories` | Fetch all categories |
| Admin Categories | GET | `/admin/categories` | Fetch category list |
| Create Category | POST | `/admin/categories` | Create category |
| Update Category | PATCH | `/admin/categories/:id` | Update category |
| Delete Category | DELETE | `/admin/categories/:id` | Delete category |

---

# Technician APIs

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Technicians Page | GET | `/technicians` | Fetch technicians |
| Technician Details | GET | `/technicians/:id` | Technician profile |
| Technician Dashboard | GET | `/technician/profile` | Technician profile |
| Update Technician Profile | PATCH | `/technician/profile` | Update profile |
| Availability | GET | `/technician/availability` | Get availability |
| Update Availability | PATCH | `/technician/availability` | Update availability |

---

# Booking APIs

## Customer

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Create Booking | POST | `/bookings` | Create booking |
| Booking History | GET | `/bookings` | Customer bookings |
| Booking Details | GET | `/bookings/:id` | Booking details |
| Cancel Booking | PATCH | `/bookings/:id/cancel` | Cancel booking |

---

## Technician

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Incoming Bookings | GET | `/technician/bookings` | Incoming bookings |
| Accept Booking | PATCH | `/technician/bookings/:id` | Accept booking |
| Decline Booking | PATCH | `/technician/bookings/:id` | Decline booking |
| Mark In Progress | PATCH | `/technician/bookings/:id` | Update booking status |
| Mark Completed | PATCH | `/technician/bookings/:id` | Complete booking |

---

# Payment APIs

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Pay Now Button | POST | `/payments/create` | Create Stripe/SSLCommerz session |
| Payment Success | GET | `/payments/success` | Verify payment |
| Payment Cancel | GET | `/payments/cancel` | Cancel payment |
| Payment History | GET | `/payments` | Customer payment history |

---

# Review APIs

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Create Review | POST | `/reviews` | Submit review |
| Technician Reviews | GET | `/reviews/:technicianId` | Fetch technician reviews |

---

# Admin APIs

## Dashboard

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Dashboard Statistics | GET | `/admin/dashboard` | Dashboard summary |
| Platform Statistics | GET | `/admin/bookings` | Booking analytics |

---

## User Management

| Frontend Component | Method | Endpoint | Description |
|--------------------|--------|----------|-------------|
| Users Table | GET | `/admin/users` | Fetch users |
| Ban User | PATCH | `/admin/users/:id/ban` | Ban user |
| Unban User | PATCH | `/admin/users/:id/unban` | Unban user |

---

# Error Handling

All API requests implement consistent error handling.

Features include:

- Toast notifications
- Inline validation messages
- Loading Skeletons
- Global Error Boundary
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`

---

# Route Protection

| Route | Access |
|-------|--------|
| `/dashboard/customer/*` | Customer |
| `/dashboard/technician/*` | Technician |
| `/dashboard/admin/*` | Admin |

Middleware validates:

- JWT Authentication
- User Role
- Protected Routes

---

# Data Fetching Strategy

The application uses:

- Server Components for initial data loading
- Client Components for interactive UI
- TanStack Query for caching and mutations
- Axios for API requests

---

# Payment Flow

Customer Booking

```
Create Booking
        │
        ▼
Waiting for Technician
        │
        ▼
Booking Accepted
        │
        ▼
Click "Pay Now"
        │
        ▼
Create Payment Session
        │
        ▼
Stripe / SSLCommerz Checkout
        │
        ▼
Success / Cancel Page
        │
        ▼
Booking Updated
```

---

# Authentication Flow

```
Register
     │
     ▼
Login
     │
     ▼
JWT Cookie
     │
     ▼
Middleware Authentication
     │
     ▼
Role-based Dashboard
```

---

# Booking Status Flow

```
REQUESTED
      │
      ▼
ACCEPTED
      │
      ▼
PAID
      │
      ▼
IN_PROGRESS
      │
      ▼
COMPLETED
```

Alternative Flow

```
REQUESTED
      │
      ├────────► DECLINED
      │
      └────────► CANCELLED
```

---

# Notes

- All protected API requests include JWT authentication.
- Frontend dynamically renders UI based on authenticated user role.
- Payment flow is fully integrated with Stripe or SSLCommerz.
- All CRUD operations are performed through backend REST APIs.
- API errors are presented using user-friendly toast notifications and validation messages.