import Filmoteca from '../../assets/images/coverfilmoteca.png'
import StayActive from '../../assets/images/coverstayactive.png'
import NevskiFit from '../../assets/images/covernevski.png'
import FilmotecaVideo from '../../assets/images/videos/filmotecaVideo.mov';
import StayActiveVideo from '../../assets/images/videos/StayActiveVideo.MP4'
import NevskifitVideo from '../../assets/images/videos/NevskiVideo.mov'

const projects = [
  {
    id: 1,
    title: 'Filmoteca',
    slug: 'filmoteca',
    img_url: Filmoteca,
    website:'https://filmoteca.herokuapp.com/',
    github: 'https://github.com/RdzYogi/filmoteca',
    video: FilmotecaVideo,
    description: [
      'Revamp of a cinema website, aiming to facilitate user experience',
      'Group project',
      'Technologies used: ReactJS, JavaScript, Ruby on Rails, Tailwind CSS'
    ]
  },
  {
    id: 2,
    title: 'StayActive',
    slug: 'stayactive',
    img_url: StayActive,
    website: 'https://www.stayactivecommunity.me/',
    github: 'https://github.com/laurangt/stayactive',
    video: StayActiveVideo,
    phone: 'true',
    description: [
      'Final project of Le Wagon Bootcamp',
      'Group project',
      'Technologies used: JavaScript, Ruby on Rails, CSS'
    ]
  },
  {
    id: 3,
    title: 'Personal Trainer Website',
    slug: 'personal-trainer-website',
    img_url: NevskiFit,
    website: 'https://nevskifit.com',
    github: 'https://github.com/laurangt/personal_trainer',
    video: NevskifitVideo,
    description: [
      'Freelance Project',
      'Technologies used: ReactJS, JavaScript, Tailwind CSS'
    ]
  },
];

export default projects
