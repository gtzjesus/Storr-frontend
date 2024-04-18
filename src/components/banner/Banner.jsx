import styled, { keyframes } from 'styled-components';

// Define the animation for continuous scrolling
const scroll = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(50%);
  }
`;

// Styled component for the logo container
const LogoContainer = styled.div`
  display: flex;
  width: 200%; // Double the width to accommodate duplicate logos
  overflow: hidden; // Hide overflow to prevent horizontal scrollbar
  white-space: nowrap;
  padding: var(--padding-medium) 0;

  // Apply the continuous scroll animation
  animation: ${scroll} 5s linear infinite;
`;

const Logo = styled.img`
  height: 100%;
`;

// Component
function Banner() {
  return (
    <LogoContainer>
      {/* Add the list of logos and repeat the list for a seamless loop */}
      <Logo src="/sponsors/kongster.webp" alt="Kongster Logo" />
      <Logo src="/sponsors/dxl.webp" alt="DXL Logo" />
      <Logo src="/sponsors/union.webp" alt="Union Logo" />
      <Logo src="/sponsors/polanco.webp" alt="Polanco Logo" />
      <Logo src="/sponsors/pallares.webp" alt="Pallares Logo" />
      <Logo src="/sponsors/shaellers.webp" alt="Shaellers Logo" />
      <Logo src="/sponsors/baja.webp" alt="Baja Logo" />
      <Logo src="/sponsors/rezas.webp" alt="Rezas Logo" />
      <Logo src="/sponsors/utv.webp" alt="Utv Logo" />
      <Logo src="/sponsors/smh.webp" alt="SMH Logo" />
      <Logo src="/sponsors/proauto.webp" alt="Proauto Logo" />
      <Logo src="/sponsors/fina.webp" alt="Fina Logo" />

      {/* Duplicate the list for seamless loop */}
      <Logo src="/sponsors/kongster.webp" alt="Kongster Logo" />
      <Logo src="/sponsors/dxl.webp" alt="DXL Logo" />
      <Logo src="/sponsors/union.webp" alt="Union Logo" />
      <Logo src="/sponsors/polanco.webp" alt="Polanco Logo" />
      <Logo src="/sponsors/pallares.webp" alt="Pallares Logo" />
      <Logo src="/sponsors/shaellers.webp" alt="Shaellers Logo" />
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
