import React from 'react'
import './addNewProject.scss';
export default function Manager({manager}) {
  return (
    <>
        <div className="manager d-flex-row">
            <div>TM</div>
            <div>Manager name</div>
            <input type="checkbox"></input>
        </div>
    </>
  )
}
