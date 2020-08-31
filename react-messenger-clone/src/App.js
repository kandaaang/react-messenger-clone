import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message'
import db from './firebase.js';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState([]);

  useEffect( () => {
    setUsername(prompt('Please enter your name'))
  }, [])

  useEffect( () => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [])

  /*console.log(input);
  console.log(messages);
  */

  const sendMessage = (event) => {
    //logic to send message
    event.preventDefault();
    // setMessages([...messages, {username:username, text: input}]);
    // setInput('');
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src = "https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Hello {username}!</h1>

      <form className = "app__form">
        <FormControl className = "app__formControl">
          <Input className = "app__input" placeholder = 'Enter a message...' value = {input} onChange = { event => setInput(event.target.value) } />

          <IconButton className = "app__button"
            disabled = {!input} variant = "contained" color = "primary" type = 'submit' onClick = {sendMessage}
          >
            <SendIcon />
          </IconButton>

        </FormControl>

      </form>


      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key = {id} username = {username} message = {message} />
          ))
        }
      </FlipMove>


      {/* input field
          button
          messages
      */}

    </div>
  );
}

export default App;
