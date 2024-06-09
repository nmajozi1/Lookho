import { Tooltip } from '@mui/material';
import './Icon.style.scss';

interface IStackProps {
  tooltip: string;
  image: string;
}

const Icon = (Props: IStackProps) => {
  const { tooltip, image } = Props;
  
  return (
    <div className='icon-containter'>
       <Tooltip title={tooltip} placement='top'>
        <img alt='stack' src={image} />
      </Tooltip>
    </div>
  )
}

export default Icon