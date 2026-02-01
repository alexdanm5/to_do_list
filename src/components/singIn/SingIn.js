import { useState } from 'react';
import Input from '../elements/input/Input';

import './singIn.scss'

const SingIn = ({getRes}) => {
    const [name, setName] = useState(null);
    const [pass, setPass] = useState(null);

    const userName = "user101";
    const password = "0101";

    const getInputValueName = (e) => {
        setName(e.target.value);
    }

    const getInputValuePass = (e) => {
        setPass(e.target.value);
    }

    const validation = () => {
        if (name === userName && pass === password) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <form className="sing__form">
            <Input value={name} onChange={getInputValueName} className={"sing__input sing__user"} type={"text"} name={"name"} 
                placeholder={'user101'}/>
            <Input value={pass} onChange={getInputValuePass} className={"sing__input sing__password"} type={"password"} name={"password"} 
                placeholder={'0101'}/>

            <button onClick={() => {
                getRes(validation);
            }} className="sing__btn">Ok</button>
        </form>
    )
}

export default SingIn;