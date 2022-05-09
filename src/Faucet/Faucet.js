import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import faucet from "../Faucet/img/faucet-01.svg";
import water from "../Faucet/img/NewWater-01.svg"
import "../Faucet/faucet.css"
import tree from "../Faucet/img/newtree-01 2 copy.svg"
import bowel from "../Faucet/img/newbowel2-01.svg"


const Faucet = () => {
  return (
    <div className='faucetContainer'>
      <div className="bg">
        <Parallax translateX={[2, -8]}>
            <img src={tree} alt="" className='tree'/>
        </Parallax>
        </div>
        <div className="waterContainer">
        <Parallax translateY={[-2000, 2600]} scale={[0.8,0.12]} >
        <img src={water} alt="" className='water'/>
        </Parallax>
        </div>
        <Parallax>
        <img src={faucet} alt="" className='faucet'/>
        </Parallax>
        {/* <Parallax>
        <img src={bowel} alt="" className='bowel'/>
        </Parallax> */}


    </div>
  )
}

export default Faucet