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

// Styled component for the Sponsor container
const SponsorContainer = styled.div`
  display: flex;
  width: 200%; // Double the width to accommodate duplicate Sponsors
  overflow: hidden; // Hide overflow to prevent horizontal scrollbar
  white-space: nowrap;
  padding: var(--padding-medium) 0;

  // Apply the continuous scroll animation
  animation: ${scroll} 15s linear infinite;
`;

const Sponsor = styled.img`
  padding-right: var(--padding-small);
`;

// Component
function Banner() {
  return (
    <SponsorContainer>
      {/* Add the list of Sponsors and repeat the list for a seamless loop */}
      <Sponsor src="/sponsors/kongster.webp" alt="Kongster Sponsor" />
      <Sponsor src="/sponsors/dxl.webp" alt="DXL Sponsor" />
      <Sponsor src="/sponsors/union.webp" alt="Union Sponsor" />
      <Sponsor src="/sponsors/polanco.webp" alt="Polanco Sponsor" />
      <Sponsor src="/sponsors/pallares.webp" alt="Pallares Sponsor" />
      <Sponsor src="/sponsors/shaellers.webp" alt="Shaellers Sponsor" />
      <Sponsor src="/sponsors/baja.webp" alt="Baja Sponsor" />
      <Sponsor src="/sponsors/rezas.webp" alt="Rezas Sponsor" />
      <Sponsor src="/sponsors/utv.webp" alt="Utv Sponsor" />
      <Sponsor src="/sponsors/smh.webp" alt="SMH Sponsor" />
      <Sponsor src="/sponsors/proauto.webp" alt="Proauto Sponsor" />
      <Sponsor src="/sponsors/fina.webp" alt="Fina Sponsor" />
    </SponsorContainer>
  );
}

// Export the Component (reusable)
export default Banner;
