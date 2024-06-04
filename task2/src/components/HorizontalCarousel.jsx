import eyes from '../assets/horiImages/eyes.png'
import hand from '../assets/horiImages/hand.png'
import star from '../assets/horiImages/star.svg'
import sea from '../assets/horiImages/sea.png'
import city from '../assets/horiImages/city.png'

const HorizontalCarousel = () => {
  return (
    <div className='tracking-relaxed opacity-100'>

        <div className='w-[252px] h-[180px] flex '>

        <div className='flex flex-row'>
            <img src={city} className='w-[28px] h-[180px] absolute rounded-lg right-[10px] top-[140px]' />
            <div className='absolute top-[326px] left-[210px] ' 
            >
                <div>
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] ' />
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[15px]' />
                    </div>
                <div className='flex w-[78px] h-[29px]'>
                    <p className='text-[#f5f5f5]'>$1</p>
                    
                </div>
            </div>
            </div>

            <div className='flex flex-row'>
            <img src={eyes} className='w-[252px] h-[180px] absolute rounded-lg top-[140px] left-[260px]' />
            <div className='absolute top-[326px] left-[260px] ' 
            >
                <p className='w-[217px] h-[15px] text-[13px]'
                            style={{font:' normal normal 600 13px/26px Gilroy'}}

                >Modern Wall Decor Framed Painting</p>
                <div className='flex w-[78px] h-[29px]'>
                    <p className='text-left mt-4' style={{font:'normal normal 600 24px/25px Barlow'}}>$199.99</p>
                    <div>
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[170px]' />
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[185px]' />
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[200px]' />
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[215px]' />
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[230px]' />
                    </div>
                </div>
            </div>
            </div>
            

            <div className='flex flex-row'>
            <img src={hand} className='w-[252px] h-[180px] absolute rounded-lg top-[140px] left-[528px]' />
            <div className='absolute top-[326px] left-[528px] ' 
            >
                <p className='w-[217px] h-[15px] text-[13px]'
                            style={{font:' normal normal 600 13px/26px Gilroy'}}

                >Modern Wall Decor Framed Painting</p>
                <div className='flex w-[78px] h-[29px]'>
                    <p className='text-left mt-4' style={{font:'normal normal 600 24px/25px Barlow'}}>$199.99</p>
                    <div>
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[170px]' />
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[185px]' />
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[200px]' />
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[215px]' />
                    <img src={star} className='w-[14px] h-[14px] absolute top-[36px] left-[230px]' />
                    </div>
                </div>
            </div>
            </div>
   


            <div className='flex flex-row'>
            <img src={sea} className='w-[28px] h-[180px] absolute rounded-lg top-[140px] left-[796px]' />
            <div className='absolute top-[326px] left-[800px] ' 
            >
                <p className='w-[217px] h-[15px] text-[13px]'
                            style={{font:' normal normal 600 13px/26px Gilroy'}}

                >Mod</p>
                <div className='flex w-[78px] h-[29px]'>
                    <p className='text-left mt-4' style={{font:'normal normal 600 24px/25px Barlow'}}>$1</p>
                    
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default HorizontalCarousel