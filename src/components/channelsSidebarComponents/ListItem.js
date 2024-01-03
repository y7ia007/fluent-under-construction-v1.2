import React from 'react';

const ListItem = ({
    icon,
    text,
    badge,
}) => {
    const isBadgeEmpty = !badge;
    return (
        <div className='list__item'>
            <div className='icon__container'>
                <div className='icon'>
                    {icon}
                </div>
                <div className='list__item__text'>
                    {text}
                </div>
            </div>
            {!isBadgeEmpty && (
                <div className='list__item__badge'>{badge}</div>
            )}
        </div>
    )
}

export default ListItem;