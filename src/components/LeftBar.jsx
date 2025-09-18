function LeftBar() {

  function barMouseEntered() {
     const barNames = document.getElementById("bar-names")
     barNames.style.transform = "translateX(0px)"
     document.getElementById("r-part").style.opacity = '93%'
    }
    
    function barMouseLeaved() {
      const barNames = document.getElementById("bar-names")
      barNames.style.transform = "translateX(-130px)"
      document.getElementById("r-part").style.opacity = '100%'
    }

  return (
    <>
      <div className="h-screen w-[15vh] bg-[#000] fixed flex flex-col items-center z-10">
        <div className="logo pt-7">
          <img
            className="w-12 h-10"
            src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png"
            alt="logo"
          />
        </div>


        <div 
          
          onMouseEnter={barMouseEntered}
          onMouseLeave={barMouseLeaved}
        className="bar-container max-w-[15vh] flex flex-raw gap-3 transition-all ease-in-out duration- cursor-pointer"
        >

        <div
          className="bar-icons mt-16 w-auto p-2 text-gray-200 text-md flex flex-col gap-9 z-2 justify-start pl-[35%] bg-black"
        >
          <span className="flex justify-start items-center gap-5 cursor-pointer">
            <i class="fa-solid fa-house"></i> 
          </span>
          <span className="hover-color flex justify-start items-center gap-5 cursor-pointer">
            <i class="fa-solid fa-magnifying-glass"></i> 
          </span>
          <span className="flex justify-start items-center gap-5 cursor-pointer">
           <i class="fa-solid fa-tv"></i> 
          </span>
          <span className="flex justify-start items-center gap-5 cursor-pointer">
            <i class="fa-solid fa-martini-glass-citrus"></i> 
          </span>
          <span className="flex justify-start items-center gap-5 cursor-pointer">
            <i class="fa-solid fa-person-running"></i>
          </span>
          <span className="flex justify-start items-center gap-5 cursor-pointer">
            <i class="fa-solid fa-video"></i> 
          </span>
          <span className="flex justify-start items-center gap-5 cursor-pointer">
            <i class="fa-solid fa-list"></i> 
          </span>
          <span className="flex justify-start items-center gap-5 cursor-pointer">
            <i class="fa-solid fa-circle-user"></i>
          </span>
        </div>


        <div
        id="bar-names" 
        className="bar-names mt-16.5 w-[20vh] p-2.4  text-gray-300 flex flex-col gap-7 font-bold">
           <h2 className="text-white">Home</h2>
           <h2 className="hover-color">Search</h2>
           <h2>TV</h2>
           <h2>Movies</h2>
           <h2>Sports</h2>
           <h2>Sparks</h2>
           <h2>Categories</h2>
           <h2>My Space</h2>
        </div>

      </div>






      </div>
    </>
  );
}

export default LeftBar;
