const portfolio = [
  {
    id: 0,
    projectName: 'Mereos',
    url: 'https://mereos.eu/',
    image: 'projects/mereos.png',
    projectDetail:
      'Mereos is a large scale project which simplifies the corporate recruitment process. Schedule up to 20,000 simultaneously monitored sessions and offer a unique experience to your candidates. This application having multiple portals and one chrome extension.',
    technologiesUsed: ['ReactJS', 'NextJs', 'Redux', 'SCSS', 'Formik', 'Axios', 'Webpack bundler'],
  },
  {
    id: 1,
    projectName: 'Firm Sanad',
    url: 'https://firmsanad.invogen.co/',
    image: 'projects/firmSanad.png',
    projectDetail:
      'Firm Sanad is about Invest in Saudi Arabia. Firm Sanad simplify the process of obtaining licenses and starting a business in Saudi Arabia with our streamlined platform.',
    technologiesUsed: ['ReactJS', 'Zustand', 'Antd Design', 'Axios', 'Recharts', 'React-Query', 'SCSS', 'TailwindCSS', 'Backend with dotnet'],
  },
  {
    id: 0,
    projectName: 'JMM Technologies',
    url: 'https://jmm.ltd/',
    image: 'projects/jmm.png',
    projectDetail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!',
    technologiesUsed: ['React'],
  },
  {
    id: 1,
    projectName: 'Otawix',
    url: 'https://b2c.otawix.com/',
    image: 'projects/otawix.png',
    projectDetail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!',
    technologiesUsed: ['NextJS', 'NodeJS', 'MUI', 'TailwindCSS'],
  },
  {
    id: 2,
    projectName: 'Spatay',
    url: 'https://spatay.com/',
    image: 'projects/spatay.png',
    projectDetail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!',
    technologiesUsed: ['Reactjs'],
  },
  {
    id: 2,
    projectName: 'Culyte',
    url: 'https://culyte.com',
    image: 'projects/culyte.png',
    projectDetail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!',
    technologiesUsed: ['Reactjs'],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
