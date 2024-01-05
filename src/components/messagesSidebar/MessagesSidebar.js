import React, { useState } from 'react';
import './messagesSidebar.css';
import MessagePreview from './MessagePreview';

const MessagesSidebar = () => {
    const [activeTab, setActiveTab] = useState('mine');
    const [modalVisible, setModalVisible] = useState(false);

        const handleTabClick = (tab) => {
        setActiveTab(tab);
        };
    
        const openModal = () => {
        setModalVisible(true);
        };
    
        const closeModal = () => {
        setModalVisible(false);
        };

    return (
        <div className='messages__sidebar'>
            <div className='search__bar'>
                <img src={require("../../images/search_icon.png")} alt="search icon"/>
                <input placeholder='Search for Conversation' className='search__box' />
                <button className='fliter__modal' onClick={openModal}>
                    <img src={require("../../images/filter_icon.png")} alt="search icon"/>
                </button>
                <button className='fliter__modal'>
                    <img src={require("../../images/sort-top.png")} alt="search icon"/>
                </button>
            </div>

            <div className='sidebar__tabs'>
                <div className={`tab ${activeTab === 'mine' ? 'active' : ''}`} onClick={() => handleTabClick('mine')}>
                Mine <div className='badge'>5</div>
                </div>
                <div className={`tab ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => handleTabClick('pending')}>
                Pending
                </div>
                <div className={`tab ${activeTab === 'closed' ? 'active' : ''}`} onClick={() => handleTabClick('closed')}>
                Closed
                </div>
                <div className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabClick('all')}>
                All
                </div>
            </div>
            <div className='messages__container'>
                {/* Conditionally render messages based on the active tab */}
                {activeTab === 'mine' && (
                    <>
                    <MessagePreview
                    image="avatar2.jpg"
                    name="سارة عبد الرحمن"
                    username="@sara097abd"
                    incomingChannelIcon="x-icon.png"
                    messageContent="إلى جانب هذا، يجب أن تهتم أيضًا بجمع نماذج بمواصفات خاصة"
                    watching="avatar.jpg"
                    slaTime="1 min"
                    />
                    <MessagePreview
                    image="avatar3.png"
                    name="Ahmed bin Said"
                    username="+201027059842"
                    incomingChannelIcon="watsapp.png"
                    messageContent="So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having."
                    slaTime="5 min⚠️"
                    />
                    <MessagePreview
                    image="avatar4.jpg"
                    name="Taif Al-Amri"
                    username="taif_amri98"
                    incomingChannelIcon="facebook.png"
                    messageContent="hi there, i need some help"
                    watching="avatar.jpg"
                    slaTime="3 hours 16 min🔥"
                    />
                    </>
                )}
                {/* Add similar blocks for other tabs */}
                {activeTab === 'pending' && (
                // Messages for Unread Tab
                        <MessagePreview
                        image="av6.png"
                        name="Aliaa Abdel Rahman"
                        username="@moalia-abdle218"
                        incomingChannelIcon="facebook.png"
                        messageContent="Please try this link to find more solutions"
                        slaTime="1 min🔥"
                        />
                )}
                {activeTab === 'closed' && (
                // Messages for Assigned Tab
                    <>
                    <MessagePreview
                    image="av3.png"
                    name="Yasser Ali"
                    username="+201027059842"
                    incomingChannelIcon="instagram.png"
                    messageContent="Thank You for your support"
                    />
                    <MessagePreview
                    image="av4.png"
                    name="Fawzia Ibrahim"
                    username="fawzia_ibrahim@gmail.com"
                    incomingChannelIcon="mail.png"
                    messageContent="Thank You for your support"
                    />
                    <MessagePreview
                    image="av6.png"
                    name="Eman Mohammed"
                    username="@emmy218451da"
                    incomingChannelIcon="facebook.png"
                    messageContent="Thank You for your support"
                    />
                    <MessagePreview
                    image="av5.png"
                    name="Alaa Adel"
                    username="@darsh284"
                    incomingChannelIcon="x-icon.png"
                    messageContent="Thank You for your support"
                    />
                    </>
                    
                )}
                {activeTab === 'all' && (
                // Messages for Unassigned Tab
                <><MessagePreview
                image="avatar2.jpg"
                name="سارة عبد الرحمن"
                username="@sara097abd"
                incomingChannelIcon="x-icon.png"
                messageContent="إلى جانب هذا، يجب أن تهتم أيضًا بجمع نماذج بمواصفات خاصة"
                watching="avatar.jpg"
                slaTime="1 min"
                />
                <MessagePreview
                image="avatar3.png"
                name="Ahmed bin Said"
                username="+201027059842"
                incomingChannelIcon="watsapp.png"
                messageContent="So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having."
                slaTime="5 min⚠️"
                />
                <MessagePreview
                image="avatar4.jpg"
                name="Taif Al-Amri"
                username="taif_amri98"
                incomingChannelIcon="facebook.png"
                messageContent="hi there, i need some help"
                watching="avatar.jpg"
                slaTime="3 hours 16 min🔥"
                />
                    <MessagePreview
                        image="av6.png"
                        name="Aliaa Abdel Rahman"
                        username="@moalia-abdle218"
                        incomingChannelIcon="facebook.png"
                        messageContent="Please try this link to find more solutions"
                        slaTime="1 min🔥"
                    />
                    <MessagePreview
                    image="av3.png"
                    name="Yasser Ali"
                    username="+201027059842"
                    incomingChannelIcon="instagram.png"
                    messageContent="Thank You for your support"
                    />
                    <MessagePreview
                    image="av4.png"
                    name="Fawzia Ibrahim"
                    username="fawzia_ibrahim@gmail.com"
                    incomingChannelIcon="mail.png"
                    messageContent="Thank You for your support"
                    />
                    <MessagePreview
                    image="av6.png"
                    name="Eman Mohammed"
                    username="@emmy218451da"
                    incomingChannelIcon="facebook.png"
                    messageContent="Thank You for your support"
                    />
                    <MessagePreview
                    image="av5.png"
                    name="Alaa Adel"
                    username="@darsh284"
                    incomingChannelIcon="x-icon.png"
                    messageContent="Thank You for your support"
                    />
                    </>
                )}
            </div>
            {modalVisible && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <p>Filter</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}

            <div className='unclaimed'>
                <div className='title__unclimed'>
                    <p>Unassigned</p>
                    <div className='number__unclaimed'>14</div>
                    <div className='waiting__time'>
                        <div className='red__dot'></div>
                        <p>45 min</p>
                    </div>
                </div>
                <button className='secondary__button'>
                        Claim
                </button>
            </div>
        </div>
    );
};

export default MessagesSidebar;
