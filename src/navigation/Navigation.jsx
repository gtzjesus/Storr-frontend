// File: Navigation.jsx
// Description: React navigation Component (header).
// LazyLoading from React for optimization (images & web app loading time).
// Global Styles from /src/styles/ used for global variables.
// useNavigate react hook to navigate react router (links)

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import TriggerButton from '../ui/buttons/TriggerButton';

// Define keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

// ------------------------------
// Styled Components
// ------------------------------
// This section has all necessary styled components
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: ${({ isScrolled }) =>
    isScrolled
      ? 'var(--color-white)'
      : 'transparent'}; /* Change background based on isScrolled */
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
  transition: background-color 0.5s ease; /* Smooth transition for background color */

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    height: var(--height-navigation-responsive);
  }
`;

const Object = styled.div`
  padding: 0 var(--padding-small);
  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    padding: 0 var(--padding-xxlarge);
    padding-top: 1.25rem;
  }
  padding-top: 0.75rem;
`;

const Hamburger = styled.div`
  padding: 0 var(--padding-small);
  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    padding: 0 var(--padding-xxlarge);
  }
`;

const Icon = styled.a`
  height: var(--font-small);
  cursor: pointer; /* Add cursor pointer */
  @media (min-width: 61.25em) {
    height: var(--font-large);
  }
`;

const Logo = styled.img`
  height: var(--font-medium);

  @media (min-width: 61.25em) {
    height: var(--font-xlarge);
  }
`;

const MenuContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  z-index: 999;
  background-color: transparent;
  animation: ${fadeIn} 1.5s ease, ${slideIn} 2s ease;
`;

const Menu = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--font-xsmall);
  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 3px;
    transition: all 0.3s ease;
  }
  ::before {
    top: 12px;
  }
  ::after {
    top: 24px;
  }
  &.open-menu::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &.open-menu::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  ${({ isOpen }) =>
    isOpen &&
    `
    ::before {
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    ::after {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column; /* Display menu items vertically */
  justify-content: center;
  text-align: center;
  height: 100%;
  background-color: var(--color-white);
`;

const MenuItem = styled.a`
  display: inline-block;
  padding: 8px 16px;
  color: var(--color-black);
  text-decoration: none;
  font-size: var(--font-links);
  cursor: pointer;
`;

const MenuImg = styled.img`
  height: 2rem;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Navigation() {
  // Set states for menu commands from UI
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Helper function to toggle menu
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // Function to handle scrolling to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  }

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClick() {
      setIsMenuOpen(false);
    }

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  // useEffect to handle our scroll events
  useEffect(() => {
    // Create function to handle scroll
    function handleScroll() {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function scrollToHashSection() {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        const section = document.getElementById(sectionId);
        console.log(section);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    // Scroll to the section when the component mounts and when the hash changes
    scrollToHashSection();
    window.addEventListener('hashchange', scrollToHashSection);

    return () => {
      window.removeEventListener('hashchange', scrollToHashSection);
    };
  }, []);

  return (
    <>
      {/* <!-- Nav Container , the header --> */}
      <StyledNav isScrolled={isScrolled}>
        <Object>
          <Icon onClick={scrollToTop}>
            {/* <!--  Container for logo and title --> */}
            <Logo src="/logos/storr.webp" alt="storr"></Logo>
          </Icon>
        </Object>
        {/* <!-- Menu Container for links --> */}
        <Hamburger>
          <Menu onClick={toggleMenu}>
            {isMenuOpen ? (
              <MenuImg src="/icons/close.webp" alt="Close"></MenuImg>
            ) : (
              <>
                <MenuImg src="/icons/menu.webp" alt="Menu"></MenuImg>
              </>
            )}
          </Menu>
        </Hamburger>
      </StyledNav>
      <MenuContainer isOpen={isMenuOpen}>
        <MenuContent>
          <MenuItem className="menu-item">
            <Link to="pointofview-section">Point of View</Link>
          </MenuItem>
          <br />
          <br />
          <MenuItem className="menu-item">
            <Link to="baja-section">Baja</Link>
          </MenuItem>
          <br />
          <br />
          <MenuItem className="menu-item">
            <Link to="schedule-section">2024 Schedule</Link>
          </MenuItem>
          <br />
          <br />
          <MenuItem className="menu-item">
            <Link to="results-section">Results</Link>
          </MenuItem>
        </MenuContent>
      </MenuContainer>
    </>
  );
}

// Export the Component (reusable)
export default Navigation;
