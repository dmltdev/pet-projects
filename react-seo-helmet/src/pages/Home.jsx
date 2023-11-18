import { lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import Loading from '../components/Loading';
const Navbar = lazy(() => import('../components/Navbar'));
const Hero = lazy(() => import('../components/Hero'));
const Footer = lazy(() => import('../components/Footer'));
import { Container } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <SEO
        lang="en"
        title="Home page"
        description="Description of the home page"
        name="name from home page"
        type="website"
      />
      <Suspense fallback={<Loading />}>
        <Container width="full" maxWidth="1920px" m="0">
          <Navbar />
          <Hero />
          <Footer />
        </Container>
      </Suspense>
    </>
  );
};

export default Home;
