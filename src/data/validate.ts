import type { Project, SkillGroup } from '../types';
import { PROJECT_FILTERS } from './projects';

/** Fail early when authored portfolio data would generate ambiguous or broken content. */
export function validatePortfolioContent(projects: Project[], skillGroups: SkillGroup[]) {
  const errors: string[] = [];
  const allowedProjectFilters = new Set<string>(PROJECT_FILTERS);
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const project of projects) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id)) {
      errors.push(`Project "${project.title}" has an invalid id: "${project.id}".`);
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
      errors.push(`Project "${project.title}" has an invalid slug: "${project.slug}".`);
    }
    if (ids.has(project.id)) errors.push(`Duplicate project id: "${project.id}".`);
    if (slugs.has(project.slug)) errors.push(`Duplicate project slug: "${project.slug}".`);
    ids.add(project.id);
    slugs.add(project.slug);

    const projectTags = new Set<string>();
    for (const tag of project.tags) {
      if (!allowedProjectFilters.has(tag)) {
        errors.push(`Project "${project.title}" has an invalid work filter: "${tag}".`);
      }
      if (projectTags.has(tag)) {
        errors.push(`Project "${project.title}" has a duplicate work filter: "${tag}".`);
      }
      projectTags.add(tag);
    }

    for (const [field, value] of [['liveUrl', project.liveUrl], ['githubUrl', project.githubUrl]] as const) {
      if (!value) continue;
      try {
        const url = new URL(value);
        if (url.protocol !== 'https:' || !url.hostname || url.username || url.password) {
          errors.push(`Project "${project.title}" has an unsafe ${field}: "${value}".`);
        }
      } catch {
        errors.push(`Project "${project.title}" has an invalid ${field}: "${value}".`);
      }
    }
  }

  const groupIds = new Set<string>();
  for (const group of skillGroups) {
    if (groupIds.has(group.id)) errors.push(`Duplicate skill group id: "${group.id}".`);
    groupIds.add(group.id);

    const skillNames = new Set<string>();
    for (const skill of group.skills) {
      if (skillNames.has(skill)) errors.push(`Duplicate skill "${skill}" in group "${group.id}".`);
      skillNames.add(skill);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Invalid portfolio content:\n- ${errors.join('\n- ')}`);
  }
}
