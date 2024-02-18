import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Container maxW={"1200px"} py={4}>
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Heading>Token Staking App</Heading>

        <Link href="/">
          <Button colorScheme="blue" size="lg">
            Swap Sphere
          </Button>
        </Link>
        <ConnectWallet />
      </Flex>
    </Container>
  );
}
