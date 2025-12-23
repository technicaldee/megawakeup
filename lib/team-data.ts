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
    bio: 'Dr. (Mrs.) Inemesit Bassey is the Visionary Founder and Chief Executive Officer of Mega Wake Up International Outreach and the FCT Heritage Multi-Purpose Cooperative Society. Born on 25th May, 1970 in Anua, Uyo Local Government Area, and married to Mr. Mkpa Aniefiok Bassey of Essien Udim Local Government Area, both of Akwa Ibom State. Dr. (Mrs.) Bassey holds a BSc in Public Administration and Honorary Doctorate Degree in Theology.',
    slug: 'dr-mrs-inemesit-bassey',
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: 'Prof. Sunday O. Awofisayo',
    role: 'Program Director',
    image: '/images/sunday.png',
    bio: 'Professor Sunday O. Awofisayo is a distinguished academic and clinician with a pharmacy background, driven by a passion for training and youth employment. As Principal Researcher at Bioscientific Research and Development Ltd., he leverages expertise in public analysis – specializing in food, water, drugs, and cosmetics – to bridge cutting-edge research with real-world impact. Skilled in strategic capacity building, he empowers youth while advancing bioscientific innovation. His work blends clinical insight with analytical rigor, fostering solutions for public health and community growth. A visionary trainer passionately driving training, youth employment, and healthcare innovation, Professor Awofisayo merges clinical expertise with biopharmaceutical and biomedical research to craft impactful solutions. Specializing in the analysis of food, water, drugs, and cosmetics, he ensures safety and quality standards while spearheading cutting-edge projects that intersect public health and technology. A strategic leader, he excels in capacity building, mentoring young scientists, and fostering collaborations that accelerate bioscientific breakthroughs. His work bridges laboratory insights with community-driven outcomes, addressing pressing health challenges through biopharmaceutics, biomedical advancements, and data-driven strategies. With a focus on transformative leadership, he champions youth empowerment and interdisciplinary research, shaping the next generation of healthcare professionals. His dual commitment to scientific rigor and societal impact positions him as a catalyst for progress in biopharmaceutical innovation and global health resilience. Holds PhD, MBA, MSc, and BSc qualifications.',
    slug: 'prof-sunday-o-awofisayo',
  },
  {
    name: 'Udeme Wilson Ekpo',
    role: 'Director Finance/Operations',
    image: '/images/udeme.png',
    bio: 'Udeme Wilson Ekpo, B.SC, PGDE, MBA, ACA, ACIFC, FCILRM brings over two decades of progressive public service and private sector experience. Currently serving as Assistant Manager in the Retail & Commercial Business Directorate of First Bank of Nigeria Limited, where he manages multiple account relationships for Affluent/High Networth Individuals as well as SMEs accounts in line with the Bank\'s Standard Operating Procedures. Prior to joining First Bank in 2008, Mr. Ekpo was a professional teacher with the rank of Master 1 in Akwa Ibom State Secondary Education Board (2002-2008), where he served for six years. An alumnus of the University of Uyo, he holds a Bachelor of Science degree in Marketing with Second Class (Honors) Upper Division (1998), a Master\'s degree in Business Administration (MBA) with specialization in Accounting (2010), and a Post-Graduate Diploma in Education (PGDE, 2008). He qualified as a Chartered Accountant (ACA) from the Institute of Chartered Accountants of Nigeria (ICAN) in 2017, is certified as a Member of the Chartered Institute of Finance & Control of Nigeria (ACIFC, 2014), and a Fellow of the Chartered Institute of Loan and Risk Management of Nigeria (FCILRM, 2015). Mr. Ekpo has undertaken extensive strategic executive courses and management development trainings at First Bank of Nigeria Limited. He is an ardent believer in reforms, assiduous advocate for systems improvement, a methodical organizer, and an incurable optimist.',
    slug: 'udeme-wilson-ekpo',
  },
  {
    name: 'Dr. Edidiong Efefiong Ibup',
    image: '/images/ibup.png',
    role: 'Chief Health Officer',
    bio: 'Dr. Edidiong Efefiong Ibup is a dedicated emergency medical officer with strong critical thinking and problem-solving skills. Holds an MBBS (2017) in Medicine and Surgery from Pirogov National Memorial Medical University, Vinnytsa, Ukraine. Currently serves as Emergency Medical Officer at Akwa Ibom State Emergency Medical and Ambulance System Services, Ministry of Health, Uyo (2024-Present), responding promptly to emergency calls, administering first aid and basic life support, and collaborating with ambulance teams during patient transport. Also serves as State Coordinator at Universal Council of Christ Ambassadors, Brotherhood of Cross and Star, Akwa Ibom State (2025-Present), Medical Sales Expert at Edymed Pharmacy Limited (2018-Present), and Co-Founder of Study Consult Group Pty Ltd, Mbabane Swaziland (2013-Present). Certified in Basic and Advanced Life Support and as a Health Emergency First Responder. Skilled in digital and project management, critical thinking, basic and advanced life support, problem-solving, teamwork, community outreach, partnership development, and compliance assurance. Experienced in providing life-saving support, ensuring compliance with safety protocols, and contributing to effective patient care in high-pressure environments. At MEWI, Dr. Ibup leads health initiatives and medical programs for community outreach efforts, bringing extensive emergency medical expertise and community engagement experience. Contact: ibupcom4life@yahoo.com | 08164044315, 09028007286 | No. 2 Port Harcourt Street, Uyo, Akwa Ibom State.',
    slug: 'dr-edidiong-efefiong-ibup',
  },
  {
    name: 'Mrs. Chinwe Rejoice Victor',
    role: 'Head of Human Resources',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ALKaCTekF21TW8dhHIrDqwevRPQobZ.png',
    bio: 'Results-driven and ambitious Business Administration graduate with over 17 years of professional experience working full-time since 2007. Proficient in business planning and management, leadership solutions, data analysis, procurement, Human Resource specialization, and administrative management. Holds a B.Sc in Business Administration (2022), PGD in Business Management (2012), Higher Diploma in Business Admin (2011), and currently pursuing an MBA in Human Resource Management. Certified by the Institute of Strategic Management of Nigeria (ISMN, 2012). Currently serves as Head of Operations at Rechin Foundation for Women and Youth Empowerment (2017-2025), with previous experience as Business Development Officer at Capital Oil and Gas Ltd (2007-2014) and Administrative/Procurement Officer at Edla Petrochemical Nig Ltd (2005-2007). Expertise includes marketing and sales, procurement, data collection and analysis, Microsoft Office suite, and excellent organizational and communication skills. Contact: rejoiceinyama@gmail.com | 08062567218',
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
    role: 'Head of Internal Audit',
    bio: 'Chief Henry Akpan Obot, native of Ikot Aba in Mkpat Enin LGA, Akwa Ibom State, born on 15th December 1956. A seasoned and certified banker with over 25 years of industry experience, he meritoriously retired as Network Branches Controller with major responsibility to secure bank assets through auditing and compliance provisions. Chief Obot has widely traveled transversing all the 36 states/FCT and overseas, bringing extensive national and international exposure to his role. Currently, he serves as Chairman/CEO of DICKSTIME VENTURES LIMITED, a company involved in Consultancy Services based in Abuja. His extensive banking background in audit and compliance makes him uniquely qualified to oversee internal audit functions, ensuring transparency, accountability, and efficient use of organizational resources at MEWI.',
    image: '/images/henry.png',
    slug: 'chief-henry-akpan-obot',
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

export const boardOfTrustees = [
  { name: 'Dr. Inemesit Aniefiok Bassey', role: 'Trustee' },
  { name: 'Mr. Mkpa Aniefiok Bassey', role: 'Trustee' },
  { name: 'Ime Donald', role: 'Trustee' },
  { name: 'Alice Agbo', role: 'Trustee' },
]

// Get all team members for bio lookup
export function getAllTeamMembers(): TeamMember[] {
  return [...leadership, ...teamMembers]
}

// Get team member by slug
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  const allMembers = getAllTeamMembers()
  return allMembers.find(member => member.slug === slug)
}
