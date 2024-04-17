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

// Styled component for the logo container
const LogoContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  overflow: hidden; // Hide overflow to prevent horizontal scrollbar
  white-space: nowrap;
  padding: var(--padding-medium) 0;
  animation: ${moveText} 15s linear infinite alternate; // Apply the animation
`;

const Logo = styled.img`
  padding-right: 50px;
  height: 7.5vh;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Banner() {
  return (
    <LogoContainer>
      <Logo src="/logos/union.webp" alt="Union Logo" />
      <Logo src="/logos/polanco.webp" alt="Polanco Logo" />
      <Logo src="/logos/dxl.webp" alt="DXL Logo" />
      <Logo src="/logos/pallares.webp" alt="Pallares Logo" />
      <Logo src="/logos/rezas.webp" alt="Rezas Logo" />
      <Logo src="/logos/shaellers.webp" alt="Shaellers Logo" />
      <Logo src="/logos/proauto.webp" alt="Proauto Logo" />
      <Logo src="/logos/smh.webp" alt="SMH Logo" />
    </LogoContainer>
  );
}

// Export the Component (reusable)
export default Banner;
