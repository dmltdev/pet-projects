import { Container } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Container
      h="screen"
      w="full"
      zIndex="100"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      Loading...
    </Container>
  );
};

export default Loading;
