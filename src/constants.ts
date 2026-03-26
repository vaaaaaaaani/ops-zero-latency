import { Task } from './types';

export const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Client Strategy Call',
    description: 'Discuss Q3 roadmap with key stakeholders.',
    focus: 'High',
    duration: 60,
    day: 'Monday',
    isEssential: true,
  },
  {
    id: '2',
    title: 'Email Triage',
    description: 'Clear out inbox and flag urgent requests.',
    focus: 'Low',
    duration: 30,
    day: 'Monday',
    isEssential: false,
  },
  {
    id: '3',
    title: 'Data Analysis Report',
    description: 'Deep dive into operational efficiency metrics.',
    focus: 'High',
    duration: 120,
    day: 'Tuesday',
    isEssential: true,
  },
  {
    id: '4',
    title: 'Documentation Update',
    description: 'Update internal wiki with new SOPs.',
    focus: 'Low',
    duration: 45,
    day: 'Wednesday',
    isEssential: false,
  },
  {
    id: '5',
    title: 'Team Sync',
    description: 'Weekly alignment on project progress.',
    focus: 'Medium',
    duration: 30,
    day: 'Monday',
    isEssential: true,
  },
  {
    id: '6',
    title: 'Bug Scrub',
    description: 'Review and prioritize open tickets.',
    focus: 'Medium',
    duration: 60,
    day: 'Thursday',
    isEssential: false,
  },
  {
    id: '7',
    title: 'Project Planning',
    description: 'Outline tasks for the upcoming sprint.',
    focus: 'High',
    duration: 90,
    day: 'Friday',
    isEssential: true,
  },
];

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
