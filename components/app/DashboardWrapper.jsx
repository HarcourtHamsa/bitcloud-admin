import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";

import Image from "next/image";
import { logo } from "../../assets/list";

import NextLink from "next/link";

import {
  FiHome,
  FiUsers,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiPhoneIncoming,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

import { FiCodesandbox } from "react-icons/fi";
import { BiUser, BiGridAlt, BiLogOut } from "react-icons/bi";
import helpers from "../../helpers";
import { Router, useRouter } from "next/router";

const LinkItems = [
  { name: "Dashboard", href: "/app", icon: BiGridAlt },
  { name: "Users", href: "/app/users", icon: BiUser },
];

export default function DashboardWrapper({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="md"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const Router = useRouter();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("black", "gray.900")}
      color="white"
      borderRightWidth="thin"
      borderRightColor="gray.700"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src={logo} alt="" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.href}>
          {link.name}
        </NavItem>
      ))}

      <Flex
        onClick={() => {
          helpers.logout();
          return Router.push("/");
        }}
        align="center"
        p="4"
        mx="4"
        role="group"
        cursor="pointer"
        _hover={{
          color: "yellow.400",
        }}
      >
        <Icon
          mr="4"
          fontSize="25"
          _groupHover={{
            color: "yellow.400",
          }}
          as={BiLogOut}
        />
        Log out
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, children, link, ...rest }) => {
  return (
    <NextLink
      href={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        role="group"
        cursor="pointer"
        _hover={{
          color: "yellow.400",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="25"
            _groupHover={{
              color: "yellow.400",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NextLink>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const router = useRouter();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setUser(helpers.getUserDetailsFromLocalStorage());
  }, []);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("yellow.400", "gray.900")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="ghost"
        aria-label="open menu"
        icon={<FiMenu size={25} color="white" />}
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">
                    {user?.firstName} {user?.lastName}
                  </Text>
                  <Text fontSize="xs">Admin</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown color="black" />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  helpers.logout();
                  router.replace("/");
                }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
