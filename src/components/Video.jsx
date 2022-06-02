import React from 'react'
import styled from 'styled-components';

const Video = () => {
  return (
    <Section>
        <div className="background"></div>
        <div className="video">
            <iframe 
                width="960" 
                height="515" 
                src="https://www.youtube.com/embed/WVEsmwsN_Ug" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
        </div>
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

`;

export default Video