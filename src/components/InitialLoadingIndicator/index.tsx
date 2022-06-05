import { useState } from 'react';
import { Box, keyframes } from '@chakra-ui/react';

const transparent = keyframes`
  from {background-color: #19202c; opacity: 1;}
  to {background-color: #000000; opacity: 0;}
`;

const InitialLoadingIndicator = () => {
  const [shouldMount, setShouldMount] = useState(true);
  const boxAnimation = `${transparent} 2s ease-in`;

  return (
    <>
      {shouldMount && (
        <Box
          width="100vw"
          height="100vh"
          bg="black"
          zIndex={9999}
          position="absolute"
          top={0}
          left={0}
          animation={boxAnimation}
          onAnimationEnd={() => setShouldMount(false)}
        />
      )}
    </>
  );
};

export default InitialLoadingIndicator;
