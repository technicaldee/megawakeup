// Team member data shared between pages
export interface TeamMember {
  name: string
  role: string
  image?: string
  bio: string
  slug: string
}

// Generate slug from name
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Truncate text to specified length
export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export const leadership: TeamMember[] = [
  {
    name: 'Dr. (Mrs.) Inemesit Bassey',
    role: 'Founder & CEO',
    image: '/images/ceo1.png',
    bio: 'Dr. (Mrs.) Inemesit Bassey is a passionate advocate for personal transformation and community development. She founded Mega Wake-Up International Outreach (MEWI) in March, 2016 and the FCT Heritage Multi-Purpose Co-operative Society thereafter to empower youths and underprivileged individuals through holistic personal development initiatives and programs.  She holds a Bachelor of Science degree in Public Administration from the University of Abuja and an honorary doctorate degree in Theology. She is well vested in community engagement initiatives and personal development activities. Dr. (Mrs.) Bassey’s vision is to create a world where lives of the less privileged ones, women, adolescence, youths in Nigeria feel valued, capable, and inspired to make a positive sustainable impact. The visionary founder and CEO of Mega Wake-Up International Outreach has transformed countless lives in education, vocational training, skills acquisition, economic empowerment by fostering purpose for healthy living and confidence for good living standards.',
    slug: 'dr-mrs-inemesit-bassey',
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: 'Prof. Sunday O. Awofisayo',
    role: 'Director, Programs & Humanitarian',
    image: '/images/sunday.png',
    bio: 'Professor Sunday O. Awofisayo is the Director of Programs & Humanitarian Services at MEWI. A distinguished academic and clinician with a pharmacy background, driven by a passion for training and youth employment. As Principal Researcher at Bioscientific Research and Development Ltd., he leverages expertise in public analysis – specializing in food, water, drugs, and cosmetics – to bridge cutting-edge research with real-world impact. Skilled in strategic capacity building, he empowers youth while advancing bioscientific innovation. His work blends clinical insight with analytical rigor, fostering solutions for public health and community growth. A visionary trainer passionately driving training, youth employment, and healthcare innovation, Professor Awofisayo merges clinical expertise with biopharmaceutical and biomedical research to craft impactful solutions. Specializing in the analysis of food, water, drugs, and cosmetics, he ensures safety and quality standards while spearheading cutting-edge projects that intersect public health and technology. A strategic leader, he excels in capacity building, mentoring young scientists, and fostering collaborations that accelerate bioscientific breakthroughs. His work bridges laboratory insights with community-driven outcomes, addressing pressing health challenges through biopharmaceutics, biomedical advancements, and data-driven strategies. With a focus on transformative leadership, he champions youth empowerment and interdisciplinary research, shaping the next generation of healthcare professionals. His dual commitment to scientific rigor and societal impact positions him as a catalyst for progress in biopharmaceutical innovation and global health resilience. Holds PhD, MBA, MSc, and BSc qualifications.',
    slug: 'prof-sunday-o-awofisayo',
  },
  {
    name: 'Udeme Wilson Ekpo',
    role: 'Director, Finance & Operations',
    image: '/images/udeme.png',
    bio: 'Udeme Wilson Ekpo, B.SC, PGDE, MBA, ACA, ACIFC, FCILRM is the Director of Finance & Operations at MEWI, bringing over two decades of progressive public service and private sector experience. Currently serving as Assistant Manager in the Retail & Commercial Business Directorate of First Bank of Nigeria Limited, where he manages multiple account relationships for Affluent/High Networth Individuals as well as SMEs accounts in line with the Bank\'s Standard Operating Procedures. Prior to joining First Bank in 2008, Mr. Ekpo was a professional teacher with the rank of Master 1 in Akwa Ibom State Secondary Education Board (2002-2008), where he served for six years. An alumnus of the University of Uyo, he holds a Bachelor of Science degree in Marketing with Second Class (Honors) Upper Division (1998), a Master\'s degree in Business Administration (MBA) with specialization in Accounting (2010), and a Post-Graduate Diploma in Education (PGDE, 2008). He qualified as a Chartered Accountant (ACA) from the Institute of Chartered Accountants of Nigeria (ICAN) in 2017, is certified as a Member of the Chartered Institute of Finance & Control of Nigeria (ACIFC, 2014), and a Fellow of the Chartered Institute of Loan and Risk Management of Nigeria (FCILRM, 2015). Mr. Ekpo has undertaken extensive strategic executive courses and management development trainings at First Bank of Nigeria Limited. He is an ardent believer in reforms, assiduous advocate for systems improvement, a methodical organizer, and an incurable optimist.',
    slug: 'udeme-wilson-ekpo',
  },
  {
    name: 'Dr. Edidiong Efefiong Ibup',
    image: '/images/ibup.png',
    role: 'Head, Humanitarian Response & Emergency Preparedness Unit',
    bio: 'Dr. Edidiong Efefiong Ibup is a dedicated emergency medical officer and humanitarian leader with strong critical thinking, disaster management, and rapid-response expertise. Holds an MBBS (2017) in Medicine and Surgery from Pirogov National Memorial Medical University, Vinnytsa, Ukraine. Currently serves as Emergency Medical Officer at Akwa Ibom State Emergency Medical and Ambulance System Services, Ministry of Health, Uyo (2024-Present), responding promptly to emergency calls, administering first aid and basic life support, and collaborating with ambulance teams during patient transport. Also serves as State Coordinator at Universal Council of Christ Ambassadors, Brotherhood of Cross and Star, Akwa Ibom State (2025-Present), Medical Sales Expert at Edymed Pharmacy Limited (2018-Present), and Co-Founder of Study Consult Group Pty Ltd, Mbabane Swaziland (2013-Present). Certified in Basic and Advanced Life Support and as a Health Emergency First Responder. Skilled in digital and project management, critical thinking, basic and advanced life support, problem-solving, teamwork, community outreach, partnership development, and compliance assurance. At MEWI, Dr. Ibup serves as Head of the Humanitarian Response & Emergency Preparedness Unit, directing crisis relief operations, emergency health response, disaster readiness protocols, and mobile medical outreaches across vulnerable Nigerian communities. Contact: ibupcom4life@yahoo.com | 08164044315, 09028007286 | No. 2 Port Harcourt Street, Uyo, Akwa Ibom State.',
    slug: 'dr-edidiong-efefiong-ibup',
  },
  {
    name: 'Tpl. Godwin Effiong Edet, RTP',
    role: 'Head, Environmental Sustainability & Biodiversity Conservation Unit',
    image: '/images/godwin-edet.png',
    bio: `TPL. Godwin Effiong Edet, RTP 2817, is a Registered Town Planner specializing in Coastal Zone Planning and Sustainable Settlement Development in Akwa Ibom State. At MEWI, he serves as Head of the Environmental Sustainability & Biodiversity Conservation Unit under the Programs & Humanitarian Services Directorate.

His focus is the orderly planning of the coastal corridor - Ibeno, Eastern Obolo, Mbo, Oron, Okobo, Ikot Abasi, Eket - to address coastal erosion, uncoordinated development, infrastructure deficits, and untapped waterfront potentials.

His approach integrates land-use, blue economy, eco-tourism, fisheries settlement, housing, infrastructure, and environmental management.

Professional Focus:
• Coastal & Waterfront Planning
• Land-Use & Spatial Planning
• Development Control
• Fishing Settlement Upgrading
• Blue Economy & Tourism Planning
• Climate Resilience & Environmental Planning

Commitment: Committed to promoting orderly, resilient, and people-centred coastal development in line with Akwa Ibom ARISE Agenda. He is available to provide professional services for the planning and development of coastal areas in Akwa Ibom State.`,
    slug: 'tpl-godwin-effiong-edet',
  },
  {
    name: 'Mrs. Chinwe Rejoice Victor',
    role: 'Head, HR & Administration Unit',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ALKaCTekF21TW8dhHIrDqwevRPQobZ.png',
    bio: 'Results-driven and ambitious Business Administration graduate with over 17 years of professional experience working full-time since 2007. Proficient in business planning and management, leadership solutions, data analysis, procurement, Human Resource specialization, and administrative management. Holds a B.Sc in Business Administration (2022), PGD in Business Management (2012), Higher Diploma in Business Admin (2011), and currently pursuing an MBA in Human Resource Management. Certified by the Institute of Strategic Management of Nigeria (ISMN, 2012). Currently serves as Head of Operations at Rechin Foundation for Women and Youth Empowerment (2017-2025), with previous experience as Business Development Officer at Capital Oil and Gas Ltd (2007-2014) and Administrative/Procurement Officer at Edla Petrochemical Nig Ltd (2005-2007). Expertise includes human capital management, organizational administration, procurement, data collection and analysis, Microsoft Office suite, and excellent organizational and communication skills. At MEWI, Mrs. Victor heads the HR & Administration Unit under the Finance & Operations Directorate, ensuring institutional operational excellence, staff welfare, talent governance, and compliance with statutory labor standards. Contact: rejoiceinyama@gmail.com | 08062567218',
    slug: 'mrs-chinwe-rejoice-victor',
  },
  {
    name: 'Mr. David Adekunle Adetona',
    role: 'Head of Compliance',
    bio: 'David Adekunle Adetona is an energetic self-starter with extensive experience in Customer Relations, Marketing, and Compliance. He excels in providing exceptional service to clients, especially skilled with handling challenging customers. Currently serving as Manager at Rechin Foundation for Women and Youth Empowerment (2024-Present), where he leads program initiatives, collaborates with stakeholders, and manages daily operational tasks including budgeting and project planning. Previously served as Deputy State Director at Celebrants Humanitarian and Empowerment Initiative (2022-2023), Personal Assistant to Managing Director at ASKDAMZ Limited (2020-2022), Head of Relationship Management at Outright Retirement & Financial Solutions (2016-2020), and Manager of Customer Experience at ARM Pension Managers (2007-2016). Holds an HND in Mass Communication from The Polytechnic, Ife (2012), Virtual Assistant in Digital Age certification from ALX Africa (2024), Diploma in Social Media and Online Reputation Management from SHAW Academy (2015), Diploma in Online Marketing from SHAW Academy (2014), Diploma in Customer Service from Customer Service Training Institute (2013), and Customer Service Certified (CSC) from Rockhurst University (2013). Co-Founder of Davyonse Resources (2019-Present), mentoring youths in career-building programs. Fluent in English and Yoruba, conversational in Pidgin. Contact: davisadetona@gmail.com | +2348035417870 | 2, Zone 3, Asanmajana, Moniya, Ibadan, Oyo State.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QwTeFKYWzq9rBeFEOQ8maZm3MQ7eVr.png',
    slug: 'mr-david-adekunle-adetona',
  },
  {
    name: 'Chief Henry Akpan Obot',
    role: 'Director, Governance, Compliance, Audit, Risk & Legal',
    bio: 'Chief Henry Akpan Obot is the Director of Governance, Compliance, Audit, Risk & Legal Affairs at MEWI. Native of Ikot Aba in Mkpat Enin LGA, Akwa Ibom State, born on 15th December 1956. A seasoned and certified banker with over 25 years of industry experience, he meritoriously retired as Network Branches Controller with major responsibility to secure bank assets through auditing and compliance provisions. Chief Obot has widely traveled transversing all the 36 states/FCT and overseas, bringing extensive national and international exposure to his role. Currently, he serves as Chairman/CEO of DICKSTIME VENTURES LIMITED, a company involved in Consultancy Services based in Abuja. His extensive banking background in governance, audit, compliance, and corporate risk management makes him uniquely qualified to direct the directorate, ensuring transparency, institutional integrity, accountability, and safeguarding across MEWI.',
    image: '/images/henry.png',
    slug: 'chief-henry-akpan-obot',
  },
  {
    name: 'Mr. Sifon Nelson Akpan',
    role: 'Director, MEAL Directorate (Monitoring, Evaluation, Accountability & Learning)',
    image: '/images/sifon-akpan.png',
    bio: `Mr. Sifon Nelson Akpan is an accomplished Banking and Financial Management Professional with over 11 years of progressive experience in branch operations, customer service management, accounts reconciliation, cash and vault management, team leadership, and regulatory compliance.

During his career with First Bank, Mr. Akpan held several positions of increasing responsibility, including Head, Branch Services; Head, Accounts and Vault Management; and Supervisor/Head, Customer Service. In these roles, he provided effective leadership in branch operations, supervised service teams, strengthened operational controls, managed cash and vault activities, and ensured compliance with banking policies and regulatory requirements.

As Head, Branch Services, he oversaw branch service operations and supervised frontline personnel to ensure efficient, accurate, and customer-focused service delivery. His responsibilities also included strengthening operational processes and maintaining high standards of compliance.

Previously, as Head, Accounts and Vault Management, he managed account reconciliation, cash operations, vault security, and financial controls, contributing to accurate balancing and effective cash management.

His earlier experience in Customer Service Management equipped him with strong skills in customer relationship management, problem resolution, staff mentoring, and service excellence.

Mr. Akpan holds a B.Sc. in Accounting from the University of Uyo. He combines his academic background in accounting with extensive practical banking experience and strong managerial capabilities.

Areas of Expertise:
• Branch Operations & Management
• Data Management & Reporting
• Quality Assurance
• Financial Controls & Account Reconciliation
• Operational Efficiency
• Supervisory, Monitoring, Evaluation & Managerial Leadership

With his strong background in banking operations, financial controls, customer service, and people management, Mr. Sifon Nelson Akpan brings professionalism, accountability, operational discipline, and leadership to every organization and assignment he serves.`,
    slug: 'mr-sifon-nelson-akpan',
  },
  {
    name: 'Victor Emmanuel Idem',
    role: 'Director, Communications, Advocacy & Stakeholders Engagement Directorate',
    image: '/images/victor-idem.png',
    bio: `Victor Emmanuel Idem is a seasoned banking and compliance professional with over two decades of experience spanning financial services, relationship and key account management, credit management, corporate governance, compliance, remedial and classified assets management, business development, and human resources/training.

He holds a B.Sc. in Banking & Finance and postgraduate qualifications in Corporate Governance, Personnel Management, and Corporate Administration. He is also an Associate Member of the Institute of Chartered Secretaries and Administrators of Nigeria (ICSAN) and the Chartered Institute of Personnel Management of Nigeria (CIPM), with professional credentials including HRPL, ACIA, ACIPM and ACIS.

Victor has built extensive experience with First Bank of Nigeria Limited, progressing through roles including Relationship Manager/Credit Monitoring and Recovery Officer, Team Lead/Recovery Business in Remedial and Classified Assets Management, Business Manager, and Business Relationship Manager. His responsibilities have included customer and key account management, credit origination and monitoring, loan appraisal and remediation, recovery of delinquent facilities, regulatory compliance, business development, and branch performance management. His experience also includes applying Pareto Analysis and Key Account Management tools to identify and focus on high-value customers, contributing to branch KPI achievements exceeding 80% in documented periods.

He has strong experience in risk assets creation, loan appraisal, delinquent facility remediation, debt recovery, stakeholder engagement, corporate governance, and operational processes within the Nigerian financial services sector. He has also demonstrated capability in developing training and learning programmes, facilitating professional development activities, and supporting staff development.

In addition to his banking career, Victor has experience in business development and training consultancy, including developing business plans for SMEs, designing training modules, coordinating training programmes, and conducting post-training monitoring and evaluation. He further strengthened his analytical capabilities through a six-week Data Analysis using Advanced Excel & Power BI programme completed in March 2024.

His core strengths include analytical and problem-solving skills, communication, presentation and facilitation, relationship management, credit and risk management, compliance, corporate governance, training and development, and business development.`,
    slug: 'victor-emmanuel-idem',
  },
  {
    name: 'Dr. Olayemi Joshua',
    role: 'Head of Procurement/Logistics',
    bio: 'Manages procurement processes and logistics operations to ensure efficient delivery of programs and services. Brings expertise in supply chain management and operational excellence.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFLFMvqrNK2lrmcuVsSlS0TFimiWMc.png',
    slug: 'dr-olayemi-joshua',
  },
  {
    name: 'Mrs. Jessica I. Awofisayo',
    image: '/images/mrs-awofisayo.png',
    role: 'Head of Diagnostics/Analysis',
    bio: 'Mrs. Jessica I. Awofisayo is a dynamic professional and Managing Director of Bioscientific Research and Development Ltd. With a robust academic background including HND Accounting, PGD Business Management, MSc Business Sciences, and a Diploma in Social Works, she blends financial acumen with strategic leadership. As a trainer with Bioscird Training, Jessica empowers teams while steering her company towards bioscientific innovation and growth. Her expertise spans financial oversight, research and development, and capacity building, driving impact in both business and community development. At MEWI, she leads data analysis and diagnostic initiatives to measure program impact and inform strategic decision-making, leveraging her comprehensive background in business sciences and social work.',
    slug: 'mrs-jessica-i-awofisayo',
  },
  {
    name: 'Mr. Peter Okon Peter',
    role: 'Administrative Officer',
    bio: 'Peter Okon Peter, born on 4th April 1988 in Calabar, hails from Etinan LGA, Akwa Ibom State. A dedicated professional with extensive experience in administrative operations, maintenance, and transport management. Currently serves as Maintenance Officer and Transport Officer at M&D Holding (2023). Previously served as Manager at Doctors Around the Earth (UN NGO) in Maiduguri (2017), Workshop Manager at SH Sonny Motors Nig Ltd, Abuja FCT (2007), and at Peters Motors Engineering (2011). Holds a National Diploma in Business Administration from Nasarawa State Polytechnic (2014-2016), Trade Test I, II, III from Federal Ministry of Labour and Productivity (2017-2019), SSCE/WASC from Ewill Comp. Secondary School, Etinan (1997-2003), and SSCE/NECO from Kabayi Secondary School, Mararaba, Nasarawa State (2020). Also holds an Apprenticeship Certificate from S.H. Sonny Motors Nig. Ltd (2000-2007) and National Drivers Licence (L/No. KRV48292AA02). Skilled in computerization of cars and diagnostic programming, repairs/servicing of Japanese cars, proposal and report writing, project management, analytical problem solving, and effective planning. Computer literate and internet expert with excellent interpersonal relations, self-motivated, disciplined, innovative, and solution-driven with proactive approach to work. Fluent in English, Ibibio, and Hausa. Participated in training on delivering fantastic service on automobiles braking and suspension repairs organized by PAN (2002). Contact: chroniclesofzion@gmail.com | 07038343635, +2348087144133 | Plot 265 Kaura Street, Behind Games Village, FCT, Abuja.',
    slug: 'mr-peter-okon-peter',
  },
]

