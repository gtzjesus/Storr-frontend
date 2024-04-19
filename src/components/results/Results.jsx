// ------------------------------
// File: Results.js
// ------------------------------
// Description: React component for displaying the Results for Storr
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import Faqs from '../faqs/Faqs';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledResults = styled.div`
  // Set the background image
  background: url('backgrounds/resultsBack.webp');
  background-size: cover; // Scale the background image to cover the entire element
  background-repeat: no-repeat; // Prevent the image from repeating
  background-position: center; // Center the background image

  // Code logic for covering full-screen devices
  min-height: 70vh;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
  }
`;

const Hook = styled.div`
  // Code logic for positioning all information inside our hook
  color: var(--color-white);
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 99;
  width: 100vw;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
  }
`;

const Title = styled.span`
  display: flex;
  line-height: var(--line-height-small);
  font-size: var(--font-medium);
  letter-spacing: var(--spacing-title);
  text-transform: uppercase;
  overflow: hidden;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: var(--padding-small);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    font-size: var(--font-xlarge);
    line-height: var(--line-height-medium);
  }
`;

const ButtonContainer = styled.a`
  padding-top: var(--padding-xsmall);
  padding-left: var(--padding-small);
`;

const FaqsContainer = styled.div`
  padding: var(--padding-xsmall);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Results() {
  return (
    <>
      <Hook>
        <Title>El Paso 200, 2024</Title>
        <FaqsContainer>
          <Faqs />
        </FaqsContainer>

        <ButtonContainer
          target="_blank"
          href="https://storracing.com/el-paso-200-2024/"
        >
          <Button>Click to view full page</Button>
        </ButtonContainer>
      </Hook>
      <StyledResults />
    </>
  );
}

// Export the Component (reusable)
export default Results;
