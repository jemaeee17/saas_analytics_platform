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

DARK MODE
- The application includes custom Theme Context implementation with support for:
  * Dark Mode
  * Light Mode
  * System Preference Detection
    
SCREENSHOTS

- DASHBOARD
("./assets/dashboard_screenshots/Dashboard_screenshot.png")
("./assets/dashboard_screenshots/Dashboard_screenshot_02.png")
("./assets/dashboard_screenshots/Dashboard_screenshot_03.png")
("./assets/dashboard_screenshots/Dashboard_screenshot_04.png")

- ANALYTICS
("./assets/analytics_screenshots/Analytics_screenshots_01.png")
("./assets/analytics_screenshots/Analytics_screenshots_02.png")
("./assets/analytics_screenshots/Analytics_screenshots_03.png")

- REPORTS
("./assets/reports_screenshots/Reports_screenshots_01.png")
("./assets/reports_screenshots/Reports_screenshots_02.png")
("./assets/reports_screenshots/Reports_screenshots_03.png")
("./assets/reports_screenshots/Reports_screenshots_04.png")

- SETTINGS
("./assets/settings_screenshots/Settings_screenshot_01.png")
("./assets/settings_screenshots/Settings_screenshot_02.png")
("./assets/settings_screenshots/Settings_screenshot_03.png")
("./assets/settings_screenshots/Settings_screenshot_04.png")

- AUTH
("./assets/auth_screenshots/Login.png")
("./assets/auth_screenshots/Register.png")

FUTURE IMPROVEMENTS
- Role Based Access Control
- Real-Time Analytics
- WebSocket Integration
- Advanced Filtering
- Scheduled Reports
- Email Notifications
- Multi-Tenant Support
- AI Insights
- Data Forecasting

AUTHOR 
- Jemae Lyn Bandiola

LinkedIn: 
www.linkedin.com/in/jemae-lyn-bandiola-3ba2693b6

  


