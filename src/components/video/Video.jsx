import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.div`
  // Set the background image
  background: url('backgrounds/videoBack.webp');
  background-size: cover; // Scale the background image to cover the entire element
  background-repeat: no-repeat; // Prevent the image from repeating
  background-position: center; // Center the background image

  // Code logic for covering full-screen devices
  min-height: 70vh;
  padding: var(--padding-medium);
`;

const Title = styled.span`
  line-height: var(--line-height-small);
  font-size: var(--font-large);
  letter-spacing: var(--spacing-title);
  color: var(--color-white);
  text-transform: uppercase;
  overflow: hidden;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Design background from Figma software
    font-size: var(--font-xlarge);
    line-height: var(--line-height-medium);
  }
`;

// Styled container for the video
const VideoContainer = styled.div`
  width: 100%;
  padding-bottom: 56.25%; // Maintain aspect ratio for video
  position: relative;
`;

// Styled iframe to embed the video
const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
`;

function Video() {
  return (
    <StyledVideo>
      <Title>Point of view</Title>
      <VideoContainer>
        <VideoIframe
          src="https://www.youtube.com/embed/Vua1KPP9hfY"
          title="STORR YouTube Video"
          allowFullScreen
        />
      </VideoContainer>
    </StyledVideo>
  );
}

export default Video;
