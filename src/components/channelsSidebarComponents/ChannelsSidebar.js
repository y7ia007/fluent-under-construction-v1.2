import React from "react";
import { useState } from "react";
import '../../App.css';
import { ReactComponent as Collabes } from "../../images/collabes-icons.svg";
import { ReactComponent as Dialog } from "../../images/Dialog-icon.svg";
import { ReactComponent as Unassigned } from "../../images/Inbox.svg";
import { ReactComponent as Mentions } from "../../images/mentions-icons.svg";
import { ReactComponent as Approvals } from "../../images/approvals-icons.svg";
import ListContainer from "./ListContainer";
import ListItem from "./ListItem";

function ChannelsSidebar() {

    const [show, setShow]=useState(true)
    
    return(
        <>
            {show?
            <div className="channels__sidebar">
                <div className="sidebar__header">
                    <div className="sidebar__header__title">
                        Conversations
                    </div>
                </div>
                <div className="sidebar__card">
                    <div className="sidebar__card__active">
                        <div className="icon__item">
                            <Dialog className="Dialog" />
                        </div>
                        <h5>
                            Your Conversations
                        </h5>
                    </div>
                    <div className="sidebar__card_item">
                        <div className="icon__item">
                            <Unassigned className="Unassigned" />
                        </div>
                        <h5>
                            Unassigned
                        </h5>
                    </div>
                    <div className="sidebar__card_item">
                        <div className="icon__item">
                            <Dialog className="Dialog" />
                        </div>
                        <h5>
                            All Conversation
                        </h5>
                    </div>
                    <div className="sidebar__card_item">
                        <div className="icon__item">
                            <Mentions className="Mentions" />
                        </div>
                        <h5>
                            Mentions
                        </h5>
                    </div>
                    <div className="sidebar__card_item">
                        <div className="icon__item">
                            <Approvals className="Approvals" />
                        </div>
                        <h5>
                            Approvals
                        </h5>
                    </div>
                </div>
                <div>
                    <ListContainer headerTitle="Inboxes" />
                        <ListItem icon={(<img src={require("../../images/x-icon.png")} alt="x"/>)} text="Twitter" badge="5"/>
                        <ListItem icon={(<img src={require("../../images/facebook.png")} alt="facebook"/>)} text="Facebook" badge="155"/>
                        <ListItem icon={(<img src={require("../../images/instagram.png")} alt="instagram"/>)} text="Instagram" />
                        <ListItem icon={(<img src={require("../../images/watsapp.png")} alt="Whatsapp"/>)} text="Whatsapp" badge="10"/>
                        <ListItem icon={(<img src={require("../../images/mail.png")} alt="Mail"/>)} text="Mail"/>
                </div>                           
                <div>
                    <ListContainer headerTitle="Teams" />
                        <ListItem text="Arabic Team" badge="25"/>
                        <ListItem text="English only Team"/>
                        <ListItem text="Arabic and English" />
                </div>                           
                <div>
                    <ListContainer headerTitle="Smart Folder" />
                        <ListItem text="SLA Warring" badge="⚠️"/>
                        <ListItem text="SLA Missed" badge="🔥️"/>
                        <ListItem text="All Open" badge="🔥️"/>
                </div>                           
            </div>:null}
                <div className="collabse__icon__item" onClick={()=>setShow(!show)}>
                    <Collabes className="Collabes" />
                </div>
        </>
    )
}
export default ChannelsSidebar;

