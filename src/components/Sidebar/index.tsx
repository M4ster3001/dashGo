import { Box, Stack } from '@chakra-ui/layout';
import React from 'react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import NavLink from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
          <NavLink name="Dashboard" icon={RiDashboardLine} />
          <NavLink name="Usuários" icon={RiContactsLine} />
        </NavSection>
        <NavSection title="Automação">
          <NavLink name="Formulários" icon={RiInputMethodLine} />
          <NavLink name="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box>
  );
}
