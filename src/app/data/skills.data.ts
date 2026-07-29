import { Skill } from "../models/skill.model";

export const SKILLS: Skill[] = [
    {
        id: 1,
        title: "Backend Development",
        icon: "fa-solid fa-server",
        color: "#10B981",
        skills: [
            {
                name: "Java",
                icon: "devicon-java-plain colored"
            },
            {
                name: "Spring Boot",
                icon: "devicon-spring-plain colored"
            },
            {
                name: "Spring Security",
                icon: "fa-solid fa-shield-halved",
                color: "#22C55E"
            },
            {
                name: "Spring Data JPA",
                icon: "devicon-spring-plain colored"
            },
            {
                name: "Hibernate",
                icon: "devicon-hibernate-plain colored"
            },
            {
                name: "REST APIs",
                icon: "fa-solid fa-server",
                color: "#38BDF8"
            },
            {
                name: "Microservices",
                icon: "fa-solid fa-network-wired",
                color: "#8B5CF6"
            }
        ]
    },
    {
        id: 2,
        title: "Frontend Development",
        icon: "fa-solid fa-code",
        color: "#F59E0B",
        skills: [
            {
                name: "Angular",
                icon: "devicon-angularjs-plain colored"
            },
            {
                name: "TypeScript",
                icon: "devicon-typescript-plain colored"
            },
            {
                name: "HTML5",
                icon: "devicon-html5-plain colored"
            },
            {
                name: "CSS3",
                icon: "devicon-css3-plain colored"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain colored"
            },
            {
                name: "Responsive Design",
                icon: "fa-solid fa-mobile-screen-button"
            }
        ]
    },
    {
        id: 3,
        title: "Database",
        icon: "fa-solid fa-database",
        color: "#3B82F6",
        skills: [
            {
                name: "PostgreSQL",
                icon: "devicon-postgresql-plain colored"
            },
            {
                name: "MySQL",
                icon: "devicon-mysql-plain colored"
            }, {
                name: "SQL",
                icon: "fa-solid fa-database",
                color: "#8B5CF6"
            }
        ]
    },
    {
        id: 4,
        title: "Tools & Platforms",
        icon: "fa-solid fa-screwdriver-wrench",
        color: "#06B6D4",
        skills: [
            {
                name: "Git",
                icon: "devicon-git-plain colored"
            },
            {
                name: "GitHub",
                icon: "devicon-github-original"
            },
            {
                name: "Maven",
                icon: "devicon-maven-plain colored"
            },
            {
                name: "Postman",
                icon: "devicon-postman-plain colored"
            },
            {
                name: "Swagger / OpenAPI",
                icon: "devicon-swagger-plain colored"
            }
        ]
    },
    {
        id: 5,
        title: "Architecture & Concepts",
        icon: "fa-solid fa-layer-group",
        color: "#8B5CF6",
        skills: [
            {
                name: "MVC Architecture",
                icon: "fa-solid fa-layer-group",
                color: "#06B6D4"
            },
            {
                name: "Layered Architecture",
                icon: "fa-solid fa-cubes-stacked",
                color: "#8B5CF6"
            },
            {
                name: "DTO Pattern",
                icon: "fa-solid fa-code-branch",
                color: "#3B82F6"
            },
            {
                name: "JWT Authentication",
                icon: "fa-solid fa-key",
                color: "#F59E0B"
            },
            {
                name: "Validation",
                icon: "fa-solid fa-circle-check",
                color: "#22C55E"
            },
            {
                name: "Global Exception Handling",
                icon: "fa-solid fa-triangle-exclamation",
                color: "#EF4444"
            }
        ]
    }
];