// import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
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
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default Home;