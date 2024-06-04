import Artist from "./components/Artist";
import Nav from "./components/Nav";

import search from './assets/searchBox/search.png'
import filter from './assets/searchBox/filter.png'
import VerticalCarousel from "./components/Vertical";
import HorizontalCarousel from "./components/HorizontalCarousel";


function App() {
  return (
    <div className="absolute top-0 left-0 w-[1600px] h-[1800px] bg-[#F5F5F5] opacity-100" 
    style={{ backgroundPosition: '0% 0%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box'}}
    >
      <div className="">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className=" h-full">
           
           <Nav/>
            
          </div>





          <div className=" h-full">

          <div className=" absolute top-[40px] left-[490px]  opacity-100 "
      style={{ backgroundPosition: '0% 0%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box' }} >
      <div className=" w-[620px] h-[80px] " style={{
        backgroundColor:"#ffffff", borderRadius:'10px' }}>
         
              <div className="absolute top-[30px] left-[30px] ">

                  <img src={search} alt="searchIcon" className="w-[20px] h-[20px]"/>

              </div>

              <div className="absolute top-[33px] left-[56px]">
                <p className="text-[12px] text-[#9A9A9E] tracking-relaxed text-left"
                  style={{font: "normal normal medium 12px/14px Gilroy"}}
                >Search here...</p>
              </div>

              <div className="absolute top-[27px] left-[519px] ">

                  <img src={filter} alt="searchIcon" className="w-[20px] h-[20px]"/>

              </div>

              <div className="absolute top-[27px] left-[546px]">
                <p className="text-[14px] text-[#303030] tracking-relaxed text-left"
                  style={{font: "normal normal medium 14px/16px Gilroy"}}
                >Filters</p>
              </div>

              
          
     
      </div>
      <div className="absolute top-[110px] ">
              <VerticalCarousel />
              <div className="absolute top-[1110px] right-[580px] ">
              <HorizontalCarousel />
            </div>
            </div>

            
    </div>



          </div>









          <div className="h-full">
           <Artist/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;