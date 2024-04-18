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
  // Set the background image with parallax effect
  background: url('backgrounds/sand.webp') no-repeat center center;
  background-attachment: fixed; // Create parallax effect
  background-size: cover; // Scale the background image to cover the entire element
  min-height: 100vh; // Cover the full height of the viewport

  // Add padding for any content inside the component
  padding: var(--padding-medium);

  // Media query for larger devices (980px and above)
  @media (min-width: 61.25em) {
    // Add any adjustments for larger screens here if needed
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
