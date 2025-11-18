import type { Company } from '../types/Company';

// Mock company data for demonstration
// In a real app, this would come from an API
// TODO: Replace with actual API calls when backend is ready
export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    industry: 'Technology',
    location: 'San Francisco, CA',
    foundedYear: 2015,
    employees: 1200,
    revenue: 3739.15, // ₹37.39 crores
    website: 'https://techcorp.com',
    description: 'Leading provider of cloud-based software solutions for enterprise clients.',
    ceo: 'Sarah Johnson',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Green Energy Inc',
    industry: 'Energy',
    location: 'Austin, TX',
    foundedYear: 2018,
    employees: 800,
    revenue: 2284.99, // ₹22.85 crores
    website: 'https://greenenergy.com',
    description: 'Renewable energy solutions and solar panel installations.',
    ceo: 'Michael Chen',
    status: 'Active'
  },
  {
    id: '3',
    name: 'FinanceFirst Bank',
    industry: 'Finance',
    location: 'New York, NY',
    foundedYear: 1995,
    employees: 5000,
    revenue: 9965.81, // ₹99.66 crores
    website: 'https://financefirst.com',
    description: 'Full-service commercial and retail banking institution.',
    ceo: 'Robert Williams',
    status: 'Active'
  },
  {
    id: '4',
    name: 'HealthPlus Medical',
    industry: 'Healthcare',
    location: 'Boston, MA',
    foundedYear: 2010,
    employees: 2500,
    revenue: 7388.66, // ₹73.89 crores
    website: 'https://healthplus.com',
    description: 'Comprehensive healthcare services and medical technology.',
    ceo: 'Dr. Lisa Anderson',
    status: 'Active'
  },
  {
    id: '5',
    name: 'EduTech Learning',
    industry: 'Education',
    location: 'Seattle, WA',
    foundedYear: 2020,
    employees: 450,
    revenue: 1044.14, // ₹10.44 crores
    website: 'https://edutech.com',
    description: 'Online educational platforms and e-learning solutions.',
    ceo: 'James Rodriguez',
    status: 'Active'
  },
  {
    id: '6',
    name: 'RetailMax Stores',
    industry: 'Retail',
    location: 'Chicago, IL',
    foundedYear: 1985,
    employees: 15000,
    revenue: 17434.15, // ₹174.34 crores
    website: 'https://retailmax.com',
    description: 'Large retail chain with stores across the United States.',
    ceo: 'Emma Thompson',
    status: 'Active'
  },
  {
    id: '7',
    name: 'ManufacturePro',
    industry: 'Manufacturing',
    location: 'Detroit, MI',
    foundedYear: 1978,
    employees: 3200,
    revenue: 5605.82, // ₹56.06 crores
    website: 'https://manufacturepro.com',
    description: 'Automotive parts manufacturing and supply chain solutions.',
    ceo: 'David Kim',
    status: 'Active'
  },
  {
    id: '8',
    name: 'FoodDelight Corp',
    industry: 'Food & Beverage',
    location: 'Portland, OR',
    foundedYear: 2012,
    employees: 1800,
    revenue: 2663.47, // ₹26.63 crores
    website: 'https://fooddelight.com',
    description: 'Organic food products and sustainable farming initiatives.',
    ceo: 'Maria Garcia',
    status: 'Active'
  },
  {
    id: '9',
    name: 'TransportLogistics',
    industry: 'Transportation',
    location: 'Miami, FL',
    foundedYear: 2005,
    employees: 2200,
    revenue: 4030.48, // ₹40.30 crores
    website: 'https://transportlogistics.com',
    description: 'Freight and logistics services for international trade.',
    ceo: 'Carlos Martinez',
    status: 'Active'
  },
  {
    id: '10',
    name: 'MediaWorks Studio',
    industry: 'Media',
    location: 'Los Angeles, CA',
    foundedYear: 2017,
    employees: 650,
    revenue: 1620.99, // ₹16.21 crores
    website: 'https://mediaworks.com',
    description: 'Digital media production and content creation services.',
    ceo: 'Jennifer Lee',
    status: 'Active'
  },
  {
    id: '11',
    name: 'CyberSecure Systems',
    industry: 'Technology',
    location: 'Washington, DC',
    foundedYear: 2019,
    employees: 350,
    revenue: 744.51, // ₹7.45 crores
    website: 'https://cybersecure.com',
    description: 'Cybersecurity solutions and penetration testing services.',
    ceo: 'Alex Turner',
    status: 'Active'
  },
  {
    id: '12',
    name: 'CloudFirst Technologies',
    industry: 'Technology',
    location: 'San Jose, CA',
    foundedYear: 2016,
    employees: 950,
    revenue: 2592.92, // ₹25.93 crores
    website: 'https://cloudfirst.com',
    description: 'Cloud infrastructure and DevOps automation tools.',
    ceo: 'Ryan Singh',
    status: 'Acquired'
  },
  {
    id: '13',
    name: 'BioPharma Research',
    industry: 'Healthcare',
    location: 'San Diego, CA',
    foundedYear: 2008,
    employees: 1100,
    revenue: 4712.74, // ₹47.13 crores
    website: 'https://biopharma.com',
    description: 'Pharmaceutical research and drug development.',
    ceo: 'Dr. Patricia Wilson',
    status: 'Active'
  },
  {
    id: '14',
    name: 'GreenBuild Construction',
    industry: 'Construction',
    location: 'Denver, CO',
    foundedYear: 2013,
    employees: 750,
    revenue: 1947.18, // ₹19.47 crores
    website: 'https://greenbuild.com',
    description: 'Sustainable construction and green building technologies.',
    ceo: 'Mark Johnson',
    status: 'Active'
  },
  {
    id: '15',
    name: 'AeroSpace Dynamics',
    industry: 'Aerospace',
    location: 'Houston, TX',
    foundedYear: 2001,
    employees: 4200,
    revenue: 12037.49, // ₹120.37 crores
    website: 'https://aerospace.com',
    description: 'Aerospace engineering and satellite technology development.',
    ceo: 'Colonel John Davis',
    status: 'Active'
  },
  {
    id: '16',
    name: 'SmartHome Tech',
    industry: 'Technology',
    location: 'Phoenix, AZ',
    foundedYear: 2021,
    employees: 280,
    revenue: 375.16, // ₹3.75 crores
    website: 'https://smarthome.com',
    description: 'IoT devices and smart home automation systems.',
    ceo: 'Sophie Brown',
    status: 'Active'
  },
  {
    id: '17',
    name: 'OceanFreight Ltd',
    industry: 'Transportation',
    location: 'Long Beach, CA',
    foundedYear: 1992,
    employees: 1600,
    revenue: 3309.21, // ₹33.09 crores
    website: 'https://oceanfreight.com',
    description: 'International shipping and maritime logistics.',
    ceo: 'Captain Thomas Miller',
    status: 'Active'
  },
  {
    id: '18',
    name: 'EcoFarm Organics',
    industry: 'Agriculture',
    location: 'Des Moines, IA',
    foundedYear: 2014,
    employees: 420,
    revenue: 654.87, // ₹6.55 crores
    website: 'https://ecofarm.com',
    description: 'Organic farming and sustainable agriculture solutions.',
    ceo: 'Mary Taylor',
    status: 'Active'
  },
  {
    id: '19',
    name: 'LuxuryTravel Co',
    industry: 'Tourism',
    location: 'Las Vegas, NV',
    foundedYear: 2007,
    employees: 890,
    revenue: 1298.12, // ₹12.98 crores
    website: 'https://luxurytravel.com',
    description: 'High-end travel and hospitality services.',
    ceo: 'Richard Stone',
    status: 'Inactive'
  },
  {
    id: '20',
    name: 'DataAnalytics Pro',
    industry: 'Technology',
    location: 'Atlanta, GA',
    foundedYear: 2018,
    employees: 670,
    revenue: 1573.68, // ₹15.74 crores
    website: 'https://dataanalytics.com',
    description: 'Big data analytics and business intelligence solutions.',
    ceo: 'Dr. Kevin Liu',
    status: 'Active'
  }
];

// Mock API functions to simulate backend calls
export const fetchCompanies = async (): Promise<Company[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockCompanies;
};

export const searchCompanies = async (query: string): Promise<Company[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCompanies.filter(company => 
    company.name.toLowerCase().includes(query.toLowerCase()) ||
    company.industry.toLowerCase().includes(query.toLowerCase()) ||
    company.location.toLowerCase().includes(query.toLowerCase()) ||
    company.description.toLowerCase().includes(query.toLowerCase())
  );
};