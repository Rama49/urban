import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar' ;
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import user from '../../Image/user.png';
import { BsSearch, BsSliders, BsAlarm} from 'react-icons/bs';


const Nave = () => {
  return (
    <Navbar  expand="lg" className='dash sticky-top offset-lg-2 off '>
      <div className= 'container-fluid nav py-2'>
         <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto float-end  ps-5">
               <InputGroup className="mb-3">
        <InputGroup.Text className='bg-white'> <BsSearch /></InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text className='bg-white'><BsSliders /></InputGroup.Text>
      </InputGroup>
          </Nav>
          <span className='mx-5 text'> < BsAlarm /></span>
        <span className='me-5 text'> < BsAlarm /></span>
        <img src={user} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export default Nave;