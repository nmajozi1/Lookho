
import { InputType } from '../../types/lookho-types';
import './Input.scss';

const Input = (inputProps: InputType) => {
  const { label } = inputProps;

  return (
    <div className='input-wrapper'>
      <span className='label-style'>{label}</span>
      <input className='input-style' type='text' />
    </div>
  )
}

export default Input