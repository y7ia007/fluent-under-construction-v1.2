import React from "react";
import { useState } from "react";
import '../App.css';
import { ReactComponent as Collabes } from "../images/collabes-icons.svg";
import { ReactComponent as Dialog } from "../images/Dialog-icon.svg";
import { ReactComponent as Unassigned } from "../images/Inbox.svg";
import { ReactComponent as Mentions } from "../images/mentions-icons.svg";
import { ReactComponent as Approvals } from "../images/approvals-icons.svg";

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
                <div className="sidebar__card__active">
                    <div className="sidebar__card_item">
                        <div className="icon__item">
                            <Dialog className="Dialog" />
                        </div>
                        <h5>
                            Your Conversations
                        </h5>
                    </div>
                </div>
                <div className="sidebar__card">
                    <div className="sidebar__card_item">
                        <div className="icon__item">
                            <Unassigned className="Unassigned" />
                        </div>
                        <h5>
                            Unassigned
                        </h5>
                    </div>
                </div>
                <div className="sidebar__card">
                    <div className="sidebar__card_item">
                        <div className="icon__item">
                            <Dialog className="Dialog" />
                        </div>
                        <h5>
                            All Conversation
                        </h5>
                    </div>
                </div>
                <div className="sidebar__card">
                    <div className="sidebar__card_item">
                        <div className="icon__item">
                            <Mentions className="Mentions" />
                        </div>
                        <h5>
                            Mentions
                        </h5>
                    </div>
                </div>
                <div className="sidebar__card">
                    <div className="sidebar__card_item">
                        <div className="icon__item">
                            <Approvals className="Approvals" />
                        </div>
                        <h5>
                            Approvals
                        </h5>
                    </div>
                </div>
            </div>:null}
                <div className="collabse__icon__item" onClick={()=>setShow(!show)}><Collabes className="Collabes" /></div>
        </>
    )
}
export default ChannelsSidebar;

