import type { ExperienceEntry } from '../types';

export const experience: ExperienceEntry[] = [
  {
    id: 'okruti-it-consulting',
    company: 'Okruti IT Consulting Pvt. Ltd.',
    position: 'Software Developer',
    period: 'February 2023 — Present',
    summary:
      'Develop and maintain production web applications across frontend, backend, and interactive 3D experiences.',
    responsibilities: [
      'Build production applications with React, TypeScript, Node.js, and modern frontend architecture patterns.',
      'Create reusable components and complex business workflows; integrate REST APIs with request validation, structured error handling, and asynchronous data flows.',
      'Implement JWT authentication and RBAC, including protected routes and backend authorization checks.',
      'Engineer interactive 3D visualization features with Three.js and React Three Fiber, optimizing rendering and state management for complex interactions.',
      'Optimize database queries and API response handling to reduce p95 response latency under measured workloads.',
      'Collaborate in Agile workflows to deliver maintainable and reliable application features.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'REST APIs',
      'JWT',
      'RBAC',
      'Three.js',
      'React Three Fiber',
    ],
  },
];
