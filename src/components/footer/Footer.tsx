import './Footer.style.scss';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-body'>
        <span className='footer-text'>Email: ntokozo.lookho@gmail.com</span>
        <span className='footer-text'>Tell: 069 931 1763</span>
      </div>
      <img style={{ height: 300, width: 300 }} alt='lookho' src='/lookhoLogoThree.svg' />
    </div>
  )
}

export default Footer