import { useEffect, useRef } from "react";
function App() {

  const ref = useRef()

    useEffect(() => {
      let images = ref.current.querySelectorAll('img'),
      total = images.length,
      current = 0
      
      setInterval(() => {
        
        images[current].classList.remove('opacity-0') 
        if (current === total - 1 ) {
            current = 0
        } else {
          current += 1
        }
        
      }, 1000 )
    }, [ref] )

  return (
   <div className="h-full w-full flex items-center justify-center " >
     <div className="w-[380px] h-[581.15px] relative bg-hero-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] ">
       <div className=" w-[250px] h-[538px] absolute top-[27px] right-[18px] ref={ref}">
             <img 
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"  alt="" />
              <img 
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"  alt="" />
              <img 
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"  alt="" />
              <img 
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity"
              src=" https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png "  alt="" />
        </div>
     </div>
  </div>
  );
}

export default App;
