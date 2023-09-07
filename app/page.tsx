"use client"

import Navbar from '@/components/Navbar/Navbar'
import HomePage from '@/components/HomePage/Home'
import {  useState } from 'react';
import Preloader from '@/components/General/Preloader'
//import { useDispatch } from 'react-redux';
//import { hideLoading } from '@/redux/slices/cartSlice';


export default function Home() {
//const dispatch = useDispatch()
//useEffect(() => {
//  dispatch(hideLoading())
//}, [dispatch])  
  
const [contentVisible, setContentVisible] = useState(false);


const handleShowContent = () => {
  setContentVisible(true);
};
  
  return (
  
    <div className=" h-[100%] font-space">
      {contentVisible ? (
        <div className="main-content font-space">
         <Navbar/>
          <HomePage/>
          
        </div>
      ) : (
        <Preloader onShowContent={handleShowContent} />
      )}
    </div>


  )
}
