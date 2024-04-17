// ------------------------------
// File: Banner.js
// ------------------------------
// Description: React component for displaying moving horizontal banner with multiple texts HOUSES.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled, { keyframes } from 'styled-components';

// ------------------------------
// Styled Components
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const moveText = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Styled components for the text container and text elements
const LogoContainer = styled.div`
  display: flex;
  width: fit-content;
  overflow: hidden; /* Hide overflow to prevent horizontal scrollbar */
  white-space: nowrap;
  animation: ${moveText} 5s linear infinite alternate; /* Apply animation */
  padding: var(--padding-medium) 0;
`;

const Logo = styled.img`
  height: 10vh;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Banner() {
  return (
    <LogoContainer>
      <Logo src="/logos/dxl.webp"></Logo>
      <Logo src="/logos/pallares.webp"></Logo>
      <Logo src="/logos/rezas.webp"></Logo>
    </LogoContainer>
  );
}

// Export the Component (reusable)
export default Banner;
