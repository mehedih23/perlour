import React from 'react'
import home from '../assets/home.png'
import play from '../assets/play.png'
import styled from 'styled-components'
import Title from './Title'
import { useScroll } from './useScroll';
import {motion} from 'framer-motion';
import {blogAminations} from '../animation'

const Blog = () => {
    const [element, controls] = useScroll();
    const blogsData = [
        {
          title:"PARLOUR JOURNAL",
          type: "SPA",
          description: "Our blog is intended to help answer your hair related questions and provide information about healthy hair choices and products.",
        },
        {
          title:"REFELXOLOGY SKY",
          type: "Relax",
          description: "Reflexologists believe that these reflex points, pressing them creates real benefits for the person's health. If you have any questions, please email",
        },
        {
          title:"MEDITATION SUN",
          type: "Yoga",
          description: "Keep your body and mind it pure and clean for the soul to reside in. Our Spa Offer yoga classes in areas. creates real benefits for the person's health.",
        },
      ]
  return (
    <Section id='blog' ref={element}>
        <Title value='Blog'></Title>
        <div className="blogs">
            {
                blogsData.map(({title, type, description}) =>{
                    return(
                        <motion.div className="blog"
                        key={title}
                        variants={blogAminations}
                        animate={controls}
                        transition={{delay: 0.03, duration: 0.8, type: 'tween'}} 
                        >
                            <div className="image"></div>
                            <div className='title'>
                            <h3>{title}</h3>
                            </div>
                            <span className='type'>{type}</span>
                            <div className="description">
                                <p>{description}</p>
                            </div>
                            <div className="more">
                                <img src={play} alt="play" />
                                <span>Read More</span>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
position: relative;

.blogs{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 15rem;

    .blog{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .image{
            height: 15rem;
            background: url(${home}) no-repeat center center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .title{
            h3{
                font-size: 1.3rem;
                color: var(--secondary-color);
            }
        }

        .type{
            color: var(--primary-color);
            font-weight: bolder;
            text-transform: uppercase;
        }

        .description{
            height: 10rem;
            color: var(--primary-color);
        }

        .more{
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
            
            span{
                color: var(--primary-color);
                letter-spacing: 0.1rem;
                text-transform: uppercase;
            }
        }
    }
}


`

export default Blog