import Filmoteca from '../../assets/images/coverfilmoteca.png'
import StayActive from '../../assets/images/coverstayactive.png'
import NevskiFit from '../../assets/images/covernevski.png'
import FilmotecaVideo from '../../assets/images/videos/filmotecaVideo.mov';
import StayActiveVideo from '../../assets/images/videos/StayActiveVideo.MP4'

const projects = [
  {
    id: 1,
    title: 'Filmoteca',
    slug: 'filmoteca',
    img_url: Filmoteca,
    website:'https://filmoteca.herokuapp.com/',
    github: 'https://github.com/RdzYogi/filmoteca',
    video: FilmotecaVideo
  },
  {
    id: 2,
    title: 'StayActive',
    slug: 'stayactive',
    img_url: StayActive,
    website: 'https://www.stayactivecommunity.me/',
    github: 'https://github.com/laurangt/stayactive',
    video: StayActiveVideo
  },
  {
    id: 3,
    title: 'Personal Trainer Website',
    slug: 'personal-trainer-website',
    img_url: NevskiFit,
    website: 'https://nevskifit.com',
    github: 'https://github.com/laurangt/personal_trainer',
    video: StayActiveVideo
  },
];

export default projects
