export const profile = {
  name: 'Mohammed Wisam',
  role: 'Full-Stack & Backend Systems Engineer',
  summary:
    'Full-Stack Software Engineer with production experience building scalable APIs, real-time systems, and automated DevOps workflows. Proven track record modernizing legacy architectures, standardizing Docker and CI/CD pipelines, and delivering complete web and mobile products end-to-end across TypeScript, Rust, and Nuxt / React frontends.',
  location: 'Karbala, Iraq',
  email: 'mo.wisam@proton.me',
  phone: '+964 772 105 7944',
  website: 'https://mohammedwisam.is-a.dev/',
  yearsOfExperience: '4+',
  resumeUrl: '/pdf/resume.pdf'
} as const

export const socials = [
  { label: 'GitHub', icon: 'i-tabler-brand-github', url: 'https://github.com/redcodemohammed/' },
  { label: 'LinkedIn', icon: 'i-tabler-brand-linkedin', url: 'https://www.linkedin.com/in/redcodemohammed/' },
  { label: 'YouTube', icon: 'i-tabler-brand-youtube', url: 'https://www.youtube.com/@%D9%85%D8%AD%D9%85%D8%AF_%D9%88%D8%B3%D8%A7%D9%85' },
  { label: 'Email', icon: 'i-tabler-mail', url: 'mailto:mo.wisam@proton.me' },
  { label: 'Phone', icon: 'i-tabler-phone', url: 'tel:+9647721057944' }
] as const

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  type: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Al Qaseh',
    period: 'Oct 2024 — Present',
    location: 'On-Site',
    type: 'Full-Time',
    points: [
      'Replaced a production setup running Vite’s dev server under PM2 with Nginx-served build artifacts, then added CI/CD and a self-hosted Docker registry — releases went from uploading an archive and running yarn per server to pushing a tag and restarting a built image.',
      'Added a Nuxt server-side image proxy with optimization and caching, cutting the initial image payload from ~15 MB to a few KB.',
      'Restructured a monolithic Nuxt frontend into 8–9 feature layers over 3–4 shared core layers (UI, API, core, i18n).',
      'Moved long-running work out of client-bound request context into Go backend goroutines, persisting job status in PostgreSQL.',
      'Developed specialized Flutter packages for reliable Bluetooth hardware communication.',
      'Diagnosed and fixed an unclosed PostgreSQL transaction that had been blocking requests in production for roughly a year.'
    ]
  },
  {
    role: 'Front-end Web Developer',
    company: 'Alkawkab Aldori',
    period: 'Mar 2024 — Aug 2024',
    location: 'Remote',
    type: '',
    points: [
      'Built features for a real-estate seller platform using React — installment management, an interactive building/apartment map, voucher printing, and real-time in-app notifications.',
      'Mentored 2 junior frontend developers for a month.'
    ]
  },
  {
    role: 'Front-end Web Developer',
    company: 'Digital Logic',
    period: 'Dec 2023 — Jan 2024',
    location: 'Baghdad',
    type: 'On-Site',
    points: [
      'Built a Vue 3 + TypeScript library of generic components, then launched a new project on top of it with foundational CRUD pages, user role management, and navigation flows.'
    ]
  },
  {
    role: 'Full-Stack Web Developer',
    company: 'Alkafeel Information Technology Center',
    period: 'May 2023 — Jul 2023',
    location: 'On-Site',
    type: 'Full-Time',
    points: [
      'Engineered a modular Nuxt 3 architecture supporting independently configurable sub-projects, improving multi-project maintainability.',
      'Built a multi-step application workflow featuring Web Crypto API client-side encryption, browser-side image caching, and animated state transitions.'
    ]
  },
  {
    role: 'Full-Stack Web Developer',
    company: 'MetaluxTech',
    period: 'Jan 2023 — Apr 2023',
    location: 'Remote',
    type: 'Part-Time',
    points: [
      'Built an automated image-processing pipeline using ImageMagick to standardize and accelerate media conversion tasks.',
      'Automated cross-platform build and release workflows for Windows and Linux using GitHub Actions.'
    ]
  }
]

