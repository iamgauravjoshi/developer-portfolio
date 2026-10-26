import type { Social } from '../types';
import { profile } from './profile';

export const socials: Social[] = [
  { label: 'GitHub', href: profile.github, handle: '@iamgauravjoshi' },
  { label: 'LinkedIn', href: profile.linkedin, handle: 'in/iamgauravjoshi' },
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email },
  { label: 'Twitter / X', href: profile.twitter, handle: '@iamgauravjoshi' },
];

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
];
