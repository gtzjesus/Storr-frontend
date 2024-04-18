// ------------------------------
// File: Ad.js
// ------------------------------
// Description: React component for displaying the AD for Storr
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

const StyledAd = styled.div`
  // Set the background image
  background: url('backgrounds/sand.webp');
  background-size: cover; // Scale the background image to cover the entire element
  background-repeat: no-repeat; // Prevent the image from repeating
  background-position: center; // Center the background image

  // Code logic for covering full-screen devices
  min-height: 70vh;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Ad() {
  return (
    <>
      <StyledAd />
    </>
  );
}

// Export the Component (reusable)
export default Ad;
