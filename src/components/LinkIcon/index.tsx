import {
  Box,
  Button,
  Center,
  Icon,
  IconButton,
  Link,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  HStack,
} from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { ReactElement } from 'react';
import {
  RiGithubFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiMoreFill,
} from 'react-icons/ri';

interface LinkIconProp {
  href?: string;
  icon: ReactElement;
  name: string;
}

// const LinkIcon = ({ href, icon, name }: LinkIconProp) => {
//   if (name === 'Email') {
//     // the icon should act as a button that open a popover asking the user to contact me with mailto and a button to copy email
//     return (
//       <Popover>
//         <Tooltip label={name} fontSize="sm" bg="transparent" color="gray.200">
//           <Center cursor="pointer" tabIndex={0}>
//             <PopoverTrigger>
//               <Icon
//                 as={icon}
//                 h={5}
//                 w={5}
//                 opacity={0.7}
//                 _hover={{ opacity: 1 }}
//               />
//             </PopoverTrigger>
//           </Center>
//         </Tooltip>
//         <PopoverContent>
//           <PopoverArrow />
//           <PopoverCloseButton />
//           <PopoverHeader>Test</PopoverHeader>
//           <PopoverBody>Test</PopoverBody>
//         </PopoverContent>
//       </Popover>
//     );
//   }

// TODO: If icon === RiMoreFill (have to import this),
// the icon should act as a button that open a modal/drawer to more info about me

// return (
//   <Tooltip label={name} fontSize="sm" bg="transparent" color="gray.200">
//     <Link
//       href={href}
//       target="_blank"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Icon as={icon} h={5} w={5} opacity={0.7} _hover={{ opacity: 1 }} />
//     </Link>
//   </Tooltip>
// );

//   return <IconButton aria-label={name} icon={icon} />;
// };

const EmailIcon = () => {
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
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
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
