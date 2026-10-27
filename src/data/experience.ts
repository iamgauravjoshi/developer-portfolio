import type { ExperienceEntry } from '../types';

export const experience: ExperienceEntry[] = [
  {
    id: 'okruti-it-consulting',
    company: 'Okruti IT Consulting Pvt. Ltd.',
    position: 'Senior Software Developer',
    careerProgression: [
      {
        position: 'Associate Software Developer',
        period: 'March 2023 — June 2024',
        responsibilities: [
          'Built and maintained React and TypeScript interfaces for production workflows.',
          'Integrated REST APIs and handled loading, error, and asynchronous states.',
          'Created reusable UI components and collaborated on feature delivery.',
        ],
      },
      {
        position: 'Software Developer',
        period: 'July 2024 — June 2026',
        responsibilities: [
          'Delivered full-stack features across React, TypeScript, and Node.js applications.',
          'Implemented JWT authentication, protected routes, and role-based access control.',
          'Built interactive 3D views with Three.js and React Three Fiber.',
          'Improved API workflows with request validation and structured error handling.',
        ],
      },
      {
        position: 'Senior Software Developer',
        period: 'July 2026 — Present',
        responsibilities: [
          'Deliver maintainable product features across frontend and backend systems.',
          'Design reusable React and TypeScript components for complex business workflows.',
          'Integrate REST APIs with reliable validation and asynchronous data handling.',
          'Strengthen application security with JWT, RBAC, and backend authorization checks.',
          'Optimize 3D rendering, state management, and database-backed response paths.',
        ],
      },
    ],
    period: 'March 2023 — Present',
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
