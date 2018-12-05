import React from 'react'

const MenuBox = ({ id, toggleContent }) => {
   return (
      <div id="start" className="menuBox">
         <div onClick={() => toggleContent('intro')} id="intro" className="menuRow">
            <p>intro</p> <div className="checkBox" />
         </div>
         <div onClick={() => toggleContent('whatIdo')} id="whatIdo" className="menuRow">
            <p>what I do</p> <div className="checkBox" />
         </div>
         <div onClick={() => toggleContent('contacts')} id="contacts" className="menuRow">
            <p>contact & links</p> <div className="checkBox" />
         </div>
      </div>
   )
}

export default MenuBox
