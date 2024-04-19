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
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;
`;

const Number = styled.p`
  font-weight: 500;
`;

const Title = styled.p`
  font-weight: 500;
`;

const Icon = styled.p`
  font-weight: 500;
`;

const Image = styled.img``;

const Content = styled.p`
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.6;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
// Receives multiple parameters to be used to interact with displaying/not displaying modal

function FaqsItem({ title, num, currentOpen, onOpen, children, image }) {
  const isOpen = currentOpen === num;

  return (
    <div onClick={() => onOpen(isOpen ? null : num)}>
      <h3>{title}</h3>
      {isOpen && (
        <div>{image ? <img src={image} alt={title} /> : <p>{children}</p>}</div>
      )}
    </div>
  );
}

// Export reusable Component
export default FaqsItem;
