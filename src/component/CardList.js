import React from 'react';

import Card from './Card';

const CardList =({robots})=>{
    const CardComponent = robots.map((users, i)=>{
        return(<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)
    });

    return(
    <>
    {CardComponent}
    </>
    );
};

export default CardList;