export const skillGroups = [
  { title: 'Languages & Runtime', skills: ['TypeScript', 'Rust', 'Node.js', 'Bun'] },
  { title: 'Frameworks', skills: ['NestJS', 'AdonisJS', 'Axum', 'Elysia.js'] },
  { title: 'APIs', skills: ['REST', 'OpenAPI', 'Buf (Protobuf / gRPC)', 'WebSockets'] },
  { title: 'Data', skills: ['PostgreSQL', 'Redis', 'SQLx', 'Prisma', 'Drizzle'] },
  {
    title: 'Infra & Ops',
    skills: ['Linux', 'Bash / Fish scripting', 'systemd', 'SSH & networking', 'Docker', 'Nginx', 'GitHub Actions', 'Dokploy', 'Logto', 'Infisical']
  },
  { title: 'Frontend & Mobile', skills: ['Vue 3', 'Nuxt', 'React', 'React Native (Expo)', 'Tailwind CSS'] }
] as const

export const familiar = ['Go', 'Tonic (gRPC)', 'MongoDB', 'Mongoose', 'SeaORM', 'Podman', 'Next.js', 'Svelte', 'Flutter', 'C++'] as const

export interface Project {
  name: string
  context: string
  period: string
  status: string
  description: string
  stack: string[]
  url?: string
}

export const projects: Project[] = [
  {
    name: 'ShopZoon',
    context: 'AstraIQ — Co-Founder & Technical Lead',
    period: 'In progress',
    status: 'Multi-Tenant E-Commerce & POS Platform',
    description:
      'Architecting a multi-tenant SaaS commerce and POS backend utilizing gRPC and Protobuf (Buf) for strict inter-service API contracts and isolated tenant data flows. Building a modular storefront rendering engine and merchant dashboard in Nuxt. Own end-to-end Linux server provisioning, container orchestration, reverse proxy configuration, and automated CI/CD deployment pipelines.',
    stack: ['Rust', 'Axum', 'Tonic gRPC', 'SQLx', 'SeaORM', 'PostgreSQL', 'Buf', 'Logto', 'RustFS', 'Nuxt'],
    url: 'https://stage.shopzoon.net/'
  },
  {
    name: 'RafX',
    context: 'Client work — freelance',
    period: 'Jun 2026 — Oct 2026',
    status: 'Modular Super-App Ecosystem',
    description:
      'Architected a modular backend infrastructure with global feature-flagging and multi-unit commerce support to scale new vertical modules independently. Built real-time WebSocket infrastructure and a Nuxt merchant dashboard, enabling low-latency synchronization across distributed clients; deployed the stack on Linux with Docker and automated CI/CD.',
    stack: ['Elysia.js', 'Bun', 'TypeScript', 'WebSockets', 'MongoDB', 'Redis', 'React Native', 'Nuxt']
  },
  {
    name: 'Whisper',
    context: 'Self-built',
    period: 'Finished',
    status: 'High-Throughput Multi-Channel Notification Router',
    description:
      'Designed and built a centralized multi-tenant notification routing microservice dispatching high-volume events across Webhooks, Telegram, Discord, Email, and Push channels. Migrated core routing workloads from Node.js to Rust (Axum) with Redis queuing to raise concurrent throughput and reduce memory overhead.',
    stack: ['Rust', 'Axum', 'SQLx', 'PostgreSQL', 'Redis', 'AdonisJS']
  },
  {
    name: 'Al-Mofeed',
    context: 'Client work — freelance',
    period: 'Feb 2026 — May 2026',
    status: 'E-Commerce Storefront & Inventory Management Platform',
    description:
      'Built a full-stack commercial e-commerce platform and admin dashboard for an enterprise printer and ink supply business, handling catalog management, order workflows, and inventory tracking.',
    stack: ['Bun', 'Elysia.js', 'TypeScript', 'Nuxt 4', 'PostgreSQL'],
    url: 'https://almofeed.astraiq.net/'
  }
]

export const education = {
  degree: 'B.Sc. in Information Technology',
  school: 'University of Babylon',
  period: '2019 — 2023',
  community: [
    {
      title: 'Google Developer Student Club (GDSC)',
      role: 'Core Member & Technical Speaker',
      description: 'Delivered technical talks and mentored student developers on modern web and backend engineering.'
    },
    {
      title: 'Al-Mustaqbal University',
      role: 'Workshop Lead',
      description: 'Led hands-on full-stack web development workshops bridging academic fundamentals with production engineering practices.'
    }
  ]
} as const
