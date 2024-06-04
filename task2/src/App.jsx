import Nav from "./components/Nav";



function App() {
  return (
    <div className="absolute top-0 left-0 w-[1600px] h-[1800px] bg-gray-100 opacity-100" 
    style={{ backgroundPosition: '0% 0%', backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box' ,overflow:"hidden"}}
    >
      <div className="">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className=" h-full">
           
           <Nav/>
            
          </div>
          <div className="border-2 border-red-500 h-full">Grid 2</div>
          <div className="border-2 border-red-500 h-full">Grid 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;