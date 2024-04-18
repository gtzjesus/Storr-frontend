// ------------------------------
// File: Footer.js
// ------------------------------
// Description: Last React reusable Component, our web application's footer

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledFooter = styled.footer`
  // Code logic for arranging children

  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  color: var(--color-black);
  padding: var(--padding-medium);
  gap: var(--gap-medium);
`;

const Logo = styled.img`
  height: var(--font-large);
`;

const SocialMedia = styled.div`
  display: flex;
  margin: 0 auto;
  gap: var(--gap-large);
`;

const Tag = styled.a`
  // Code logic to modify logo
  color: #006ed4;
`;

const Icon = styled.img`
  // Code logic to modify logo
  height: 1.5rem;
`;

const Signature = styled.div`
  display: flex;
  justify-content: center;
`;

const Sponsor = styled.img`
  height: var(--font-medium);
`;

const Copyright = styled.a`
  font-size: var(--font-copyright);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles footer
function Footer() {
  return (
    <StyledFooter>
      {/* <!-- All necessary social medias --> */}
      <SocialMedia>
        <Tag target="_blank" href="https://www.instagram.com/storr915/">
          <Icon src="/icons/instagram.png" alt="instagram"></Icon>
        </Tag>
        <Tag target="_blank" href="https://www.facebook.com/STORR915/">
          <Icon src="/icons/facebook.png" alt="facebook"></Icon>
        </Tag>
      </SocialMedia>
      <hr />
      <Signature>
        <Logo src="/logos/storr.webp" alt="storr"></Logo>
      </Signature>

      <Signature>
        <Sponsor src="/sponsors/kongster.webp" alt="Kongster Sponsor"></Sponsor>
        <Sponsor src="/sponsors/dxl.webp" alt="DXL Sponsor"></Sponsor>
        <Sponsor src="/sponsors/union.webp" alt="Union Sponsor"></Sponsor>
      </Signature>

      <Signature>
        <Copyright>
          <Tag target="_blank" href="https://www.worldhello.us">
            worldhello
          </Tag>
          &copy; 2024 all rights reserved
        </Copyright>
      </Signature>
    </StyledFooter>
  );
}

// Export reusable Component
export default Footer;
