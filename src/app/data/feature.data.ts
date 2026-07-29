import { Feature } from "../models/feature.model";

export const FEATURES: Feature[] = [
    {
        id: 1,
        title: "Backend Development",
        description: "Develop secure REST APIs using Java, Spring Boot, Spring MVC, Spring Security and JPA.",
        icon: "fa-solid fa-server",
        color: "#10B981"
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Build responsive Angular applications with reusable components, Reactive Forms and REST API integration.",
        icon: "fa-solid fa-code",
        color: "#F59E0B"
    },
    {
        id: 3,
        title: "Database Design",
        description: "Design relational databases using PostgreSQL and MySQL with efficient JPA mappings.",
        icon: "fa-solid fa-database",
        color: "#3B82F6"
    },
    {
        id: 4,
        title: "Software Architecture",
        description:
            "Apply Layered Architecture, DTO Pattern, Validation and Global Exception Handling.",
        icon: "fa-solid fa-layer-group",
        color: "#8B5CF6"
    }
];