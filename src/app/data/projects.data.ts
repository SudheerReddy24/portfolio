import { Project } from "../models/project.model";
import { TECHNOLOGIES } from "./technologies.data";

export const PROJECTS: Project[] = [

    {
        id: 1,

        title: "Startup CRM",

        subTitle: "Enterprise Client Relationship Management Platform",

        description:
            "A full-stack CRM application built using Spring Boot Microservices and Angular. The application provides secure authentication, client onboarding, company management, document uploads, and role-based access control through RESTful APIs.",

        category: "Full Stack",

        technologies: [
            TECHNOLOGIES[0],   // Java
            TECHNOLOGIES[1],   // Spring Boot
            TECHNOLOGIES[2],   // Angular
            TECHNOLOGIES[3],   // PostgreSQL
            TECHNOLOGIES[5],   // Spring Security
            TECHNOLOGIES[6],   // JWT
            TECHNOLOGIES[9],   // Maven
            TECHNOLOGIES[10],  // Swagger
            TECHNOLOGIES[11]   // Postman
        ],

        highlights: [
            "Microservice Architecture",
            "JWT Authentication",
            "Role-Based Access Control",
            "Client Registration",
            "Document Upload",
            "REST API Integration"
        ],

        githubUrl: "",

        liveUrl: "",

        accentColor: "#38BDF8"
    },

    {
        id: 2,

        title: "Employee Address Management System",

        subTitle: "Spring Boot Microservices Application",

        description:
            "A distributed backend application developed using Spring Boot Microservices. The system separates employee and address management into independent services connected through an API Gateway.",

        category: "Microservices",

        technologies: [
            TECHNOLOGIES[0],   // Java
            TECHNOLOGIES[1],   // Spring Boot
            TECHNOLOGIES[4],   // MySQL
            TECHNOLOGIES[9],   // Maven
            TECHNOLOGIES[8]    // Git
        ],

        highlights: [
            "API Gateway",
            "Employee Service",
            "Address Service",
            "REST APIs",
            "Service Communication",
            "Layered Architecture"
        ],

        githubUrl: "",

        liveUrl: "",

        accentColor: "#06B6D4"
    },

    {
        id: 3,

        title: "User Management System",

        subTitle: "RESTful CRUD Application using Spring Boot",

        description:
            "A backend application developed with Spring Boot that provides complete user management functionality through REST APIs, validation, layered architecture, and database persistence.",

        category: "Backend",

        technologies: [
            TECHNOLOGIES[0],   // Java
            TECHNOLOGIES[1],   // Spring Boot
            TECHNOLOGIES[4],   // MySQL
            TECHNOLOGIES[7],   // Hibernate
            TECHNOLOGIES[9]    // Maven
        ],

        highlights: [
            "CRUD Operations",
            "REST APIs",
            "Spring Data JPA",
            "Validation",
            "Exception Handling",
            "Layered Architecture"
        ],

        githubUrl: "",

        liveUrl: "",

        accentColor: "#8B5CF6"
    },

    {
        id: 4,

        title: "Developer Portfolio",

        subTitle: "Modern Portfolio Website built with Angular 17",

        description:
            "A responsive developer portfolio built using Angular 17 Standalone Components featuring a premium glassmorphism UI, reusable components, smooth animations, and a modern user experience.",

        category: "Frontend",

        technologies: [
            TECHNOLOGIES[2],   // Angular
            TECHNOLOGIES[8]    // Git
        ],

        highlights: [
            "Standalone Components",
            "Glassmorphism UI",
            "Responsive Design",
            "Reusable Components",
            "Smooth Animations",
            "Contact Form"
        ],

        githubUrl: "",

        liveUrl: "",

        accentColor: "#F59E0B"
    }

];