import React from 'react';
import '../styles/Navigation.css';
import {NavLink} from 'react-router-dom'

const sectionList = [
    {name: "start", path:"/", exact: true},
    {name:"Autor", path:"/author"},
    {name:"Książki", path:"/books"},
    {name:"Filmy/Seriale", path:"/movies"},
    {name:"Gry", path:"/games"},
]


const Navigation = () => {
    const menu = sectionList.map(section => (
        <li key={section.name}><NavLink 
        to={section.path}
        exact={section.exact ? section.exact : false}>{section.name}</NavLink></li>
    ))
    return ( 
        <ul>{menu}</ul>
     );
}
 
export default Navigation;