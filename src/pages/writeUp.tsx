import { Box, Image, Text } from '@chakra-ui/react'
import  {useRef, useEffect} from 'react'
import header from '../../assets/love images/Hoping this poem speaks the exact words of my heart.svg'
import Typed from 'typed.js';
// import React from 'react'




function Writeup() {
    const el = useRef(null);

    useEffect(() => {
      if (el.current) {
        const typed = new Typed(el.current, {
          strings: [
          `
          Because everything here represents how you make me feel—"get your head fixed," "you're too nerdy," "you might actually run mad"—things I hear daily from others and even my own thoughts. But you never say such things; you accept me the way I am. This was supposed to be a poem, but I am working on my writing just so I can write to you: books, songs, poems. This is the beginning. So, whatever you're going through, I am here for you and with you.
          Remember that, now and always.
          ` 
          
          ],
          typeSpeed: 200,
          backSpeed: 200,
          backDelay: 1000,
          loop: true,
        });
  
        return () => {
          typed.destroy();
        };
      }
    }, []);
  return (
    <Box
    width={'100%'}
    marginTop={'50px'}
    position={'fixed'}
    zIndex={3}
    background={'black'}
    color={'white'}
    >
        <Box
        width={'90%'}
        >
       <Image width={'35%'} maxW={'230px'} src={header} 
       marginLeft={'auto'}/>
        </Box>
      <Box
      backgroundColor={'rgba(0, 0, 0, 0.84)'}
      width={'100%'}
      m={'auto'}
      marginTop={'50px'}
      p={'50px'}
      textAlign={'center'}
      >
        <Text
          fontFamily="'Cedarville Cursive', 'cursive'"

        as="div" display="inline-block"
        width={'80%'}
        margin={'auto'}
        fontSize={'25px'}
        color={'#F18686'}
        >
        <span ref={el}></span>
        </Text>
      </Box>
    </Box>
  )
}

export default Writeup

