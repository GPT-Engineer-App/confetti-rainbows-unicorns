import React, { useState } from "react";
import { Box, Button, Center, Image, useDisclosure } from "@chakra-ui/react";
import { FaCloud, FaStar } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineCelebration } from "react-icons/md";

const Index = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const handleCelebrate = () => {
    setShowCelebration(true);
    onToggle();
    // Reset after 2 seconds
    setTimeout(() => {
      setShowCelebration(false);
    }, 2000);
  };

  return (
    <Center height="100vh" flexDirection="column">
      <Button leftIcon={<FaStar />} colorScheme="pink" variant="solid" size="lg" onClick={handleCelebrate} mb={4}>
        Press for Magic!
      </Button>

      {showCelebration && (
        <Box textAlign="center">
          <GiPartyPopper size="2em" color="#DD6FD1" />
          <MdOutlineCelebration size="5em" color="#E0AF68" />

          <Image src="https://images.unsplash.com/photo-1574607407517-cd664b1504f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bmljb3JufGVufDB8fHx8MTcwOTIwMzY2MXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="200px" objectFit="cover" borderRadius="full" border="4px" borderColor="purple.300" alt="Unicorn" />
          <FaCloud size="2em" color="#90CDF4" />
        </Box>
      )}
    </Center>
  );
};

export default Index;