export interface TrusteeMember {
  name: string
  role: string
  title?: string
  image?: string
  bio?: string
  slug?: string
}

export const boardOfTrustees: TrusteeMember[] = [
  {
    name: 'Dr. Inemesit Aniefiok Bassey',
    role: 'Chairman, Board of Trustees',
    image: '/images/ceo1.png',
    slug: 'dr-mrs-inemesit-bassey',
  },
  {
    name: 'Mr. UDEME WILSON EKPO',
    role: 'Trustee',
    image: '/images/udeme.png',
    slug: 'udeme-wilson-ekpo',
  },
  {
    name: 'Prof. Sunday Olajide Awofisayo',
    role: 'Trustee',
    image: '/images/sunday.png',
    slug: 'prof-sunday-o-awofisayo',
  },
  {
    name: 'Bassey Christian Oliver',
    role: 'Trustee',
    title: 'Real Estate Professional | Philanthropist | Community Development Advocate',
    image: '/images/christian-oliver.png',
    bio: `Bassey Christian Oliver is a Nigerian real estate professional and philanthropist based in Abuja, with a strong interest in property investment, sustainable urban development, and community advancement.

Born in Anua, Uyo Local Government Area of Akwa Ibom State, and educated in Lagos, Christian's experiences across Nigeria's major economic centres have shaped his understanding of the country's dynamic real estate and development landscape.

He focuses on identifying strategic property opportunities and contributing to the development of modern, functional, and sustainable living spaces within the Federal Capital Territory. His approach combines commercial insight with a commitment to responsible development and long-term value creation.

Beyond real estate, Christian is passionate about philanthropy and community development, supporting initiatives focused on youth empowerment, education, and improved community wellbeing.

Through his professional and philanthropic engagements, Christian seeks to create lasting value—not only through property and investment, but also by contributing to stronger communities and greater opportunities for future generations.`,
    slug: 'bassey-christian-oliver',
  },
  {
    name: 'Alice Agbo',
    role: 'Trustee',
  },
]

