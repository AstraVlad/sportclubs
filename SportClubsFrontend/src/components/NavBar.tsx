import { useState } from 'react';
import arrowRight from '../img/arrowRightIcon.svg';
import close from '../img/closeIcon.svg';

export default function NavBar() {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <nav className={`NavBar ${!isOpened ? 'closed': ''}`}>
            <div className='OpenClose' onClick={() => setIsOpened(!isOpened)}>
                <img className='Icon' src={isOpened ? close : arrowRight}/>
            </div>
        </nav>
    )
}