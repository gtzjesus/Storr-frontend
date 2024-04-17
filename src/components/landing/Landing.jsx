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
  min-height: 100vh;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Adjustments for larger devices can go here
  }
`;

const Hook = styled.div`
  // Code logic for positioning all information inside our hook
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--padding-xlarge) var(--padding-small);

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
  letter-spacing: var(--spacing-title);
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
      {/* <!-- Main Container --> */}
      <StyledLanding>
        {/* <!-- Hook Container --> */}
        <Hook>
          <Title>Storr</Title>
          <SpecialTitle>LLC</SpecialTitle>

          <br />
          <br />
          <br />
          <br />
          <br />
          <Subtitle>Southwest </Subtitle>
          <Subtitle>Texas</Subtitle>
          <Subtitle>Off Road</Subtitle>
          <Subtitle>Racing.</Subtitle>
        </Hook>
      </StyledLanding>
    </>
  );
}

// Export the Component (reusable)
export default Landing;
