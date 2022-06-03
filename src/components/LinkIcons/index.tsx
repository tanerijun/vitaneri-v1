import React, { useRef } from 'react';
import {
  Box,
  Button,
  IconButton,
  HStack,
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
  RiMoreFill,
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
      <PopoverContent bg="blackAlpha.100">
        <PopoverArrow bg="blackAlpha.100" />
        <PopoverCloseButton />
        <PopoverHeader>Contact Me</PopoverHeader>
        <PopoverBody display="flex" gap={2}>
          <Button as="a" href={`mailto:${email}`} target="_blank">
            Send Email
          </Button>
          <Button flex="1" onClick={onCopy}>
            {hasCopied ? 'Copied To Clipboard' : 'Copy Email Address'}
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const AboutMeIcon = () => {
  // This Icon should display a modal/drawer with more info about me

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Tooltip label="About Me" fontSize="sm" bg="transparent" color="gray.200">
        <IconButton
          ref={btnRef}
          aria-label="About Me"
          icon={<RiMoreFill />}
          variant="ghost"
          size="sm"
          onClick={onOpen}
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
          bg="whiteAlpha.50"
          className="glassmorphism"
          borderTop="none"
        >
          <DrawerCloseButton />
          <DrawerHeader>About Me</DrawerHeader>
          <DrawerBody>
            <AboutMeTabs />
          </DrawerBody>
          <DrawerFooter>
            // Add copyright
            <Button onClick={onClose}>Close</Button>
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
          href="#"
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
          href="#"
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
          href="#"
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
          href="#"
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
