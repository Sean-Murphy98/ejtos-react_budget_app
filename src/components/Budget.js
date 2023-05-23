import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const setBudget = userVal =>{
            dispatch({
                type: 'SET_BUDGET',
                payload: userVal
            })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency[0]}</span>
            <input type="number" value={budget} step="10" onChange={(e) => setBudget(e.target.value)} />
        </div>
    );
};
export default Budget;
