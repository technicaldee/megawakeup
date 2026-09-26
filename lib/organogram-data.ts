export interface Directorate {
  id: string
  name: string
  shortName: string
  lead?: {
    name: string
    role: string
    slug: string
    image?: string
  }
  supportingUnits: string[]
}

export interface GeopoliticalZone {
  zone: string
  states: string
}

export const ORGANOGRAM_DATA = {
  title: 'MEWI Organizational Structure & Organogram',
  subtitle: 'Governance, Executive Leadership, Six Core Directorates, and Nationwide Community Spread',
  image: '/images/organogram.png',
  
  governanceLevels: [
    {
      level: 'Board of Trustees (BOT)',
      description: 'Provides strategic direction and oversight',
      icon: 'Shield',
    },
    {
      level: 'Chief Executive Officer / Managing Director (CEO/MD)',
      description: 'Overall leadership and management',
      lead: 'Dr. (Mrs.) Inemesit Bassey',
      icon: 'Award',
    },
    {
      level: 'Office of the Secretary to the NGO',
      description: 'Provides secretarial and administrative support to the MD/CEO',
      icon: 'FileText',
    },
    {
      level: 'Deputy Managing Director (DMD)',
      description: 'Supports the CEO/MD and oversees day-to-day operations',
      icon: 'Users',
    },
  ],

  directorates: [
    {
      id: 'programs-humanitarian',
      name: 'Programs & Humanitarian Services Directorate',
      shortName: 'Programs & Humanitarian',
      lead: {
        name: 'Prof. Sunday O. Awofisayo',
        role: 'Director, Programs & Humanitarian',
        slug: 'prof-sunday-o-awofisayo',
        image: '/images/sunday.png',
      },
      supportingUnits: [
        'Programme Planning, Implementation & Quality Assurance',
        'Humanitarian Response & Emergency Preparedness',
        'Livelihoods, Agriculture & Agribusiness (including Agri-Entrepreneurship)',
        'Environmental Sustainability & Biodiversity Conservation',
        'Community Development & Social Inclusion',
      ],
    },
    {
      id: 'finance-operations',
      name: 'Finance & Operations Directorate',
      shortName: 'Finance & Operations',
      lead: {
        name: 'Udeme Wilson Ekpo',
        role: 'Director, Finance & Operations',
        slug: 'udeme-wilson-ekpo',
        image: '/images/udeme.png',
      },
      supportingUnits: [
        'Financial Management & Reporting',
        'Procurement & Supply Chain Management',
        'Human Resources & Administration',
        'Facilities & Asset Management',
        'ICT & Digital Services',
      ],
    },
    {
      id: 'meal',
      name: 'MEAL Directorate',
      shortName: 'MEAL (Monitoring, Evaluation, Accountability & Learning)',
      supportingUnits: [
        'Monitoring & Evaluation',
        'Learning & Knowledge Management',
        'Data Management & Reporting',
        'Quality Assurance',
      ],
    },
    {
      id: 'resources-mobilization',
      name: 'Resources Mobilization & Partnership Directorate',
      shortName: 'Resources Mobilization & Partnership',
      supportingUnits: [
        'Donor Relations & Fundraising',
        'Grants & Proposal Development',
        'Partnerships & Collaborations',
        'Private Sector Engagement',
        'Resource Mobilization Strategy & Coordination',
        'Database & Donor Management',
      ],
    },
    {
      id: 'communications-advocacy',
      name: 'Communications, Advocacy & Stakeholders Engagement Directorate',
      shortName: 'Communications, Advocacy & Engagement',
      supportingUnits: [
        'Internal & External Communications',
        'Media Relations',
        'Advocacy & Policy Engagement',
        'Stakeholder Engagement & Community Relations',
        'Digital Communications & Social Media',
        'Branding & Visibility',
      ],
    },
    {
      id: 'governance-compliance',
      name: 'Governance, Compliance, Audit, Risk & Legal Affairs Directorate',
      shortName: 'Governance, Compliance, Audit, Risk & Legal',
      lead: {
        name: 'Chief Henry Akpan Obot',
        role: 'Director, Governance, Compliance, Audit, Risk & Legal',
        slug: 'chief-henry-akpan-obot',
        image: '/images/henry.png',
      },
      supportingUnits: [
        'Board Support & Corporate Governance',
        'Compliance & Ethics',
        'Internal Audit',
        'Risk Management',
        'Legal Affairs',
        'Safeguarding & Child Protection',
      ],
    },
  ] as Directorate[],

  nationalSpread: {
    title: 'National Spread (All 36 States & FCT)',
    description: 'State Offices, Field Units, and Community Volunteers across all six geopolitical zones',
    zones: [
      { zone: 'North Central', states: 'Abuja (FCT), Benue, Kogi, Nasarawa, Niger, Plateau' },
      { zone: 'North East', states: 'Borno, Adamawa, Yobe, Gombe, Bauchi, Taraba' },
      { zone: 'North West', states: 'Kano, Kaduna, Katsina, Jigawa, Kebbi, Sokoto, Zamfara' },
      { zone: 'South East', states: 'Enugu, Imo, Abia, Anambra, Ebonyi' },
      { zone: 'South South', states: 'Rivers, Bayelsa, Delta, Akwa Ibom, Cross River, Edo' },
      { zone: 'South West', states: 'Lagos, Ogun, Oyo, Osun, Ondo, Ekiti' },
    ] as GeopoliticalZone[],
  },
}
