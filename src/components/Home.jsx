import React from 'react'
import home from '../assets/home.png'
import play from '../assets/play.png'
import Navbar from './Navbar'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import {homeInfoAnimation, homeAnimation} from '../animation';


const Home = () => {
  return (
    <Section>
        <Navbar/>
        <motion.div className="home"
        variants={homeAnimation}
        transition={{delay: 0.3, duration: 0.6, type: 'tween'}}
        >
            <div className="content">
                <div className="title">
                    <h1>Blossoms Parlour</h1>
                </div>
                <div className='subTitle'>
                    <p>
                        At the Beauty Parlour, we believe in beauty with a conscience. We have created a salon that offers that height quality hair services.
                    </p>
                </div>
                <img src={play} alt="play button" />
            </div>
        </motion.div>

        <motion.div className='info'
        variants={homeInfoAnimation}
        transition={{delay: 0.3, duration: 0.6, type: 'tween'}}
        >
            <div className="grid">
                <div className="col">
                    <strong>Parlour</strong>
                    <p>Blossoms Academy</p>
                </div>
                <div className="col">
                    <strong>Email</strong>
                    <p>blossoms@gmail.com</p>
                </div> 
                <div className="col">
                    <strong>Mobile</strong>
                    <p>+91 8897666511</p>
                </div> 
                <div className="col">
                    <strong>Address</strong>
                    <p>322, Long Fly,</p>
                    <p>997773 India</p>
                </div> 
                <div className="col">
                    <strong>Services</strong>
                    <p>Sparking</p>
                    <p>SPA Cream</p>
                </div> 
                <div className="col">
                    <strong>Working Hours</strong>
                    <p>Monday to Friday</p>
                    <p>08:00 to 09:00</p>
                </div>   
            </div>
        </motion.div>
    </Section>
  )
}

const Section = styled.section`
    background: url(${home}) no-repeat center;
    min-height: 100vh;
    background-size: cover;
    background-position: relative;

    .home{
        height: 100%;
        .content{
            display : flex;
            flex-direction: column;
            align-items: flex-start;
            width: 60%;
            color: #fff;
            gap: 1.2rem;
            margin-top: 8rem;
            padding-left: 18rem;
            .title{
                h1{
                    font-size: 5rem;
                    line-height: 5.3rem;
                }
            }
            .subTitle{
                p{
                    width: 70%;
                    margin-bottom: 5.3rem;
                }
            }
        }
    }
    .info{
        position: absolute;
        bottom: -6rem;
        right: 0;
        background-color: var(--secondary-color);
        padding: 4rem;
        .grid{
            display: grid;
            grid-template-columns : repeat(3, 1fr);
            gap: 4rem;
            color: #fff;
        }
    }
`;

export default Home