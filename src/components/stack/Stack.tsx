import { useEffect, useState } from 'react';
import { stackData } from '../../utils/utils';
import './Stack.scss';
import Icon from '../icon/Icon';

const Stack = () => {
  const [stackInfo, setStackInfo] = useState<any[]>([]);

  useEffect(() => {
    const stackInfo = stackData();
    setStackInfo(stackInfo)
  }, []);

  return (
    <div className='stack-wrapper'>
      <div className='stack-body'>
          {stackInfo.map((stack, index) => (
            <Icon key={index} image={stack.image} tooltip={stack.name} />
          ))}
      </div>
    </div>
  )
}

export default Stack
