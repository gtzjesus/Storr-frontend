import styled from 'styled-components';
import Landing from '../../components/landing/Landing';
import Banner from '../../components/banner/Banner';
import Navigation from '../../navigation/Navigation';
import Ad from '../../components/ad/Ad';
import Footer from '../../footer/Footer';
import Video from '../../components/video/Video';
import Schedule from '../../components/schedule/Schedule';
import Results from '../../components/results/Results';
import End from '../../components/end/End';

/* Media query for larger devices */
const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 600px; /* Adjust as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 20px;
  }
`;

const BannerContainer = styled.div`
  overflow-x: hidden; /* Hide horizontal overflow */
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
function Home() {
  // Code Logic HTML (styled-components)
  return (
    <>
      <Navigation />
      <Landing />
      <ResponsiveContainer>
        <BannerContainer>
          <Banner />
        </BannerContainer>
      </ResponsiveContainer>
      <ResponsiveContainer id="pointofview-section">
        <Video />
      </ResponsiveContainer>
      <ResponsiveContainer id="baja-section">
        <Ad />
      </ResponsiveContainer>
      <ResponsiveContainer id="schedule-section">
        <Schedule />
      </ResponsiveContainer>
      <ResponsiveContainer id="results-section">
        <Results />
        {/* <End /> */}
        <Footer />
      </ResponsiveContainer>
    </>
  );
}

// Export Home page
export default Home;
