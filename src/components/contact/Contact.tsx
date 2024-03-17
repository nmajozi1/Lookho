import Input from '../input/Input';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      {/* <img style={{ height: 50, width: 159 }} alt='lookho' src='/LOOKHO.png' /> */}
      <div className='contact-body'>
        <Input label='Name' />
        <Input label='email' />
        <Input label='Your Message' />
      </div>
    </div>
  )
}

export default Contact;