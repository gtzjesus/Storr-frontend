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
  padding-right: 25px;
  height: 8.5vh;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Banner() {
  return (
    <LogoContainer>
      <Logo src="/sponsors/baja.webp" alt="Baja Logo" />
      <Logo src="/sponsors/rezas.webp" alt="Rezas Logo" />
      <Logo src="/sponsors/utv.webp" alt="Utv Logo" />
      <Logo src="/sponsors/smh.webp" alt="SMH Logo" />
      <Logo src="/sponsors/proauto.webp" alt="Proauto Logo" />
      <Logo src="/sponsors/fina.webp" alt="Fina Logo" />
    </LogoContainer>
  );
}

// Export the Component (reusable)
export default Banner;
