

function TopBody(){


    return (
        <>
           <div className="h-[45vh] w-full p-3 bg-[#000] flex flex-row gap-5 pl-[18vh]">
              
              <div className="w-1/2 ">
                <img className="w-full h-full rounded-md" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2025-09-09/SinnersDTD_BB_W-5df9151f-6a13-4eb9-8a87-ae34b8288a44.jpg" alt="" />
              </div>

              <div className=" flex flex-col justify-between">

                <div className="flex flex-col gap-10">

                 <div className="h-[10%] text-white flex gap-2">
                    <img className="w-12 h-12 rounded" src="https://brand-img1.hotstarext.com/image/upload/v1739279601/YR/Growth_120x120_Square_Logo.png" alt="" />
                    <div>
                    <h2 className="font-bold">Sinners</h2>
                    <span className="text-gray-400 text-sm">Out on September 10</span>
                    </div>
                 </div>

                 <div className="text-white w-3/4">
                   <span>Twin brothers return home to face dark secrets in this mystery horror thriller</span>
                 </div>

                </div>
                


                <div className="h-[20%]">
                    <button className="text-white bg-[#403a3aad] px-7 py-2 rounded font-bold cursor-pointer">
                        Trailer
                    </button>
                </div>

                 
              </div>

           </div>
        </>
    )

}


export default TopBody

