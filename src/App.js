import {useState,useEffect, useRef} from 'react'
import{ motion } from 'framer-motion';
import './App.css'

import image1 from './images/mel1.jpeg';
import image2 from './images/nego1.jpeg'
import image3 from './images/mel2.jpeg'
import image4 from './images/nego2.jpeg'

const images = [image1,image2,image3,image4]

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className="App">
     <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
          <motion.div className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >

{images.map(image => (
              <motion.div className='item' key={image}>
                <img src={image} alt="Text alt" />

              </motion.div>
            ))}

       
        </motion.div>  
        </motion.div>     
      
  
    </div>
  );
}

export default App;
