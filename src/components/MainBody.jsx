
function MainBody(){


    return (
        <>
           <div className="h-[93vh] p-10 px-20 w-full bg-[#000000f6] relative 
           bg-[url(https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/134/1756206160134-i)]
           bg-cover">
               
                <div className="text-[#ffffffc4] w-[50%] absolute bottom-5 px-10 flex flex-col gap-8">
                    <div className="w-[70%]">
                    <img className="w-full" src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/6649/1756206146649-t" alt="" />
                    </div>
                     
                     <div className="font-bold">
                        <span className="text-white">2025 •</span>
                        <span> U/A 16+ • </span>
                        <span className="text-white"> Malayalam</span>
                     </div>

                     <p className="w-[80%] ">
                        Mohanlal returns with a new season of the greatest reality show! In this game of brains, betrayal and alliances, who will avoid trouble and emerge victorious?
                     </p>

                     <span className="font-bold text-white">Reality &nbsp;|&nbsp; Competition &nbsp;|&nbsp; Friendship &nbsp;|&nbsp; Controversial</span>


                     <div className="buttons flex gap-5">
                        <button className="gradient-btn py-3 px-28 rounded-md text-white cursor-pointer hover:scale-103 duration-300"> <i class="fa-solid fa-play"></i>  Watch Now</button> 
                        <button className="bg-[#6f6b6bd5] py-3 px-4 cursor-pointer rounded-md"><i class="fa-solid fa-plus"></i></button>
                     </div>

                </div>
           </div>
        </>
    )

}


export default MainBody


