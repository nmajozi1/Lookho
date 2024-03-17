import './Services.scss';

const Services = () => {
  const images = ['/custom_two.png', '/app_four.png', '/web_four.png', '/qa_four.png'];
  return (
    <div className='services-wrapper'>
        <div className='services-body'>
            {images.map((service: string, index: number) => (<img key={index} alt='serv' src={service} />))}
        </div>
    </div>
  )
}

export default Services