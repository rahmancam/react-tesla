import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({ title, description, bgImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImg={bgImg}>
            <Fade bottom>
                <SectionTitle>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </SectionTitle>
            </Fade>
            <ButtonContainer>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && <RightButton>
                            {rightBtnText}
                        </RightButton>}
                    </ButtonGroup>
                </Fade>
                <RevealButton src="/images/down-arrow.svg"></RevealButton>
            </ButtonContainer>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url(/images/${props.bgImg})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const SectionTitle = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`;

const RevealButton = styled.img`
    height: 40px;
    animation: animationDown infinite 1.5s;
    overflow-x: hidden;
    cursor: pointer;
`;

const ButtonContainer = styled.div``;