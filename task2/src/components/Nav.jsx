import homeImage from '../assets/navImages/home.svg'
import notificationImage from '../assets/navImages/home.svg';
import messageImage from '../assets/navImages/home.svg';
import walletImage from '../assets/navImages/home.svg';
import heartImage from '../assets/navImages/home.svg';
import profileImage from '../assets/navImages/home.svg';
import favImage from '../assets/navImages/home.svg';
import settingImage from '../assets/navImages/home.svg';
import logoutImage from '../assets/navImages/home.svg';
const Nav = () => {
  return (
   <>
    <div className=" absolute top-[40px] left-[200px]  opacity-100 "
      style={{ backgroundPosition: '0% 0%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box' }} >
      <div className=" w-[260px] h-[80px] " style={{
        backgroundColor:"#ffffff", borderRadius:'10px' }}>
        <div className="absolute top-[27px] left-[35px] bottom-[19px] right-[136px]  text-[32px]"
          style={{
            font: "normal normal normal 32px Mongolian Baiti",
          }}
        >
          LOGO
        </div>
      </div>
    </div>
    <div className=" absolute top-[150px] left-[200px]  opacity-100 "
      style={{ backgroundPosition: '0% 0%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box' }} >
      <div className=" w-[260px] h-[707px] " style={{
        backgroundColor:"#ffffff", borderRadius:'10px' }}>

        <div className="absolute top-[38px] left-[32px] right-[147px] w-[81px] h-[24px] flex items-center">
          <img src={homeImage} alt="home" className='w-[16px] h-[16.8px]' />
          <p className='  absolute left-[38px] tracking-normal text-[#101010] opacity-100'
              style={{font:" normal normal 600 19px Gilroy"}}
          >Home</p>
        </div>

        <div className="absolute top-[97.2px] left-[32px] right-[147px] w-[81px] h-[24px] flex items-center">
          <img src={notificationImage} alt="home" className='w-[16px] h-[16.8px]' />
          <p className='  absolute left-[38px] tracking-normal text-[#8D8D8D] opacity-100'
              style={{font:" normal normal 600 19px Gilroy"}}
          >Notifications</p>
        </div>

        <div className="absolute top-[152px] left-[32px] right-[147px] w-[81px] h-[24px] flex items-center">
          <img src={heartImage} alt="home" className='w-[16px] h-[16.8px]' />
          <p className='  absolute left-[38px] tracking-normal text-[#8D8D8D] opacity-100'
              style={{font:" normal normal 600 19px Gilroy"}}
          >Shop</p>
        </div>


        <div className="absolute top-[208px] left-[32px] right-[147px] w-[81px] h-[24px] flex items-center">
          <img src={messageImage} alt="home" className='w-[16px] h-[16.8px]' />
          <p className='  absolute left-[38px] tracking-normal text-[#8D8D8D] opacity-100'
              style={{font:" normal normal 600 19px Gilroy"}}
          >Conversation</p>
        </div>

        <div className="absolute top-[264px] left-[32px] right-[147px] w-[81px] h-[24px] flex items-center">
          <img src={walletImage} alt="home" className='w-[16px] h-[16.8px]' />
          <p className='  absolute left-[38px] tracking-normal text-[#8D8D8D] opacity-100'
              style={{font:" normal normal 600 19px Gilroy"}}
          >Wallet</p>
        </div>


        <div className="absolute top-[320px] left-[32px] right-[147px] w-[81px] h-[24px] flex items-center">
          <img src={favImage} alt="home" className='w-[16px] h-[16.8px]' />
          <p className='  absolute left-[38px] tracking-normal text-[#8D8D8D] opacity-100'
              style={{font:" normal normal 600 19px Gilroy"}}
          >Subscription</p>
        </div>


        <div className="absolute top-[376px] left-[32px] right-[147px] w-[191px] h-[24px] flex items-center">
          <img src={profileImage} alt="home" className='w-[16px] h-[16.8px]' />
          <p className='  absolute left-[38px] tracking-normal text-[#8D8D8D] opacity-100'
              style={{font:" normal normal 600 19px Gilroy"}}
          >My Profile</p>
        </div>


        <div className="absolute top-[432px] left-[32px] right-[147px] w-[81px] h-[24px] flex items-center">
          <img src={settingImage} alt="home" className='w-[16px] h-[16.8px]' />
          <p className='  absolute left-[38px] tracking-normal text-[#8D8D8D] opacity-100'
              style={{font:" normal normal 600 19px Gilroy"}}
          >Settings</p>
        </div>


        <div className="absolute top-[645px] left-[32px] right-[147px] w-[190px] h-[24px] flex items-center">
          <img src={logoutImage} alt="home" className='w-[16px] h-[16.8px] text-[#88C2BB]' />
          <p className='  absolute left-[38px] tracking-normal text-[#88C2BB] opacity-100'
              style={{font:" normal normal 600 19px Gilroy"}}
          >Log out</p>
        </div>

       


      </div>
      <div className='flex text-[#8D8D8D] tracking-normal text-[10px] mt-[12px] opacity-100' 
        style={{font: "normal normal 600 10px/12px Gilroy",
          textAlign:"right"
        }}
      >
        <p>2022©logo name</p>
        <p className='absolute left-[142px]'>Developed by ivan Infotech</p>
      </div>
    </div>
    
  </>
  )
}

export default Nav