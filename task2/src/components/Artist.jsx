import ekaterina from '../assets/artistsImage/ekaterina.png';
import thomas from '../assets/artistsImage/thomas.png';
import genaro from '../assets/artistsImage/genaro.png';
import chris from '../assets/artistsImage/chris.png';
import emilie from '../assets/artistsImage/emilie.png';
import pixabay from '../assets/artistsImage/pixabay.png';
import jessica from '../assets/artistsImage/jessica.png';
import steve from '../assets/artistsImage/steve.png';
import fiona from '../assets/artistsImage/fiona.png';
const Artist = () => {
  return (
    <>
     <div className=''>
              <div className="absolute top-[40px] left-[1140px] ">
                  <div className="w-[260px] h-[80px] bg-[#88C2BB] opacity-100"
                      style={{ backgroundPosition: '0% 0%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box',borderRadius:'10px' }}
                  >
                    <div className="text-[#FFFFFF] tracking-relaxed text-center absolute top-[31px] right-[270px] left-[70px] w-[120px] h-[19px]"
                        style={{font: "normal normal 600 16px/19px Gilroy"}}
                    >Become a Seller</div>

                  </div>
              </div>

              <div className="flex text-left absolute top-[153px] left-[1140px] tracking-relaxed w-[110px] h-[19px]"
                  style={{font: "normal normal 600 16px/19px Gilroy"}}
              >
                <p className="text-[#101010]">Artists</p>
                <p className="text-[#8D8D8D] absolute left-[74px]">Photographers</p>
              </div>

              <div>
                
              <div className="absolute top-[195px] left-[1140px] ">
                  <div className="w-[244px] h-[126px]  opacity-100  bg-cover bg-no-repeat "
                      style={{backgroundImage:`url(${ekaterina})`, backgroundPosition: '0% 0%', backgroundOrigin: 'padding-box',borderRadius:'10px' }}
                  >
                   <div className="absolute top-[64px] left-[14px] ">
                     <img src={thomas} className="w-[48px] h-[48px] rounded-lg" />
                  </div>
                  <p className="w-[12px] h-[12px] border-2 border-white bg-[#0EC297] rounded-full relative top-[62px] left-[53px]"></p>  
                  <div className="absolute top-[68px] right-[50px] tracking-relaxed text-[#FFFFFF] text-left "
                  >
                    <p className="w-[118px] h-[19px] text-[16px] "
                       style={{font:"normal normal 600 16px/19px Gilroy"}}
                    >Thomas Edward</p>
                    <p className="w-[93px] h-[14px] absolute top-[24px] " 
                          style={{font:"normal normal medium 12px/14px Gilroy",fontSize:'12px'}}
                    >@thewildwithyou</p>
                  </div>
                  </div>
              </div>

            

              <div className="absolute top-[351px] left-[1140px] ">
                  <div className="w-[244px] h-[126px]  opacity-100  bg-cover bg-no-repeat "
                      style={{backgroundImage:`url(${genaro})`, backgroundPosition: '0% 0%', backgroundOrigin: 'padding-box',borderRadius:'10px' }}
                  >
                   <div className="absolute top-[64px] left-[14px] ">
                     <img src={chris} className="w-[48px] h-[48px] rounded-lg" />
                  </div>
                  <p className="w-[12px] h-[12px] border-2 border-white bg-[#0EC297] rounded-full relative top-[62px] left-[53px]"></p>  
                  <div className="absolute top-[68px] right-[50px] tracking-relaxed text-[#FFFFFF] text-left "
                  >
                    <p className="w-[118px] h-[19px] text-[16px] "
                       style={{font:"normal normal 600 16px/19px Gilroy"}}
                    >Chris Doe</p>
                    <p className="w-[93px] h-[14px] absolute top-[24px] " 
                          style={{font:"normal normal medium 12px/14px Gilroy",fontSize:'12px'}}
                    >@thewildwithyou</p>
                  </div>
                  </div>
              </div>


              <div className="absolute top-[507px] left-[1140px] ">
                  <div className="w-[244px] h-[126px]  opacity-100  bg-cover bg-no-repeat "
                      style={{backgroundImage:`url(${pixabay})`, backgroundPosition: '0% 0%', backgroundOrigin: 'padding-box',borderRadius:'10px' }}
                  >
                   <div className="absolute top-[64px] left-[14px] ">
                     <img src={emilie} className="w-[48px] h-[48px] rounded-lg" />
                  </div>
                  <p className="w-[12px] h-[12px] border-2 border-white bg-[#0EC297] rounded-full relative top-[62px] left-[53px]"></p>  
                  <div className="absolute top-[68px] right-[50px] tracking-relaxed text-[#FFFFFF] text-left "
                  >
                    <p className="w-[118px] h-[19px] text-[16px] "
                       style={{font:"normal normal 600 16px/19px Gilroy"}}
                    >Emilie Jones</p>
                    <p className="w-[93px] h-[14px] absolute top-[24px] " 
                          style={{font:"normal normal medium 12px/14px Gilroy",fontSize:'12px'}}
                    >@thewildwithyou</p>
                  </div>
                  </div>
              </div>

              <div className="absolute top-[663px] left-[1140px] ">
                  <div className="w-[244px] h-[126px]  opacity-100  bg-cover bg-no-repeat "
                      style={{backgroundImage:`url(${steve})`, backgroundPosition: '0% 0%', backgroundOrigin: 'padding-box',borderRadius:'10px' }}
                  >
                   <div className="absolute top-[64px] left-[14px] ">
                     <img src={jessica} className="w-[48px] h-[48px] rounded-lg" />
                  </div>
                  <p className="w-[12px] h-[12px] border-2 border-white bg-[#0EC297] rounded-full relative top-[62px] left-[53px]"></p>  
                  <div className="absolute top-[68px] right-[50px] tracking-relaxed text-[#FFFFFF] text-left "
                  >
                    <p className="w-[118px] h-[19px] text-[16px] "
                       style={{font:"normal normal 600 16px/19px Gilroy"}}
                    >Jessica Williams</p>
                    <p className="w-[93px] h-[14px] absolute top-[24px] " 
                          style={{font:"normal normal medium 12px/14px Gilroy",fontSize:'12px'}}
                    >@thewildwithyou</p>
                  </div>
                  </div>
              </div>

              <div className="absolute top-[819px] left-[1140px] w-[244px] h-[126px] ">
                
                    <img src={fiona}   />
                  <div className="absolute top-[54px] left-[18px] w-[224px] tracking-relaxed text-[10px] h-[12px] text-[#8D8D8D] opacity-100 "
                  style={{font:" normal normal 600 10px/12px Gilroy"}}
                  >
                    <p><span>Privacy </span><span className="ml-[40px]"> Terms of Service </span><span className="ml-[40px]"> Notice </span></p>
                  </div>
              </div>
              

              </div>
            </div>
    </>
  )
}

export default Artist