# Meme Explainer AI

## Overview

Meme Explainer AI is a full-stack web application that uses artificial intelligence to decode and explain memes in multiple languages. Users can upload meme images or provide URLs from social media platforms (Instagram, TikTok, YouTube Shorts) to receive detailed explanations of the humor, cultural context, and references. The application supports over 50 languages and provides instant AI-powered analysis through OpenAI's GPT-4 vision model.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Modern React application using functional components and hooks
- **Vite Build System**: Fast development server and optimized production builds
- **Styling Strategy**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider supporting light/dark modes with CSS variables

### Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript
- **File Upload Handling**: Multer middleware for processing image uploads with 10MB size limits
- **Input Validation**: Zod schemas for request validation and type safety
- **Error Handling**: Centralized error middleware with structured error responses
- **Development Setup**: Hot reload with Vite integration in development mode

### Data Storage Solutions
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Design**: Two main entities - users and meme explanations with proper relationships
- **Memory Storage**: In-memory storage implementation for development/testing with IStorage interface
- **Migration System**: Drizzle Kit for database schema migrations and management

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User System**: Basic user registration and login with password-based authentication
- **API Protection**: Session-based authentication for protected endpoints

### External Service Integrations
- **OpenAI GPT-4 Vision**: Primary AI service for meme analysis and explanation generation
- **Image Processing**: Base64 encoding/decoding for image data handling
- **Multi-platform Support**: URL fetching from various social media platforms with User-Agent headers
- **Language Support**: 12 pre-configured languages with extensible language system

### Key Design Patterns
- **Type Safety**: Shared TypeScript schemas between frontend and backend using Zod
- **Component Architecture**: Reusable UI components with consistent styling and behavior
- **Service Layer**: Separation of business logic into dedicated service modules
- **Configuration Management**: Environment-based configuration with fallbacks
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Error Boundaries**: Graceful error handling throughout the application stack

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL with Neon serverless driver
- **AI Service**: OpenAI GPT-4 Vision API for meme analysis
- **File Storage**: In-memory and filesystem-based image handling
- **Session Store**: PostgreSQL-based session persistence

### Third-party Libraries
- **UI Components**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS for utility-first styling approach
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation
- **Date Handling**: date-fns for date formatting and manipulation
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESBuild for production bundling
- **Development**: tsx for TypeScript execution in development