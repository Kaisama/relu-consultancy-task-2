import Slider from 'react-slick';
import ali from '../assets/veriImages/ali.png'
import humphrey from '../assets/veriImages/humphrey.png'
import comment from '../assets/veriImages/comment.png'
import heart from '../assets/veriImages/heart.png'
import share from '../assets/veriImages/share.png'
import imad from '../assets/veriImages/imad.png'
import tobais from '../assets/veriImages/tobias.png'



const VerticalCarousel = () => {
    const settings = {
        dots: false,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      };
  return (
<div className=" h-[full] tracking-relaxed">
      <Slider {...settings}>
      <div className=" w-[620px] h-[600px] opacity-100 "
      style={{ backgroundPosition: '0% 0%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box' }} >
      <div className=" w-[620px] h-[600px] " style={{
        backgroundColor:"#ffffff", borderRadius:'10px' }}>
            
        <div className='absolute top-[30px] left-[30px]'>
                <img src={ali} alt="profilePic" className='w-[48px] h-[48px] rounded-lg' />
        </div>
        <div className='absolute top-[32px] left-[92px] text-left tracking-relaxed'
        >
            <p className='w-[111px] h-[24px] text-[20px] text-[#101010]'
                        style={{font: "normal normal 600 20px/24px Gilroy"}}
            >Lara Leones</p>
        <p className=' w-[77px] h-[16px] text-[16px] text-[#8D8D8D] text-left tracking-relaxed'>
                @thewallart</p>
        </div>
        <div className="flex flex-col items-center space-y-1 absolute  top-[52px] right-[40px]">
  <div className=" w-[4px] h-[4px] rounded-full bg-black"></div>
  <div className="w-[4px] h-[4px] rounded-full bg-black"></div>
  <div className="w-[4px] h-[4px] rounded-full bg-black"></div>
</div>

<div className='absolute top-[108px] left-[30px] right-[34px]'>
    <p className='text-[14px] text-left text-[#101010]  h-[16px]' 
    style={{font: "normal normal medium 14px/21px Gilroy"}}
    >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className='w-[70px] h-[16px] text-[#FF5E8A]'>Read More</span> </p>
</div>

<div className='absolute top-[175px] left-[30px]'>
    <img src={humphrey} alt="humphrey"  />
</div>

<div className='flex flex-row absolute top-[539px] left-[30px] '>
       
        
        <div className="flex items-center">
  <img src={heart} alt="Heart icon" className="w-[24px] h-[22px]" />
  <p className="ml-2 w-[35px] h-[24px] text-[20px] text-left leading-[22px]"
  style={{font: 'normal normal 600 20px/24px Gilroy'}}
  >9.8k</p>
</div>

<div className="flex items-center">
  <img src={comment} alt="comment icon" className="absolute left-[104px] w-[22px] h-[22px]" />
  <p className="ml-2 w-[38px] h-[24px] text-[20px] text-left leading-[22px] absolute left-[128px]"
    style={{font: 'normal normal 600 20px/24px Gilroy'}}
  >8.6k</p>
</div>
<div className="flex items-center">
  <img src={share} alt="share icon" className="absolute left-[218px] w-[22px] h-[22px]" />
  <p className="ml-2 w-[38px] h-[24px] text-[20px] text-left leading-[22px] absolute left-[240px]"
    style={{font: 'normal normal 600 20px/24px Gilroy'}}
  >7.2k</p>
</div>
       
    
</div>
      </div>
    </div>
        <div className=" w-[620px] h-[600px] opacity-100 absolute top-[620px]">

        <div className=" w-[620px] h-[600px] " style={{
        backgroundColor:"#ffffff", borderRadius:'10px' }}>

        <div className='absolute top-[30px] left-[30px]'>
                <img src={imad} alt="profilePic" className='w-[48px] h-[48px] rounded-lg' />
        </div>

        <div className='absolute top-[32px] left-[92px] text-left tracking-relaxed'
        >
            <p className='w-[111px] h-[24px] text-[20px] text-[#101010]'
                        style={{font: "normal normal 600 20px/24px Gilroy"}}
            >Thomas J.</p>
        <p className=' w-[77px] h-[16px] text-[16px] text-[#8D8D8D] text-left tracking-relaxed'>
                @thecustomcreater</p>
        </div>
        <div className="flex flex-col items-center space-y-1 absolute  top-[52px] right-[40px]">
  <div className=" w-[4px] h-[4px] rounded-full bg-black"></div>
  <div className="w-[4px] h-[4px] rounded-full bg-black"></div>
  <div className="w-[4px] h-[4px] rounded-full bg-black"></div>
</div>

<div className='absolute top-[108px] left-[30px] right-[34px]'>
    <p className='text-[14px] text-left text-[#101010]  h-[16px]' 
    style={{font: "normal normal medium 14px/21px Gilroy"}}
    >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className='w-[70px] h-[16px] text-[#FF5E8A]'>Read More</span> </p>
</div>

<div className='absolute top-[175px] left-[30px]'>
    <img src={tobais} alt="humphrey"  />
</div>

<div className='flex flex-row absolute top-[539px] left-[30px] '>
       
        
        <div className="flex items-center">
  <img src={heart} alt="Heart icon" className="w-[24px] h-[22px]" />
  <p className="ml-2 w-[35px] h-[24px] text-[20px] text-left leading-[22px]"
  style={{font: 'normal normal 600 20px/24px Gilroy'}}
  >9.8k</p>
</div>

<div className="flex items-center">
  <img src={comment} alt="comment icon" className="absolute left-[104px] w-[22px] h-[22px]" />
  <p className="ml-2 w-[38px] h-[24px] text-[20px] text-left leading-[22px] absolute left-[128px]"
    style={{font: 'normal normal 600 20px/24px Gilroy'}}
  >8.6k</p>
</div>
<div className="flex items-center">
  <img src={share} alt="share icon" className="absolute left-[218px] w-[22px] h-[22px]" />
  <p className="ml-2 w-[38px] h-[24px] text-[20px] text-left leading-[22px] absolute left-[240px]"
    style={{font: 'normal normal 600 20px/24px Gilroy'}}
  >7.2k</p>
</div>
       
    
</div>

        </div>

            
        </div>
      </Slider>
    </div>  )
}

export default VerticalCarousel