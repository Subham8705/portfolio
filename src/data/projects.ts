import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'RNA Hub',
    description: 'This project explores the integration of RNA 3D structural information with gene expression data to enhance cancer detection methodologies',
    image: 'https://res.cloudinary.com/dpa0sb1tm/image/upload/v1745566595/background_czwzgo.jpg',
    tags: ['React', 'Tailwind CSS','Python ML'],
    // link: 'https://grietstudysphere.vercel.app/',
    github: 'https://github.com/nainat/RNA',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Safema',
    description: 'Safema is a revolutionary women\'s safety app that combines smart wearable devices with community protection features for immediate assistance in emergencies.',
    image: 'https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_650,h_500,g_auto/v1747552956/32682d32-f5a0-4530-a1c8-e97b51423757_coyfvr.jpg',
    tags: ['React', 'React Native', 'MongoDB', 'Node.js','Express'],
    link: 'https://safema.vercel.app/',
    github: 'https://github.com/nainat/Safema-women-safety',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'GRIET Study Sphere',
    description: 'GRIET Study Sphere is a centralized platform offering curated academic resources, notes, and tools to support GRIET students in their learning journey.',
    image: 'https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1500,h_1000,g_auto/v1750088930/Screenshot_2025-06-16_211824_awwurj.png',
    tags: ['React', 'Tailwind CSS'],
    link: 'https://grietstudysphere.vercel.app/',
    github: 'https://github.com/Subham8705/GRIET.StudySphere',
    featured: true,
  },

  {
    id: 'project-3',
    title: 'Task Talk',
    description: 'Task Talk is a smart task management app that lets you set voice reminders for each task, making your to-do list more personal and effective.',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Tailwind CSS'],
    link: 'https://task-talk.vercel.app/',
    github: 'https://github.com/Subham8705/todo-list',
    featured: false,
  },
  
];