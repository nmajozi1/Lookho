import { CardType } from '../../types/lookho-types';
import './CardNew.scss';

const CardNew = (cardProps: CardType) => {
  const { title, body } = cardProps;
  return (
    <div className='card-new-wrapper'>
        <div className='card-new-title'>{title}</div>
        <div className='card-new-body'>
            <div className='card-new-body-container'>
                <span className='card-new-text-body'>{body}</span>
            </div>
        </div>
    </div>
  )
}

export default CardNew;