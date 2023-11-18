import { Container } from '@chakra-ui/react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

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
      <Container
        fontSize="6xl"
        h="100dvh"
        width="full"
        display="flex"
        gap="2"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        404 Not Found
        <Link to="/">Go home</Link>
      </Container>
    </>
  );
};

export default Home;
