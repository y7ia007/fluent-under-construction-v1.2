import React from "react";
import { useState } from "react";
import '../App.css';
import AccordionCard from "./AccordionCard";

function ChannelsSidebar() {

    const accordionData = [
        {
        title: 'Previous Tickets',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum`
        },
        {
        title: 'Share with',
        content: 
        <div className="user__card">
            <div className="user__card__avatar">
                <img src={require("../images/avatar-1.png")} alt="user avatar"/>
            </div>
            <div className="username__group">
                <div className="name__user">
                    <h3 className="sidebar__titles">Abdullah Musfer Al-Talidi</h3>
                </div>
                <div className="is__creator">
                    <h5 className="sidebar__sub__titles">Creator</h5>
                </div>
            </div>
        </div>
        },
    ]
    
    return(
        <div className="accordion">
            {accordionData.map(({ title, content }) => (
                <AccordionCard title={title} content={content} />
            ))}
        </div>
    )
}
export default ChannelsSidebar;

