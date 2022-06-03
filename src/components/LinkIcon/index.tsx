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
  useClipboard,
} from '@chakra-ui/react';
import {
  RiGithubFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiMoreFill,
} from 'react-icons/ri';

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
      <Tooltip label="About Me" fontSize="sm" bg="transparent" color="gray.200">
        <IconButton
          as="a"
          href="#"
          target="_blank"
          aria-label="About Me"
          icon={<RiMoreFill />}
          variant="ghost"
          size="sm"
        />
      </Tooltip>
    </HStack>
  );
};

export default LinkIcons;
