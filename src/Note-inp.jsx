import React, { useState, useRef } from 'react'
import NoteModel from './NoteModel';
import {nanoid} from 'nanoid';

function NoteInp(props) {
  const { onAdd: handleAdd } = props;
  const handleSubmit = evt => {
    evt.preventDefault();
    handleAdd({ "id": nanoid(), "content": evt.target.text.value });
    evt.target.text.value = "";
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="text" >New Note</label>
      <input className="inp" name="text" />
      <button className="but">&#10148;</button>
    </form>);
}

export default NoteInp;
