
import Image from 'next/image'
import React from 'react'
import img1 from '@/public/Assets/entire-studios-brunette-animated-army-player-3.webp'
import img2 from '@/public/Assets/entire-studios-brunette-animated-army-player-2.webp'
import img3 from '@/public/Assets/entire-studios-brunette-animated-army-player-4.webp'
import img4 from '@/public/Assets/entire-studios-brunette-animated-army-player-1 (1).webp'
import img5 from '@/public/Assets/entire-studios-brunette-animated-army-player-6.webp'
import img6 from '@/public/Assets/entire-studios-brunette-animated-army-player-7.webp'
import img7 from '@/public/Assets/entire-studios-brunette-animated-army-player-5.webp'

const Brunette = () => {
return (
<div id='brunette' className=''>
<div className='max-w-[62rem] pt-4  medium:pt-14 pb-3 mx-auto'>

<div className='player-container'>

<div className='img-container-1 invisible sm:visible'>
<div className='player-1 '>
<div className='w-[100%] relative'>
<Image className='absolute top-0 left-0 w-[100%] h-[100%}' src={img1} alt='img'/>
</div>
</div>
</div>

<div className="img-container-2">
<div className='player-2'>
<div className='w-full relative'>
<Image className='absolute top-0 left-0 w-[100%] h-[100%}'  src={img7} alt='img'/>
</div>
</div>
</div>

<div className="img-container-3">
<div className='player-3'>
<div className='w-full relative'>
<Image className='absolute top-0 left-0 w-[100%] h-[100%}' src={img4} alt='img'/>
</div>   
</div>
</div>

<div className="img-container-4 ">
<div className='player-4'>
<div className=' relative w-[100%]'>
<Image className='absolute top-0 left-0 w-[100%] h-[100%}' src={img6} alt='img'/>
</div>
</div>
</div>

<div className="img-container-5">
<div className='player-5'>
<div className=' relative w-[100%]'>
<Image className='absolute top-0 left-0 w-[100%] h-[100%}' src={img2} alt='img'/>    
</div>    
</div>
</div>

<div className="img-container-6">
<div className='player-6'>
<div className=' relative w-[100%]'>
<Image className='absolute top-0 left-0 w-[100%] h-[100%}' src={img5} alt='img'/>    
</div>    
</div>
</div>

<div className="img-container-7 invisible sm:visible">
<div className='player-7'>
<div className=' relative w-[100%]'>
<Image className='absolute top-0 left-0 w-[100%] h-[100%}' src={img3} alt='img'/>    
</div>    
</div>
</div>

</div>   
    
    </div>  
    </div>
  )
}

export default Brunette