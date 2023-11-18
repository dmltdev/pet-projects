import { Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container
      zIndex="100"
      maxWidth="1920px"
      width="full"
      display="flex"
      align="center"
      justifyContent="space-between"
      flexDirection="row"
      p="4"
      position="fixed"
      top="0"
      left="0"
      bg="teal.300"
    >
      <p>This is navbar</p>
      <Link to="/abc">Link to non-existing page</Link>
    </Container>
  );
};

export default Navbar;
