import styled from 'styled-components';
import Landing from '../../components/landing/Landing';
import Banner from '../../components/banner/Banner';
import BannerSecond from '../../components/banner/BannerSecond';
import Navigation from '../../navigation/Navigation';

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
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <Landing />
      <BannerContainer>
        <BannerSecond />
      </BannerContainer>
    </>
  );
}

// Export Home page
export default Home;
