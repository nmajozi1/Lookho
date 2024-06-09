import { Tooltip } from '@mui/material';
import './Partners.scss';

const Partners = () => {
  const partnerImages = [
    {url: '/partners/exco.jpeg', name: 'ex.co'}, 
    {url: '/partners/sfw.png', name: 'Safe Workplace'}, 
    {url: '/partners/strider.jpeg', name: 'Strider'},
    {url: '/xalisa.svg', name: 'Xalisa'},
  ];
  return (
    <div className='partners-wrapper'>
        <div className='parners-body'>
            <div className='partners-image-container'>
                {partnerImages.map((image: any) => {
                  return (
                    <Tooltip title={image.name} placement='top' >
                      <img alt='/partners/exco.jpeg' src={image.url} />
                    </Tooltip>
                  )
                })}
            </div>
        </div>
    </div>
  )
}

export default Partners