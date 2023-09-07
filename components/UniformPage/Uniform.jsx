
import React from 'react'
import Tar from './Tar/Tar.jsx'
import TarClothes from './Tar/TarClothes.jsx'
import Brunette from './Brunette/Brunette.jsx'
import BrunetteClothes from './Brunette/BrunetteClothes.jsx'
import Cork from './Cork/Cork.jsx'
import CorkClothes from './Cork/CorkClothes.jsx'
import Ink from './Ink/Ink.jsx'
import InkClothes from './Ink/InkClothes.jsx'
import Rhino from './Rhino/Rhino.jsx'
import RhinoClothes from './Rhino/RhinoClothes.jsx'
import Header from './Header.jsx'
import Refine from '../General/Refine.jsx'

const Uniform = () => {
  return (
    <div className='font-space'>
    <Header/>
    <Refine/>
    <Tar/>
    <TarClothes/>
    <Brunette/>
    <BrunetteClothes/>
    <Cork/>
    <CorkClothes/>
    <Ink/>
    <InkClothes/>
    <Rhino/>
    <RhinoClothes/>
    </div>
  )
}

export default Uniform