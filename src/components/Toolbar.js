import React from 'react'

const Toolbar = ( props ) => {
  let selectButtonClass = "fa-sqaure-o"

  return(
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">329</span>
          unread messages
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
        >
          Mark As Read
        </button>

        <button
          className="btn btn-default"
          onClick={() => props.setUnreadFunc() }
        >
          Mark As Unread
        </button>

        <select className="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select">
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
