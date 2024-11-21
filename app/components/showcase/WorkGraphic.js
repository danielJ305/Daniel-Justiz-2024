'use client'

import React from 'react';
import Iframe from 'react-iframe';


export function WorkGraphic() {
    // const portContainerRef = useRef(null)
    // const portfolioContainer2 = document.getElementById('portfolio_2');
    // const isFullSceen = document.fullscreenElement;
 
    // const fullScreenGraphicToggler = () => {
    //     const portfolioContainer = portContainerRef.current;

    //     if (isFullSceen) {
    //         // Exit fullscreen and set scrolling to "no"
    //         document.exitFullscreen();
    //         // portfolioContainer.setAttribute("scrolling", "no");
    //     } else {
    //         // Enter fullscreen and set scrolling to "yes"
    //         portfolioContainer.requestFullscreen();
    //         // portfolioContainer.setAttribute("scrolling", "yes");
    //     }
    // };


    window.addEventListener("load", doStartup, false);

    function doStartup(event) {
      document.fullscreenElement = document.fullscreenElement || document.mozFullscreenElement
                || document.msFullscreenElement || document.webkitFullscreenDocument;
      document.exitFullscreen = document.exitFullscreen || document.mozExitFullscreen
                || document.msExitFullscreen || document.webkitExitFullscreen;
      
      document.addEventListener("keypress", handleKeypress, false);
    }
    
    function handleKeypress(event) {
      if (event.keyCode === 27) {
        toggleFullscreen();
      }
    }
    
    
    function toggleFullscreen() {
      let elem = document.getElementById('portfolio_2');
    
      elem.requestFullscreen = elem.requestFullscreen || elem.mozRequestFullscreen
              || elem.msRequestFullscreen || elem.webkitRequestFullscreen;
    
      if (!document.fullscreenElement) {
        elem.requestFullscreen().then({}).catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
        
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }


    return (
        <div className='lg:h-[42rem] h-[42rem]'>
             <Iframe id='portfolio_2'
                    // ref={portContainerRef}
                    url="https://danieljustiz.myportfolio.com/" 
                    title="Adobe Behance Graphic Design Portfolio" 
                    allowFullScreen="{true}" 
                    height="100%" 
                    width="100%"   
                    ></Iframe>
                    <button onClick={toggleFullscreen} className='ease-out duration-300 bg-[#1E3E62] hover:bg-[#0B192C] cursor-pointer px-8 py-2 rounded-full text-lg mt-6'>View in Full Screen</button>
        </div>
     )
}

export default WorkGraphic;