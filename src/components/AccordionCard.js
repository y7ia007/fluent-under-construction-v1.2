import React, { useState } from 'react';
import {ReactComponent as Chevrondown} from "../images/chev-down.svg";
import {ReactComponent as Chevronright} from "../images/chevron-right.svg";


const AccordionCard = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? <Chevrondown className="Chevrondown"/> : <Chevronright className="Chevronright"/>}</div>
            </div>
        {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
    };

export default AccordionCard;
