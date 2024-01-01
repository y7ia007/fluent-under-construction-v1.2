import React from "react";
import { ReactComponent as Logo } from "../images/Logo.svg";
import { ReactComponent as Conversations } from "../images/conversations.svg";
import { ReactComponent as Tickets } from "../images/ticket-icon.svg";
import { ReactComponent as Contacts } from "../images/contact-icon.svg";
import { ReactComponent as Help } from "../images/help-center-icon.svg";
import { ReactComponent as Performance } from "../images/performance-icon.svg";
import { ReactComponent as Create } from "../images/create-new.svg";


function MainSidebar() {
    return(
        <div className="main__sidebar">
            <div className="top">
                <div className="main__logo">
                    <Logo className="logo"/>
                </div>
                <div className="icon__item">
                    <Conversations className="Conversations"/>
                </div>
                <div className="icon__item">
                    <Tickets className="Tickets"/>
                </div>
                <div className="icon__item">
                    <Contacts className="Contacts"/>
                </div>
                <div className="icon__item">
                    <Help className="Help"/>
                </div>
                <div className="icon__item">
                    <Performance className="Performance"/>
                </div>      
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
    )
}

export default MainSidebar;