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
import { ReactComponent as Dark } from "../images/Light.svg";
import { ReactComponent as Notfications } from "../images/Notfications.svg";
import { ReactComponent as Settings } from "../images/Settings.svg";
import TooltipComponent from './TooltipComponent';


function MainSidebar() {
    const conversationsLabel  = "Conversations";
    const ticketsLabel = "Tickets";
    const contactsLabel = "Contacts";
    const helpCenterLabel = "Help Center";
    const performanceLabel = "Performance";
    const settingsLabel = "Settings";
    const notificationsLabel = "Notfications";
    const darkLabel = "Dark Mode";

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
                <TooltipComponent label={notificationsLabel}>
                    <div className="icon__item">
                        <Notfications className="Notfications"/>
                    </div>    
                </TooltipComponent>
                <TooltipComponent label={darkLabel}>
                    <div className="icon__item">
                        <Dark className="Dark"/>
                    </div>    
                </TooltipComponent>
                <Link to="/Settings">
                <TooltipComponent label={settingsLabel}>
                    <div className="icon__item">
                        <Settings className="Settings"/>
                    </div>    
                </TooltipComponent>
                </Link>
                <div className="user__avatar">
                    <img src={require("../images/avatar.jpg")} alt="user avatar"/>
                </div>
        </div>
        </div>
    );
}

export default MainSidebar;
