Insightful - SaaS Analytics Dashboard
- A modern full-stack analytics dashboard built with Laravel and React that provides real-time business insights, event tracking, reporting, and user management.

FEATURES
- AUTHENTICATION AND SECURITY
  * User Registrattion
  * User Login
  * Laravel Sanctum Authentication
  * Protected Routes
  * Password Change
  * Profile Management
  * Secure API Authentication

- DASHBOARD
  * Total Events KPI
  * Success Rate KPI
  * Average Value KPI
  * Top Region KPI
  * Events Over Time Visualization
  * Region Analytics
  * Category Analytics
  * Event Activity Monitoring
    
- ANALYTICS
  * Advanced Performance Insights
  * Trend Analysis
  * Regional Performance Reports
  * Category Performance Reports
  * Interactive Charts
  * Business Intelligence Metrics

- REPORTS
  * Executive Summary
  * Trend Reports
  * Region Reports
  * Category Reports
  * CSV Export
  * PDF Export
  * Date Range Filtering

- USER PROFILE
  * Update Name
  * Update Email
  * Upload Profile Photo
  * Change Password
  * Account Management

- UI/UX
  * Responsive Design
  * Dark Mode
  * Modern Dashboard Layout
  * Interactive Charts
  * Toast Notifications
  * Clean Component Architecture

TECH STACK
- FRONTEND
  * React 19
  * TypeScript
  * React Router DOM
  * Axios
  * Taiwind CSS v4
  * Recharts
  * Lucide React Icons
  * React Hot Toast

- BACKEND
  * Laravel 12
  * Laravel Sanctum
  * Eloquent ORM
  * REST API
  * POSTGRESQL

PROJECT STRUCTURE

frontend/
|
|── src/
|    |── assets/
|    |── components/
|    |      |── analytics/
|    |      |── auth/
|    |      |── charts/
|    |      |── dashboard/
|    |      |── layout/
|    |      |── reports/
|    |      |── settings/
|    |── context/
|    |      |── AuthContext
|    |      |── ThemeContext
|    |── hooks/
|    |      |── useReports
|    |── lib/
|    |      |── api
|    |── pages/
|    |      |── Analytics
|    |      |── Dashboard
|    |      |── Login
|    |      |──Register
|    |      |── Reports
|    |      |── Settings
|    |── routes/
|    |      |── AppRoutes
|    |── services/
|    |      |── analytics.service
|    |      |── auth.service
|    |      |── profile.service
|    |── types/
|    |      |── analytics
|    |      |── auth
|    |      |── event
|    |      |── report
|____ public/

backend/
|
|── app/
|      |── console/
|      |── Http/
|      |      |── Controllers
|      |── Models/
|      |── Providers/
|── bootstrap/
|── config/
|── database/
|      |── factories/
|      |── migrations/
|      |── seeders/
|      |── routes/
|______ resources/

INSTALLATION


