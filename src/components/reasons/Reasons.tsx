import { CardType } from '../../types/lookho-types';
import { CardData } from '../../utils/utils';
import CardNew from '../card-new/CardNew';
import './Reasons.scss';

const Reasons = () => {
  const cardData = CardData();

  return (
    <div className='reasons-wrapper'>
        <div className='reasons-body'>
            <div className='reasons-card-container'>
                {cardData.map((card: CardType) => (
                  <CardNew title={card.title} body={card.body} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Reasons