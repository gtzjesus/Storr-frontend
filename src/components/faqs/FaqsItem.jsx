// ------------------------------
// File: FaqsItem.jsx
// ------------------------------
// Description: React component for displaying individual frequently asked question.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledItem = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  padding: 20px 24px;
  cursor: pointer;
  // Code logic for arranging children

  column-gap: 24px;
  row-gap: 32px;
  align-items: center;
`;

const Displayed = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-weight: 500;
`;

const Icon = styled.p`
  font-weight: 500;
`;

const Content = styled.p`
  padding-bottom: var(--padding-xxsmall);
  line-height: 1;
  /* font-size: var(--font-small); */
`;

const Image = styled.img`
  width: 450px;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    width: 550px;
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
// Receives multiple parameters to be used to interact with displaying/not displaying modal

function FaqsItem({ title, num, currentOpen, onOpen, children, image }) {
  const isOpen = currentOpen === num;

  return (
    <>
      <StyledItem onClick={() => onOpen(isOpen ? null : num)}>
        <Displayed>
          <Title>{title}</Title>
          <Icon>{isOpen ? '-' : '+'}</Icon>
        </Displayed>
      </StyledItem>
      <Content>
        {isOpen && (
          <div>
            {image ? <Image src={image} alt={title} /> : <p>{children}</p>}
          </div>
        )}
      </Content>
    </>
  );
}

// Export reusable Component
export default FaqsItem;
