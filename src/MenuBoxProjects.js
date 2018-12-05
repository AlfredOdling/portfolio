import React from 'react'
import getProjectContent from './ProjectsContent'
import 'hover.css'

const MenuBoxProjects = ({ toggleContent }) => {
   return (
      <div className="menuBox">
         <div onClick={() => toggleContent('koala')} id="koala" className="menuRow">
            <h3>koala</h3>
         </div>
         <div onClick={() => toggleContent('loco')} id="loco" className="menuRow">
            <h3>loco</h3>
         </div>
         <div onClick={() => toggleContent('hikikomori')} id="hikikomori" className="menuRow">
            <h3>hikikomori</h3>
         </div>
         <div onClick={() => toggleContent('freshCoast')} id="freshCoast" className="menuRow">
            <h3>fresh coast</h3>
         </div>
         <div onClick={() => toggleContent('digiexam')} id="digiexam" className="menuRow">
            <h3>digiexam</h3>
         </div>
         <div onClick={() => toggleContent('tremory')} id="tremory" className="menuRow">
            <h3>tremory</h3>
         </div>
         <div onClick={() => toggleContent('phocus')} id="phocus" className="menuRow">
            <h3>phocus</h3>
         </div>
         <div onClick={() => toggleContent('badrumsboden')} id="badrumsboden" className="menuRow">
            <h3>badrumsboden</h3>
         </div>
         <div onClick={() => toggleContent('cinnober')} id="cinnober" className="menuRow">
            <h3>cinnober</h3>
         </div>
      </div>
   )
}

export default MenuBoxProjects

export const Koala = () => getProjectContent('Koala').text

export const Loco = () => getProjectContent('Loco').text

export const Hikikomori = () => getProjectContent('Hikikomori').text

export const FreshCoast = () => getProjectContent('FreshCoast').text

export const DigiExam = () => getProjectContent('DigiExam').text

export const Tremory = () => getProjectContent('Tremory').text

export const Phocus = () => getProjectContent('Phocus').text

export const Badrumsboden = () => getProjectContent('Badrumsboden').text

export const Cinnober = () => getProjectContent('Cinnober').text
