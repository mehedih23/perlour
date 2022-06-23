import React from 'react'
import milestone1 from '../assets/milestone1.png'
import milestone2 from '../assets/milestone2.png'
import milestone3 from '../assets/milestone3.png'
import milestoneBackground from '../assets/milestone-background.png'
import styled from 'styled-components';
import { useScroll } from './useScroll';
import {motion} from 'framer-motion';
import {milestonesAminations} from '../animation';

const Milestones = () => {
    const [element, controls] = useScroll();
    const milestone = [
        {
          image: milestone1,
          data: "Client Served",
          amount: "877",
        },
        {
          image: milestone2,
          data: "of raw data",
          amount: "1.4M",
        },
        {
          image: milestone3,
          data: "Reviews",
          amount: "5.4K",
        },
    ]
  return (
    <Section ref={element}>     
        <div className="background">
            <img src={milestoneBackground} alt="background" />
        </div>
        <div className='milestones'>
            {
                milestone.map(({amount, data, image}) => {
                    return(
                        <motion.div className='milestone'
                        variants={milestonesAminations}
                        animate={controls} 
                        transition={{delay: 0.03, duration: 0.8, type: 'tween'}} 
                        >
                            <p>{amount}</p>
                            <span>{data}</span>
                            <img src={image} alt='milestone'/>
                        </motion.div>
                    )
                })
            }
        </div>
    </Section>
  )
}

const Section = styled.section`
height: 100vh;
padding: 0 10rem;
background-color: var(--primary-color);
position: relative;

.background{
    position: absolute;
    left: 0;
    bottom: -30%;
    
    img{
        z-index: 2;
        height: 43rem;
    }
}

.milestones{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    color: #fff;

    .milestone{
        z-index: 20;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        span{
            text-transform : uppercase;
            color: #ffffffc7;
        }
        p{
            font-size: 5rem;
            font-weight: bolder;
            line-height: 3rem;
        }
        img{
            height: 6rem;
        }
    }
}

`;

export default Milestones