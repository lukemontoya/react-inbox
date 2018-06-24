import React from 'react'

const Message = ({ message, checkClick, starClick }) => {
  let labelList = message.labels.map(label => <span class="label label-warning">{label}</span>
)
  let readStatus = message.read ? "read" : "unread"
  let checkToggle = ''

  if (message.selected) {
    readStatus+=' selected'
    checkToggle= 'checked'
  }

  let starStatus = message.starred ? "fa-star" : "fa-star-o"

  return(
    <div className={"row message " +readStatus}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox"  onClick={checkClick} checked = {checkToggle}/>
          </div>
          <div className="col-xs-2">
            <i className={ "star fa " +starStatus } onClick={ starClick }></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        { labelList }
        <a href="#">
          { message.subject }
        </a>
      </div>
    </div>
  )

}

export default Message
