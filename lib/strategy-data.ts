export interface StrategicTarget {
  indicator: string
  target: string
  highlight?: string
}

export interface FrameworkPhase {
  phase: string
  title: string
  period: string
  points: string[]
}

export interface StrategicGoal {
  id: string
  number: number
  title: string
  shortTitle: string
  goal: string
  targets2037: string[]
  kpis: string[]
  icon: string
  image?: string
}

export const STRATEGY_DATA = {
  vision:
    'To contribute to a more inclusive, resilient, and prosperous Nigeria where girls, women, young people, the less privileged and vulnerable populations have equitable access to education, healthcare, livelihoods, economic opportunities, leadership development, and a safe and sustainable environment.',

  mission:
    'To empower individuals and communities across Nigeria through evidence-based programs, strategic partnerships, capacity development, innovation, and sustainable interventions in education, skills development, agriculture, healthcare services, economic empowerment, social protection, and environmental sustainability.',

  sharedValues: [
    { title: 'Mentoring', description: 'Nurturing the next generation of leaders and change-makers through continuous guidance.' },
    { title: 'Excellence', description: 'Upholding rigorous quality standards, transparency, and accountability in all interventions.' },
    { title: 'Working Hard', description: 'Relentless dedication and diligence on the frontlines of community transformation.' },
    { title: 'Ingenuity & Innovation', description: 'Pioneering evidence-based, creative solutions to solve complex societal challenges.' },
  ],

  impactAmbition2037: {
    title: 'Overall, 2037 Strategic Impact Ambition',
    statement:
      'By 2037, the organization will have directly reached and supported at least 20 million people across Nigeria, with a primary focus on girls, women, adolescents, young people, and vulnerable and marginalized populations.',
    partnershipStatement:
      'The organization will work through partnerships with government institutions, communities, civil society organizations, development partners, private-sector organizations, academic institutions, and other stakeholders to deliver sustainable and measurable development outcomes.',
  },

  overallTargets2037: [
    { indicator: 'People directly reached/supported', target: '20 million+', highlight: '20M+' },
    { indicator: 'Female participation', target: 'At least 60%', highlight: '60%' },
    { indicator: 'Youth participation (15–35 years)', target: 'At least 70%', highlight: '70%' },
    { indicator: 'Geographic coverage', target: '36 States + FCT', highlight: '36+FCT' },
    { indicator: 'Communities reached', target: '10,000+', highlight: '10,000+' },
    { indicator: 'Strategic partnerships', target: '100+ active strategic partnerships', highlight: '100+' },
    { indicator: 'Development resources mobilized', target: '₦200 billion+', highlight: '₦200B+' },
    { indicator: 'Programme sustainability', target: 'At least 70% of mature programs demonstrate sustainability mechanisms', highlight: '70%' },
    { indicator: 'Annual impact/learning reports', target: 'Published annually', highlight: 'Annual' },
  ] as StrategicTarget[],

  measurementPrinciple:
    'Beneficiaries reached under different strategic goals should not automatically be added together. The organization will maintain a unique beneficiary database to distinguish between unique individuals and program contacts and avoid double counting.',

  implementationFramework: [
    {
      phase: 'Phase I',
      title: 'Foundation and Institutional Strengthening',
      period: '2027–2029',
      points: [
        'Strengthening governance and organizational systems',
        'Establishing program standards and operating procedures',
        'Developing strong monitoring, evaluation, research and learning systems',
        'Building partnerships and fundraising capacity',
        'Piloting scalable programs',
        'Establishing digital data and beneficiary-management systems',
        'Strengthening safeguarding, financial management and risk management',
      ],
    },
    {
      phase: 'Phase II',
      title: 'Scale and National Expansion',
      period: '2030–2033',
      points: [
        'Expanding successful programs',
        'Increasing state and community coverage',
        'Strengthening development-partner partnerships',
        'Mobilizing larger-scale program funding',
        'Expanding economic empowerment, agriculture, health and education programs',
        'Building stronger community and local-organization partnerships',
      ],
    },
    {
      phase: 'Phase III',
      title: 'Sustainability, Institutionalization and Impact',
      period: '2034–2037',
      points: [
        'Sustaining successful interventions',
        'Institutionalizing programs with government and communities',
        'Expanding social and development financing',
        'Strengthening locally led development',
        'Scaling evidence-based innovations',
        'Demonstrating measurable long-term social and economic impact',
        'Positioning the organization as a credible national development partner',
      ],
    },
  ] as FrameworkPhase[],

  strategicGoals: [
    {
      id: 'education-skills',
      number: 1,
      title: 'Education, Skills Development and Human Capital',
      shortTitle: 'Education & Skills',
      goal: 'Improve access to quality education, vocational and technical training, digital literacy, STEM education and employability opportunities for girls, women, adolescents and young people.',
      targets2037: [
        'Reach 8 million people through education and skills-development programs.',
        'Provide scholarships and educational support to 500,000 girls and vulnerable children/youths.',
        'Train 3 million young people in vocational, technical, and employability skills.',
        'Provide digital literacy training to 2 million beneficiaries.',
        'Establish or support 100 sustainable skills development centers/hubs.',
        'Support 500,000 beneficiaries to obtain recognized vocational, technical, or professional certifications.',
        'Establish partnerships with educational institutions, employers, and private-sector organizations to improve employment and entrepreneurship opportunities.',
      ],
      kpis: [
        'Number of people enrolled and completing training',
        'Number of scholarships/education-support packages provided',
        'Training completion rate',
        'Certification rate',
        'Percentage of graduates employed or self-employed within 12 months',
        'Percentage of trained beneficiaries reporting increased income',
        'Number of sustainable skills-development centers/hubs established',
        'Number of partnerships with employers and training institutions',
      ],
      icon: 'GraduationCap',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MRRFGtuqCM94ocrKTTKsiCM3yoyR9o.png',
    },
    {
      id: 'sustainable-agriculture',
      number: 2,
      title: 'Sustainable Agriculture and Food Security',
      shortTitle: 'Agriculture & Food Security',
      goal: 'Improve food security, agricultural productivity, climate resilience, and income opportunities for smallholder farmers, women, and young agripreneurs.',
      targets2037: [
        'Reach 4 million farmers and agripreneurs.',
        'Train 2 million women farmers in improved and climate-smart agricultural practices.',
        'Train 1.5 million young agripreneurs.',
        'Establish/support 2,000 demonstration and learning farms.',
        'Support the development or expansion of 500,000 agricultural enterprises.',
        'Promote improved farming practices across targeted communities.',
        'Support beneficiaries to achieve an average 40% increase in agricultural income, measured against established program baselines.',
        'Establish and strengthen farmer cooperatives, producer groups and agricultural value-chain partnerships.',
      ],
      kpis: [
        'Number of farmers trained',
        'Number adopting improved agricultural practices',
        'Hectares under improved/climate-smart practices',
        'Crop/livestock productivity improvements',
        'Number of agricultural enterprises supported',
        'Average change in agricultural income',
        'Number of functional farmer cooperatives',
        'Number of beneficiaries accessing agricultural markets and finance',
      ],
      icon: 'Sprout',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
    },
    {
      id: 'economic-empowerment',
      number: 3,
      title: 'Economic Empowerment, Entrepreneurship and Livelihoods',
      shortTitle: 'Economic Empowerment',
      goal: 'Increase economic resilience and livelihood opportunities through entrepreneurship, enterprise development, financial inclusion, access to markets and job creation.',
      targets2037: [
        'Reach 5 million women and young people with economic empowerment interventions.',
        'Support the establishment or expansion of 1 million micro and small enterprises.',
        'Facilitate access to appropriate finance for 500,000 beneficiaries.',
        'Contributes to the creation of 1 million direct and indirect jobs.',
        'Establish or strengthen 5,000 cooperatives, savings groups and producer organizations.',
        'Provide business-development services to entrepreneurs across targeted communities.',
        'Establish private-sector partnerships to improve market access and employment opportunities.',
      ],
      kpis: [
        'Number of entrepreneurs supported',
        'Number of businesses established/expanded',
        'Business survival rate after 12, 24 and 36 months',
        'Number of jobs created',
        'Number of beneficiaries accessing finance',
        'Value of finance mobilized',
        'Percentage change in beneficiary income',
        'Number of enterprises accessing new markets',
      ],
      icon: 'Briefcase',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CbUFPyjIKIdxRXNzEJILVOGJwmstY0.png',
    },
    {
      id: 'healthcare-public-health',
      number: 4,
      title: 'Healthcare, Public Health and Mental Well-Being',
      shortTitle: 'Healthcare & Well-Being',
      goal: 'Improve access to quality, inclusive and preventive healthcare services, health information, mental-health support and community health interventions.',
      targets2037: [
        'Reach 8 million people through healthcare and health-promotion programs.',
        'Conduct 5,000 community medical/health outreaches.',
        'Provide health screening and preventive services to 5 million people.',
        'Provide appropriate mental health and psychosocial support for 1 million adolescents and young people.',
        'Reach 3 million women with maternal, reproductive, and other priority health services.',
        'Train 20,000 community health volunteers/workers.',
        'Strengthening referral systems between communities and health facilities.',
      ],
      kpis: [
        'Number of people accessing health services',
        'Number of people screened',
        'Number of health outreaches conducted',
        'Number accessing mental health/psychosocial support',
        'Number of women accessing maternal and reproductive health services',
        'Number of community health workers trained',
        'Percentage of beneficiaries completing referrals',
        'Change in health knowledge and preventive-health practices',
      ],
      icon: 'HeartPulse',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TSgZ5VNH3eC8Ch4jbWx7usKt6XWut4.png',
    },
    {
      id: 'capacity-building-leadership',
      number: 5,
      title: 'Capacity Building, Leadership and Community Institutional Development',
      shortTitle: 'Leadership & Institutions',
      goal: 'Strengthen the leadership, governance, technical and organizational capacities of individuals, community institutions and civil society organizations.',
      targets2037: [
        'Train 2 million community leaders and stakeholders.',
        'Strengthen the institutional capacity of 50,000 community-based and civil society organizations.',
        'Train 500,000 women leaders.',
        'Train 1 million youth leaders.',
        'Establish and strengthen youth leadership networks across Nigeria.',
        'Develop community leadership and institutional-strengthening programs that promote accountability, inclusion, and sustainability.',
      ],
      kpis: [
        'Number of leaders trained',
        'Number of organizations strengthened',
        'Percentage of organizations demonstrating improved organizational capacity',
        'Number of community initiatives led by program participants',
        'Percentage of trainees applying acquired knowledge',
        'Number of functional leadership networks',
        'Organizational performance improvement scores',
      ],
      icon: 'Award',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0wt2eX5EoEjxjkkflqLvhqCjLhbsxF.jpeg',
    },
    {
      id: 'social-inclusion-safeguarding',
      number: 6,
      title: 'Social Inclusion, Protection, Safeguarding and Gender Equality',
      shortTitle: 'Inclusion & Safeguarding',
      goal: 'Promote a safe, inclusive and equitable society where vulnerable and marginalized populations are protected and able to participate meaningfully in social and economic development.',
      targets2037: [
        'Reach 6 million vulnerable and marginalized people.',
        'Establish or strengthen safeguarding systems in 5,000 communities and partner organizations.',
        'Support 500,000 at-risk girls and vulnerable children.',
        'Reach 1 million persons with disabilities through inclusive programs and services.',
        'Train 500,000 stakeholders on safeguarding, child protection, gender equality, and inclusion.',
        'Mainstream gender, disability inclusion, safeguarding, and protection across all organizational programs.',
        'Strengthen community-based referral and protection mechanisms.',
      ],
      kpis: [
        'Number of vulnerable people supported',
        'Number of safeguarding systems established/strengthened',
        'Number of stakeholders trained',
        'Number of protection referrals successfully completed',
        'Number of inclusion initiatives established',
        'Percentage of programs meeting safeguarding standards',
        'Percentage of programs incorporating gender and disability inclusion',
      ],
      icon: 'ShieldCheck',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mMyq0GZiJezuKufiaKZxkxnsSw1rxO.png',
    },
    {
      id: 'environmental-sustainability',
      number: 7,
      title: 'Environmental Sustainability, Climate Resilience and Biodiversity',
      shortTitle: 'Climate & Environment',
      goal: 'Promote environmental sustainability, climate resilience, biodiversity conservation and green livelihoods while empowering communities to protect and sustainably manage their natural resources.',
      targets2037: [
        'Plant and nurture 20 million trees through afforestation, agroforestry and ecosystem-restoration programs.',
        'Empower 5 million girls, women and young people with climate-smart agriculture, environmental stewardship and green-economy skills.',
        'Support restoration and protection of forests, wetlands, mangroves, watersheds and other priority ecosystems through community and institutional partnerships.',
        'Promote sustainable agricultural practices that improve soil health, conserve water and reduce land degradation.',
        'Establish environmental clubs and biodiversity-education programs reaching 10 million learners.',
        'Facilitate access to appropriate renewable-energy and clean-technology solutions for underserved communities, schools, health facilities and small businesses.',
        'Strengthen community preparedness and resilience to climate-related risks and disasters.',
        'Support evidence-based advocacy for environmental protection and sustainable natural-resource management.',
      ],
      kpis: [
        'Number of trees planted and surviving after defined monitoring periods',
        'Hectares of ecosystems restored/protected',
        'Number of people trained in climate-smart practices',
        'Number of environmental clubs established',
        'Number of learners reached',
        'Number of households/businesses accessing clean-energy solutions',
        'Number of communities implementing climate-resilience measures',
        'Adoption rate of sustainable environmental practices and technologies',
      ],
      icon: 'Trees',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ows6olFq8UrcG1JR94HSVmIrqg9yl5.png',
    },
  ] as StrategicGoal[],
}
