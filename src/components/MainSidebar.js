// MainSidebar.js
import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../images/Logo.svg";
import { ReactComponent as Conversations } from "../images/conversations.svg";
import { ReactComponent as Tickets } from "../images/ticket-icon.svg";
import { ReactComponent as Contacts } from "../images/contact-icon.svg";
import { ReactComponent as Help } from "../images/help-center-icon.svg";
import { ReactComponent as Performance } from "../images/performance-icon.svg";
import { ReactComponent as Create } from "../images/create-new.svg";
import TooltipComponent from './TooltipComponent';


function MainSidebar() {
    const conversationsLabel  = "Conversations";
    const ticketsLabel = "Tickets";
    const contactsLabel = "Contacts";
    const helpCenterLabel = "Help Center";
    const performanceLabel = "Performance";

return (
    <div className="main__sidebar">
        <div className="top">
            <div className="main__logo">
                <Logo className="logo"/>
            </div>
            <Link to="/">
                <TooltipComponent label={conversationsLabel }>
                    <div className="icon__item">
                        <Conversations className="Conversations" />
                    </div>
                </TooltipComponent>
            </Link>
            <Link to="/Tickets">
                <TooltipComponent label={ticketsLabel}>
                    <div className="icon__item">
                        <Tickets className="Tickets"/>
                    </div>
                </TooltipComponent>
            </Link>
            <Link to="/Contacts">
                <TooltipComponent label={contactsLabel}>
                    <div className="icon__item">
                        <Contacts className="Contacts"/>
                    </div>
                </TooltipComponent>
            </Link>
            <Link to="/HelpCenter">
                <TooltipComponent label={helpCenterLabel}>
                    <div className="icon__item">
                        <Help className="Help"/>
                    </div>
                </TooltipComponent>
            </Link>
            <Link to="/Performance">
                <TooltipComponent label={performanceLabel}>
                    <div className="icon__item">
                        <Performance className="Performance"/>
                    </div>    
                </TooltipComponent>
            </Link>
        </div>

        <div className="mid">
            <div className="icon__item">
            <Create className="Create"/>
            </div>
        </div>

        <div className="botom">
            <div className="icon__item">
            <img src={require('../images/Settings.png')} alt="settings"/>
            </div>
        </div>
        </div>
    );
}

export default MainSidebar;
