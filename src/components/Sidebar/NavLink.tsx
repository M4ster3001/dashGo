import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react';
import ActiveLink from '@components/ActiveLink';
import React, { ElementType } from 'react';

interface NavLinkProps extends LinkProps {
  name: string;
  icon: ElementType;
  href: string;
}

export default function NavLink({ name, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {name}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