// Get all team members for bio lookup
export function getAllTeamMembers(): TeamMember[] {
  const trusteeMembers: TeamMember[] = boardOfTrustees
    .filter((t): t is TrusteeMember & { bio: string; slug: string } => Boolean(t.bio && t.slug))
    .map((t) => ({
      name: t.name,
      role: `${t.role}${t.title ? ` • ${t.title}` : ''}`,
      image: t.image,
      bio: t.bio,
      slug: t.slug,
    }))

  const existingSlugs = new Set([...leadership, ...teamMembers].map((m) => m.slug))
  const uniqueTrustees = trusteeMembers.filter((t) => !existingSlugs.has(t.slug))

  return [...leadership, ...teamMembers, ...uniqueTrustees]
}

// Get team member by slug
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  const allMembers = getAllTeamMembers()
  const member = allMembers.find((member) => member.slug === slug)
  if (member) return member
  if (slug === 'christian-bassey-oliver' || slug === 'mr-christian-bassey-oliver' || slug === 'christian-oliver') {
    return allMembers.find((m) => m.slug === 'bassey-christian-oliver')
  }
  if (slug === 'sifon-nelson-akpan' || slug === 'sifon-akpan' || slug === 'mr-sifon-akpan') {
    return allMembers.find((m) => m.slug === 'mr-sifon-nelson-akpan')
  }
  if (slug === 'godwin-effiong-edet' || slug === 'godwin-edet' || slug === 'tpl-godwin-edet') {
    return allMembers.find((m) => m.slug === 'tpl-godwin-effiong-edet')
  }
  if (slug === 'victor-idem' || slug === 'mr-victor-emmanuel-idem' || slug === 'victor-emmanuel') {
    return allMembers.find((m) => m.slug === 'victor-emmanuel-idem')
  }
  return undefined
}
