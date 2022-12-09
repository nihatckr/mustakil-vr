import {
  Avatar,
  Button,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogoIcon } from "../Svg/LogoIcon";
import { BsMoonFill, BsSearch } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";
import { links } from "../../data";

const Navigation = () => {
  const [nav, setNav] = useState(links);
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack
      flexDir={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"full"}
      padding={4}
    >
      <Flex alignItems={"center"}>
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='mustakil-vr'
          fontSize='20px'
          icon={<LogoIcon />}
          style={{ margin: 0, marginLeft: 6 }}
        />

        {nav.map((link) => {
          return (
            <Link
              key={link.id}
              as={NextLink}
              href={link.href}
              style={{ margin: 0, paddingRight: 6, marginLeft: 16 }}
            >
              {link.label}
            </Link>
          );
        })}
      </Flex>
      <VStack flexDir={"row"} alignItems={"center"}>
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='mustakil-search'
          fontSize='20px'
          icon={<BsSearch />}
          style={{ margin: 0 }}
        />
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='mustakil-moon'
          fontSize='20px'
          icon={<BsMoonFill />}
          style={{ margin: 0, marginLeft: 6 }}
        />
        {session ? (
          <Menu>
            <MenuButton
              as={IconButton}
              variant='outline'
              colorScheme='teal'
              cursor={"pointer"}
              style={{ margin: 0, marginLeft: 6 }}
              minW={0}
            >
              <Avatar size={"sm"} src={`${session.user?.image}`} />
            </MenuButton>
            <MenuList alignItems={"center"}>
              <br />
              <Center>
                <Avatar size={"2xl"} src={`${session.user?.image}`} />
              </Center>
              <br />
              <Center>
                <p>{session.user.email}</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>Your Servers</MenuItem>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Button
              onClick={() => signIn()}
              rightIcon={<IoMdArrowRoundForward />}
              colorScheme='teal'
              variant='outline'
              style={{ margin: 0, marginLeft: 6 }}
            >
              Sign in
            </Button>
          </>
        )}
      </VStack>
    </VStack>
  );
};

export default Navigation;
