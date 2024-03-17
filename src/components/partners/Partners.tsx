import './Partners.scss';

const Partners = () => {
  const partnerImages = ['/partners/exco.jpeg', '/partners/sfw.png', '/partners/strider.jpeg'];
  return (
    <div className='partners-wrapper'>
        <div className='parners-body'>
            {/* <span className='partners-header'><img alt='header' src='handshake.svg' style={{ height: 100, width: 100 }} /></span> */}
            <div className='partners-image-container'>
                {partnerImages.map((image: string) => (<img alt='/partners/exco.jpeg' src={image} />))}
            </div>
        </div>
    </div>
  )
}

export default Partners