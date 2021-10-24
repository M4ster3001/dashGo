import { Flex, Text, Box, Avatar } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box>
          <Text mr="4" textAlign="right">
            Aldo
          </Text>
          <Text color="gray.300" fontSize="small">
            aldo@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Aldo" src="" />
    </Flex>
  );
}
