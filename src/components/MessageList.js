import React from 'react'
import Message from './Message'

const MessageList = ({ messages, checkClick, starClick }) => {
  let listOfMessages = messages.map((message, index) => <Message key={message.id}message={ message } checkClick = {() => checkClick(index) } starClick = {() => starClick(index)}/>)
  console.log(listOfMessages)
  return(
      <div>
          { listOfMessages }
      </div>


  )
}



export default MessageList
