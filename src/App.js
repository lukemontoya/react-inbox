import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'

class App extends Component {
  state = {
    messages:
    [{
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }]
  }
  starHandler = ( index ) => {
    let starMessages = [...this.state.messages]
    if(starMessages[index].starred){
      starMessages[index].starred = false
    } else {
      starMessages[index].starred = true
    } this.setState({ messages: starMessages })
  }

  checkHandler = ( index ) => {
    let checkMessages = [...this.state.messages]
    if(checkMessages[index].selected){
      checkMessages[index].selected = false
    } else {
      checkMessages[index].selected = true
    } this.setState({ messages: checkMessages })
  }

  checkAllHandler = (index) => {
    let checkAllMessages = [this.state.message]
    if(checkAllMessages[index].selected){
      checkAllMessages[index].selected = true
    } this.setState({ messages: checkAllMessages })
  }

  selectButtonFunc = (type) => {
    let messagesStateCopy = this.toolbarCopyCurrentState();
    if (type.includes('check')) {
      messagesStateCopy = this.state.messages.map(message => {
        message.selected =false;
        return message;
      })
    } else {
      messagesStateCopy = this.state.messages.map(message => {
        message.selected = true
        return message;
      })
    }
      this.setState({ messages: messagesStateCopy })
  }

  setUnreadFunc = () => {
    let newState = this.state.messages.map(msg => {
      if(msg.selected) msg.read = false
      return msg;
    })
    this.setState({ messages: newState })
  }

  setReadFunc = () => {
    let newState = this.state.messages.map(msg => {
      if(msg.selected) msg.read = true
      return msg;
    })
    this.setState({ messages: newState })
  }

  deleteMessages = () => {
    let newState = this.state.messages.filter(msg => !msg.selected)
    this.setState({ messages: newState })
  }

  addLabel = (label) => {
    let newState = this.state.messages.map(msg => {
      if(msg.selected && !msg.labels.includes(label)) msg.labels.push(label)
      return msg
    })
    this.setState({ messages: newState })
  }

  removeLabel = (label) => {
    let newState = this.state.messages.map(msg => {
      if(msg.selected) msg.labels = msg.labels.filter(l => l  !== label)
      return msg
    })
    this.setState({ messages: newState })
  }

  render() {
    let numOfSelectecMsgs = this.state.messages.filter(msg => msg.selected).length;
    return (
      <div className="App">

        <Toolbar
          numOfSelectecMsgs={ numOfSelectecMsgs }
          messages={ this.state.messages }
          selectButtonFunc={ this.selectButtonFunc }
          setUnreadFunc={ this.setUnreadFunc }
          setReadFunc={ this.setReadFunc }
          deleteMessages={ this.deleteMessages }
          addLabel={ this.addLabel }
          removeLabel={ this.removeLabel }
        />
        <MessageList
          messages={ this.state.messages }
          checkClick = {this.checkHandler}
          starClick = {this.starHandler}
        />
      </div>
    );
  }
}

export default App;
