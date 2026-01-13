export const leadershipTeam = [
  {
    id: 'deepak-mathur',
    name: 'Deepak Mathur',
    position: 'Chief Operating Officer',
    image: '/landing/Deepak-Mathur.png',
    description:
      'Deepak, Founder and COO, with 24 years of experience, specializes in automation, software quality, project management, and AI/Computer Vision. He holds a Computer Science degree from Bharati Vidyapeeth, Pune, along with certifications in testing, AWS, Agile, and project management.',
  },
  {
    id: 'Chandrakant Dollin',
    name: 'Chandrakant Dollin',
    position: 'Chief Executive Officer',
    image: '/landing/Chandrakant-Dollin.jpg',
    description:
      "CD, Partner and CEO of CodeElan Technologies, has 25+ years of experience in enterprise technology, AI, and Computer Vision, leading digital transformations. Based in Silicon Valley, he's a UC Berkeley engineering alumnus with a strong track record in growing software products.",
  },
  {
    id: 'Shailesh amdekar',
    name: 'Shailesh amdekar',
    position: 'Consultant Strategic Business Partner',
    image: '/landing/Shailesh-amdekar.png',
    description:
      'Shailesh Amdekar, CSP, with 27-year career has been a masterclass in leadership, business acumen, and customer relationships. With an eye for operational excellence and a knack for risk management, Shailesh has helped numerous organizations thrive. His approach is analytical and profoundly human—he sees numbers and the people and stories behind them.',
  },
  {
    id: 'Rajesh Kanade',
    name: 'Rajesh Kanade',
    position: 'Chief Technical Officer',
    image: '/landing/Rajesh-Kanade.jpg',
    description:
      'Rajesh Kanade, 25+ years of industry experience in software development with 16+ years in leadership roles, primarily in Unified Communication, Contact centers & Cybersecurity and 1 US Patent granted.Thought Leader with a passion for building high-performing teams responsible for conceptualizing brand-new products and delivering them to market.',
  },
];

export const getLeadershipTeam = () => leadershipTeam;

export const getLeaderById = (id) => {
  return leadershipTeam.find((leader) => leader.id === id);
};
