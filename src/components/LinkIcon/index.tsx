import { Icon, Link, Tooltip } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface LinkIconProp {
  href?: string;
  icon: IconType;
  name: string;
}

const LinkIcon = ({ href, icon, name }: LinkIconProp) => {
  // TODO: If icon === RiMailFill (have to import this),
  // the icon should act as a button that open a popover asking the user to contact me with mailto and a button to copy email

  // TODO: If icon === RiMoreFill (have to import this),
  // the icon should act as a button that open a modal/drawer to more info about me

  return (
    <Tooltip label={name} fontSize="sm" bg="transparent" color="gray.200">
      <Link
        href={href}
        target="_blank"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={icon} h={5} w={5} opacity={0.7} _hover={{ opacity: 1 }} />
      </Link>
    </Tooltip>
  );
};

export default LinkIcon;
