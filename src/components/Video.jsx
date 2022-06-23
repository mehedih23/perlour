import React from 'react'
import styled from 'styled-components';
import { useScroll } from './useScroll';
import {motion} from 'framer-motion';
import { videoAminations } from '../animation';

const Video = () => {
  const [element, controls] = useScroll();
  return (
    <Section ref={element}>
        <div className="background"></div>
        <motion.div className="video"
        variants={videoAminations}
        animate={controls}
        transition={{delay: 0.03, duration: 0.8, type: 'tween'}} 
        >
            <iframe 
                width="960" 
                height="515" 
                src="https://www.youtube.com/embed/WVEsmwsN_Ug" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
        </motion.div>
    </Section>
  )
}


const Section = styled.section`
min-height: 100vh;
background-color: #662d91aa;
display: flex;
justify-content: center;
align-items: center;
position: relative;

.video{
    z-index: 10;
}


@media screen and (min-width: 280px) and (max-width: 1080px){
  height: 100%;
  padding: 6rem 2rem;
  .video{
    iframe{
      width: 80vw;
      height: 10rem;
    }
  }
}
`;

export default Video