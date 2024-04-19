// ------------------------------
// File: Faqs.jsx
// ------------------------------
// Description: React component for displaying our frequently asked questions.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import FaqsItem from './FaqsItem';
import { useState } from 'react';

// ------------------------------
// FAQs
// ------------------------------
// This section contains an array of objects. Our frequently asked questions with the provided answers
const faqs = [
  {
    title: 'Bike Pro',
    image: '/faqs/faqs.webp',
  },
  {
    title: 'Bike Sportsman',
    image: '/faqs/bikesportsman.webp',
  },
  {
    title: 'Quad Sportsman',
    image: '/faqs/quadsportsman.webp',
  },
  {
    title: 'Unlimited',
    image: '/faqs/unlimited.webp',
  },
  {
    title: 'Heavy Metal',
    image: '/faqs/heavy-metal.webp',
  },
  {
    title: 'Air Cooled',
    image: '/faqs/air-cooled.webp',
  },
  {
    title: 'UTV Pro Turbo',
    image: '/faqs/utv-pro-turbo.webp',
  },
  {
    title: 'UTV Pro NA',
    image: '/faqs/utv-pro-na.webp',
  },
  {
    title: 'UTV Sportsman',
    image: '/faqs/utv-sportsman.webp',
  },
];

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledFaqs = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  color: var(--color-black);
`;

const Intro = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  padding: var(--padding-large) var(--padding-small);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Faqs() {
  // React hook useState to control user interaction when clicking on FAQ, displaying and not displaying answers
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <StyledFaqs>
      <Intro>
        {faqs.map((element, index) => (
          <FaqsItem
            currentOpen={currentOpen}
            onOpen={setCurrentOpen}
            title={element.title}
            num={index}
            key={element.title}
            image={element.image}
          >
            {element.text}
          </FaqsItem>
        ))}
      </Intro>
    </StyledFaqs>
  );
}

// Export reusable Component
export default Faqs;
