import React, { useState } from 'react'

function NoteOut(props) {
  const {notes, onRemove: handleRemove} = props;

  return (
    <>
      {notes.map(o =>
        <div className="note" key={o.id}>
          <p>{o.content}</p>
          <button className="cros" onClick={() => handleRemove(o.id)}>&#215;</button>
        </div>
      )}
    </>);
}

export default NoteOut;
