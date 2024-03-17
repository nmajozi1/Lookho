import Contact from '../../components/contact/Contact';
import Navigation from '../../components/navigation/Navigation';
import Partners from '../../components/partners/Partners';
import Reasons from '../../components/reasons/Reasons';
import Services from '../../components/services/Services';
import Stack from '../../components/stack/Stack';
import './Home.scss';

const Home = () => {
  return (
    <div className='wrapper'>
      <Navigation />
      <Services />
      <Stack />
      <Reasons />
      <Partners />
      <Contact />
    </div>
  )
}

export default Home;