export const profile = {
  name: 'Gaurav Joshi',
  monogram: 'GJ',
  role: 'Senior Software Engineer',
  tagline: 'Building reliable products, polished interfaces, and systems that scale.',
  location: 'Jaipur, India',
  email: 'joshigaurav1122@gmail.com',
  github: 'https://github.com/iamgauravjoshi',
  linkedin: 'http://www.linkedin.com/in/iamgauravjoshi',
  twitter: 'https://x.com/iamgauravjoshi',
  siteUrl: 'https://gaurav-joshi.vercel.app/',
  // TODO_RESUME_URL — add a hosted résumé PDF and set this; the UI falls back to LinkedIn until then.
  resumeUrl: '',
  availability: {
    // Only rendered when `open` is true AND the label reflects a real, current state.
    open: false,
    label: 'Available for select freelance work',
  },
};

export const proofStrip = [
  { value: '39', label: 'Public GitHub repositories', hint: 'Verified via GitHub API' },
  { value: '04', label: 'Client prototypes delivered', hint: 'Live & verifiable' },
  { value: '09', label: 'Business domains shipped for', hint: 'SaaS → industrial B2B' },
  { value: '03', label: 'Work streams, one standard', hint: 'Professional · Client · Independent' },
];
