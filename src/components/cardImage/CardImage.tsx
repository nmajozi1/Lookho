import './CardImage.style.scss';

interface IProps {
  service: string;
}

const CardImage = (Props: IProps) => {
  const { service } = Props;
  
  return (
    <div className='card-container'>
      <img alt='serv' src={service} />
    </div>
  )
}

export default CardImage