import CardImage from '../cardImage/CardImage';
import './Services.scss';

const Services = () => {
  const images = ['/custom_two.png', '/app_four.png', '/web_four.png', '/qa_four.png'];
  return (
    <div className='services-wrapper'>
        <div className='services-body'>
            {images.map((service: string, index: number) => (
              <CardImage service={service} />
            // <img key={index} alt='serv' src={service} />
            // <div style={{ maxWidth: 300, maxHeight: 450, background: 'red', borderRadius: 16 }}>
            //   <img className='images' key={index} alt='serv' src={service} />
            // </div>
            ))}
        </div>
    </div>
  )
}

export default Services