import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message'

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState([]);

  useEffect( () => {
    setUsername(prompt('Please enter your name'))

  }, [])

  {/*console.log(input);
  console.log(messages);
  */}

  const sendMessage = (event) => {
    //logic to send message
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello {username}!</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value = {input} onChange = { event => setInput(event.target.value) } />
          <Button disabled = {!input} variant = "contained" color = "primary" type = 'submit' onClick = {sendMessage} > Send Message </Button>
        </FormControl>

      </form>



      {
        messages.map(message => (
          <Message text = {message} />
        ))
      }

      {/* input field
          button
          messages
      */}

    </div>
  );
}

export default App;
