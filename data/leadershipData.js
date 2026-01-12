export const leadershipTeam = [
  {
    id: 'deepak-mathur',
    name: 'Deepak Mathur',
    position: 'Chief Operating Officer',
    image: '/landing/leaders1.jpg',
    description:
      'Deepak brings over 15 years of experience in operations management and business strategy. His expertise spans across supply chain optimization, team leadership, and driving operational excellence across global organizations. With a proven track record of scaling operations and implementing efficient systems, Deepak is instrumental in ensuring our company runs like a well-oiled machine.',
  },
  {
    id: 'shailesh-amdekar',
    name: 'Shailesh Amdekar',
    position: 'Consultant Strategic Business Partner',
    image: '/landing/leaders2.jpg',
    description:
      'Shailesh Amdekar, CSP, with 27-year career has been a masterclass in leadership, business acumen, and customer relationships. With an eye for operational excellence and a knack for risk management, Shailesh has helped numerous organizations thrive. His approach is analytical and profoundly human—he sees numbers and the people and stories behind them.',
  },
  {
    id: 'sandeep-mehra',
    name: 'Sandeep Mehra',
    position: 'Director, AcmeMinds Private Limited',
    image: '/landing/leaders3.jpg',
    description:
      'Sandeep is a visionary leader with extensive experience in software development and digital transformation. His strategic vision and technical acumen have guided numerous organizations through successful digital transitions. He combines deep technical knowledge with business strategy to deliver innovative solutions.',
  },
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    position: 'VP, Engineering',
    image: '/landing/leaders4.jpg',
    description:
      'Rajesh brings deep technical expertise and leadership excellence to our engineering division. With a track record of building high-performance teams and delivering complex solutions, he ensures our engineering practices remain at the forefront of innovation and quality.',
  },
  {
    id: 'deepak-mathur testing',
    name: 'Deepak Mathur',
    position: 'Chief Operating Officer',
    image: '/landing/leadership1.png',
    description:
      'Deepak brings over 15 years of experience in operations management and business strategy. His expertise spans across supply chain optimization, team leadership, and driving operational excellence across global organizations. With a proven track record of scaling operations and implementing efficient systems, Deepak is instrumental in ensuring our company runs like a well-oiled machine.',
  },
];

export const getLeadershipTeam = () => leadershipTeam;

export const getLeaderById = (id) => {
  return leadershipTeam.find((leader) => leader.id === id);
};
