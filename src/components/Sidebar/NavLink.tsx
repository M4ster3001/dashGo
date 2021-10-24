import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import React, { ElementType } from 'react';

interface NavLinkProps extends LinkProps {
  name: string;
  icon: ElementType;
}

export default function NavLink({ name, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {name}
      </Text>
    </Link>
  );
}
