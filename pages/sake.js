import { ChakraProvider, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";
import Navbar from "../components/Navbar";

const sake = () => {
  const address = useAddress();

  if (!address) {
    return (
      <>
      <ChakraProvider>
        <Navbar/>
        <Container maxW={"1200px"}>
          <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
            <Heading>Please Connect a Wallet</Heading>
          </Flex>
        </Container>
      </ChakraProvider>
       
      </>
    );
  }

  return (
    <>
      <ChakraProvider>
      <Navbar/>
      <Container maxW={"1200px"}>
        <SimpleGrid columns={2} spacing={4} mt={10}>
          <StakeToken />
          <RewardToken />
        </SimpleGrid>
        <Stake />
      </Container>
      </ChakraProvider>
      
    </>
  );
};

export default sake;
