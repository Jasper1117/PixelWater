import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import cloud from "../Faucet/img/NewNewCloud-01.svg"
import "../cloud/cloud.css"
import superman from "../Faucet/img/superman2-01.svg"


const Cloud = () => {
  return (
    <div className='middleContainer'>
        <div className="cloudContainer">
      <Parallax scale={[0.6,0.9]} translateX={[10,-100]}>
            <img src={cloud} alt="" className='cloud'/>
        </Parallax>
      </div>

        <div className="cloudContainer2">
        <div className="supermanContainer">
          <Parallax scale={[0.6,1]} translateX={[-20,50]}>
              <img src={superman} alt="" className='superman'/>
          </Parallax>
        </div>
        <Parallax scale={[0.6,0.9]} translateX={[-20,50]}>
            <img src={cloud} alt="" className='cloud2'/>
        </Parallax>
      </div>
      <div className="cloudBg">
      </div>
    </div>
  )
}

export default Cloud