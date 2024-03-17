import './Discover.scss';

const Discover = () => {
  const discoverText = "Discover how Lookho can transform your business through tailor-made software solutions. Let's embark on a journey of digital transformation together – because your success is our priority.";
  
  return (
    <div className='discover-wrapper'>
        <div className='discover-text-body'>
            <span className='discover-text'>{discoverText}</span>
        </div>
    </div>
  )
}

export default Discover