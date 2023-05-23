import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const setCurrency = (eventKey, event) =>{
        event.preventDefault();
        event.persist();
        event.stopPropagation();
            dispatch({
                type: 'CHG_CURRENCY',
                payload: eventKey
            })
    }
    return (
        <Dropdown onSelect={setCurrency} className='alert alert-secondary'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Currency ({currency})
        </Dropdown.Toggle>
  
        <Dropdown.Menu style={{backgroundColor:"lightgreen"}}>
          <Dropdown.Item value="$ Dollar" name="dollar" eventKey="$ Dollar">$ Dollar</Dropdown.Item>
          <Dropdown.Item value="£ Pound" name="pound" eventKey="£ Pound">£ Pound</Dropdown.Item>
          <Dropdown.Item value="€ Euro" name="euro" eventKey="€ Euro" >€ Euro</Dropdown.Item>
          <Dropdown.Item value="₹ Rupee" name="rupee" eventKey="₹ Rupee">₹ Rupee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
};
export default Currency;