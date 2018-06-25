import React from 'react';

const Toolbar = ( props ) => {
  let selectButtonClass = "fa-sqaure-o";

  let messagesSelected = props.messages.filter(messages => messages.selected);

  if (messagesSelected.length === props.messages.length) {
    selectButtonClass = "fa-check-sqaure-o";
  } else if (messagesSelected[0]) {
    selectButtonClass = "fa-minus-square-o";
  }

  let countedUnread = props.messages.filter(msg => !msg.read).length;

  let countedSelected = props.messages.reduce((acc, val) => acc + !!val.selected, 0)

  return(
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{ countedUnread }</span>
          {countedUnread > 1 || countedUnread < 1 ? 'unread messages' : 'unread message'}
        </p>

        <button
          className="btn btn-default"
          onClick={() => props.selectButtonFunc(selectButtonClass)}
        >
          <i className={`fa ${selectButtonClass}`} ></i>
        </button>

        <button
          className="btn btn-default"
          onClick={() => props.setReadFunc() }
          disabled={ !countedSelected }
        >
          Mark As Read
        </button>

        <button
          className="btn btn-default"
          onClick={() => props.setUnreadFunc() }
          disabled={ !countedSelected }
        >
          Mark As Unread
        </button>

        <select
          className="form-control label-select"
          onChange={(e) => props.addLabel(e.target.value)}
          disabled={ !countedSelected }
        >
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select
          className="form-control label-select"
          onChange={(e) => props.removeLabel(e.target.value)}
          disabled={ !countedSelected }
        >
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button
          className="btn btn-default"
          onClick={() => props.deleteMessages() }
        >
          <i className="fa fa-trash-o"
          ></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar
