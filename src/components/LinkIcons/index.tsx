import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  IconButton,
  HStack,
  Text,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useClipboard,
  useDisclosure,
} from '@chakra-ui/react';
import {
  RiGithubFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiUserSmileFill,
} from 'react-icons/ri';
import AboutMeTabs from '../AboutMeTabs';

const EmailIcon = () => {
  // This Icon display a popover giving user a choice whether to send an email using mailto or copy email address to clipboard

  // Used to copy email to clipboard
  const email = 'tanerivince@gmail.com';
  const { hasCopied, onCopy } = useClipboard(email);

  return (
    <Popover>
      <Tooltip label="Email" fontSize="sm" bg="transparent" color="gray.200">
        <Box>
          <PopoverTrigger>
            <IconButton
              aria-label="Email Me"
              icon={<RiMailFill />}
              variant="ghost"
              size="sm"
            />
          </PopoverTrigger>
        </Box>
      </Tooltip>
      <PopoverContent bg="blackAlpha.50">
        <PopoverArrow bg="blackAlpha.50" />
        <PopoverCloseButton />
        <PopoverHeader>Contact Me</PopoverHeader>
        <PopoverBody display="flex" gap={2}>
          <Button as="a" href={`mailto:${email}`} target="_blank" size="sm">
            Send Email
          </Button>
          <Button size="sm" flex="1" onClick={onCopy}>
            {hasCopied ? 'Copied To Clipboard' : 'Copy Email Address'}
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const AboutMeIcon = () => {
  // This Icon should display a modal/drawer with more info about me

  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    btnRef?.current?.focus();
  });

  return (
    <>
      <Tooltip label="About Me" fontSize="sm" bg="transparent" color="gray.200">
        <IconButton
          ref={btnRef}
          aria-label="About Me"
          icon={<RiUserSmileFill />}
          variant="ghost"
          size="sm"
          onClick={onOpen}
          isLoading={isLoading}
        />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={['full', 'full', 'xl']}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="blackAlpha.50"
          className="glassmorphism"
          borderTop="none"
        >
          <DrawerCloseButton />
          <DrawerHeader>About Me</DrawerHeader>
          <DrawerBody>
            <AboutMeTabs />
          </DrawerBody>
          <DrawerFooter display="flex" justifyContent="center">
            <Text fontSize="sm" color="gray.300">
              &copy; {new Date().getFullYear()} Vincent Taneri. All Rights
              Reserved
            </Text>
            {/* <Button onClick={onClose}>Close</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const LinkIcons = () => {
  return (
    <HStack>
      <Tooltip label="Github" fontSize="sm" bg="transparent" color="gray.200">
        <IconButton
          as="a"
          href="https://github.com/tanerijun"
          target="_blank"
          aria-label="Github Profile"
          icon={<RiGithubFill />}
          variant="ghost"
          size="sm"
        />
      </Tooltip>
      <Tooltip label="LinkedIn" fontSize="sm" bg="transparent" color="gray.200">
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/vincent-taneri"
          target="_blank"
          aria-label="LinkedIn Profile"
          icon={<RiLinkedinBoxFill />}
          variant="ghost"
          size="sm"
        />
      </Tooltip>
      <Tooltip label="Facebook" fontSize="sm" bg="transparent" color="gray.200">
        <IconButton
          as="a"
          href="https://www.facebook.com/VinceTaneri/"
          target="_blank"
          aria-label="Facebook Profile"
          icon={<RiFacebookCircleFill />}
          variant="ghost"
          size="sm"
        />
      </Tooltip>
      <Tooltip label="Twitter" fontSize="sm" bg="transparent" color="gray.200">
        <IconButton
          as="a"
          href="https://twitter.com/tanerivince"
          target="_blank"
          aria-label="Twitter Profile"
          icon={<RiTwitterFill />}
          variant="ghost"
          size="sm"
        />
      </Tooltip>
      <EmailIcon />
      <AboutMeIcon />
    </HStack>
  );
};

export default LinkIcons;
