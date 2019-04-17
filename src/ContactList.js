import React, { Component } from 'react';
import './ContactList.css';
import Contact from './Contact';

//para usar expressoes js, precisamos por {} 
function ContactList(props){
      return (<div>
      {props.contacts.map(el => <Contact key ={el.id} name = {el.name}/>)}
       </div>)
}

export default ContactList;