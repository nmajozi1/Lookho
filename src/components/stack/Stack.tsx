import { useEffect, useState } from 'react';
import { stackData } from '../../utils/utils';
import './Stack.scss';
import { Tooltip } from '@mui/material';

const Stack = () => {
  const [stackInfo, setStackInfo] = useState<any[]>([]);

  useEffect(() => {
    const stackInfo = stackData();
    setStackInfo(stackInfo)
  }, []);

  return (
    <div className='stack-wrapper'>
        <div className='stack-body'>
            {stackInfo.map((stack) => (
                <Tooltip title={stack.name} placement='top'>
                  <img style={{ width: 50, height: 50 }} alt='stack'src={stack.image} />
                </Tooltip>
            ))}
        </div>
    </div>
  )
}

export default Stack
