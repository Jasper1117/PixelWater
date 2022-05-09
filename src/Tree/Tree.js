import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import bowel from "../Faucet/img/NewNewBowel-01.svg"
import "../Tree/tree.css"

const Tree = () => {
  return (
    <div className="tree3Container">
    <Parallax >
          <img src={bowel} alt="" className='bowel'/>
      </Parallax>
  
    </div>
  )
}

export default Tree