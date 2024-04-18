// ------------------------------
// File: Landing.js
// ------------------------------
// Description: React component for displaying landing page (first thing USER sees).
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledLanding = styled.div`
  // Set the background image
  background: url('backgrounds/landing.webp');
  background-size: cover; // Scale the background image to cover the entire element
  background-repeat: no-repeat; // Prevent the image from repeating
  background-position: center; // Center the background image

  // Code logic for covering full-screen devices
  min-height: 70vh;
  filter: blur(1px);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Adjustments for larger devices can go here
    background: url('backgrounds/landing_second.webp');
    background-size: contain; // Scale the background image to cover the entire element
    background-repeat: no-repeat; // Prevent the image from repeating
    background-position: center; // Center the background image
  }
`;

const Hook = styled.div`
  // Code logic for positioning all information inside our hook
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: var(--padding-xxxlarge) 0;
  z-index: 99;
  color: var(--color-white);
  text-align: center;
  width: 100vw;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Design background from Figma software
    padding: var(--padding-xlarge) var(--padding-large);
  }
`;

const Title = styled.span`
  line-height: var(--line-height-small);
  font-size: var(--font-large);
  letter-spacing: var(--spacing-title);
  text-transform: uppercase;
  overflow: hidden;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Design background from Figma software
    font-size: var(--font-xlarge);
    line-height: var(--line-height-medium);
  }
`;

const SpecialTitle = styled.span`
  line-height: var(--line-height-small);
  font-size: var(--font-small);
  text-transform: uppercase;
  overflow: hidden;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Design background from Figma software
    font-size: var(--font-xlarge);
    line-height: var(--line-height-medium);
  }
`;

const Subtitle = styled.span`
  // Code logic for subtitle element
  font-size: var(--font-xsmall);
  letter-spacing: var(--spacing-subtitle);
  line-height: var(--line-height-xsmall);
  overflow: hidden;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Design background from Figma software
    font-size: var(--font-medium);
    line-height: var(--line-height-small);
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Landing() {
  return (
    <>
      <Hook>
        <Title>Ready to race?</Title>
        <br />
        <br />
        <br />
        <br />

        <SpecialTitle>Best in the desert.</SpecialTitle>
      </Hook>
      <StyledLanding />
    </>
  );
}

// Export the Component (reusable)
export default Landing;
