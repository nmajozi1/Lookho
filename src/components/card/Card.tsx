import { CardType } from '../../types/lookho-types';
import './Card.scss';

const Card = (cardProps: CardType) => {
  const { title, body, image } = cardProps

  return (
    <div className="card-wrapper">
      <span className="card-title">{title}</span>
      <span className='card-body'>{body}</span>
      {/* <div className="card-body">
        <img className='card-image' alt='integration' src={image} />
      </div> */}
    </div>
  )
}

export default Card;