import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home({BurgerStatus, setBurgerStatus}) {
  return (
    <Container show={BurgerStatus}>
        <Section 
            title="Model 3"
            description="Order online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model Y"
            description="Order online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model S"
            description="Order online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Lowest Cost Sloar Panels in America"
            description="Money-Back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Solar For New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Accessories"
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />
        
    </Container>
  )
}

export default Home

const Container = styled.div`
    filter: ${props => props.show ? 'blur(3px)':'0'};
    height: 100vh;
`