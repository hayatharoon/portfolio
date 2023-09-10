// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Umar Toor',
    image: 'images/umartoor.jpg',
    designation: 'Project Development Manager at Gitlogix',
    view: "Haroon is a learning developer. He faces problems open-mindedly and provides the adequate solution. He's a good pick in any Team.",
    linkednURL: 'https://www.linkedin.com/in/umarayyaz/',
  },
  {
    id: 1,
    name: 'Komal Ramzan',
    image: 'images/blank_girl.jpg',
    designation: 'Project Manager at JMM Technologies | Software Engineer',
    view: "I've had the privilege of working with Haroon as a Frontend Developer, and I highly recommend him. He is not only a talented developer but also incredibly committed and hardworking. Haroon consistently goes the extra mile to meet deadlines and provides valuable support when time is short. He is a true team player who excels under pressure and delivers high-quality results.",
    linkednURL: 'https://www.linkedin.com/in/komal-ramzan-599338246/',
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
