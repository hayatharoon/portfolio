const expertise = [
  {
    id: 0,
    title: 'ReactJS Developer',
    desc: `ReactJs Developer with a solid two-year track record. I have had the privilege of contributing to a diverse range of Projects, Including both large-scale and greenfield development, where I've consistently delivered high quality, robust solutions that exceed client expectations. My in-depth knowledge of React and Javascript enables me to tackle complex challenges, collaborate effectively with teams.`,
  },
  {
    id: 1,
    title: 'Full Stack Developer',
    desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
  },
  {
    id: 2,
    title: 'Open Source Contributor',
    desc: "The future of software development lies in the realm of open source. So, during my weekends, I dedicate time to contributing to open source projects. By sharing my skill and knowledge, I aim to make a positive impact and enhance the collective pool of resources available to developers worldwide. Open source is not just about personal growth. it's about fostering a thriving community for the greater good.",
  },
  {
    id: 3,
    title: 'Desktop Application',
    desc: `I have the ability to develop cross-platform desktop application using ElectronJS. This versatile skill allows me to extend my web development capabilities to create robust, standalone desktop application. Whether it's web-based solutions or desktop applications, I am dedicated to leveraging the power of Electron.js to deliver cutting-edge software that meets the unique needs of each project.`,
  },
  {
    id: 4,
    title: 'Technical Writer',
    desc: `I am a technical writer specializing in JavaScript and React.js, with a keen focus on exploring the React.js ecosystem. I regularly publish informative blog posts on platforms like Hashnode, where I share insights, tutorials, and updates related to these technologies. Additionally, I actively engage with the tech community on Twitter and LinkedIn, sharing my knowledge, experiences, and fostering discussions on JavaScript and React.js development`,
  },
  {
    id: 5,
    title: 'Scrum and Jira',
    desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
  },
];

export default function handler(_req, res) {
  res.status(200).json(expertise);
}
