import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// REACT QUERY INTEGRATION
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  // Load all webpages on top automatically
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add a route for NotFound component */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
