import  { FC } from 'react';
import './Home.css';
import video1 from '../../assets/PlanifyAnimatedLogo.mp4'

interface HomeProps {}

const Home: FC<HomeProps> = () => (
<div className="container justify-content:center">
<div className="jumbotron" >
  <video src={video1} loop autoPlay muted className='animatedLogo'/>
  <p className='introP'>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr/>
  <p className='introP2'>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" href="#" role="button" id='learnMore'>Learn more</a>
</div>
  </div>
);

export default Home;
