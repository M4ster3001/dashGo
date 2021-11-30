import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useSidebarDrawer } from '@context/SideBarContext';
import React from 'react';
import { RiMenuLine } from 'react-icons/ri';
import Logo from './Logo';
import NotificationNav from './NotificatioNav';
import Profile from './Profile';
import SearchBox from './SearchBox';

export default function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Flex
        as="header"
        w="100%"
        maxW={1480}
        h="20"
        mx="auto"
        mt="4"
        align="center"
        px="6"
      >
        {!isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          />
        )}

        <Logo />

        {isWideVersion && <SearchBox />}

        <Flex align="center" ml="auto">
          <NotificationNav />
          <Profile showProfileData={isWideVersion} />
        </Flex>
      </Flex>
    </>
  );
}
