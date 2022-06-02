import { Icon, Link } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface LinkIconProp {
  href: string;
  icon: IconType;
}

const LinkIcon = ({ href, icon }: LinkIconProp) => {
  // TODO: If icon === RiMailFill (have to import this),
  // the icon should act as a button that open a popover asking the user to contact me with mailto and a button to copy email

  // TODO: If icon === RiMoreFill (have to import this),
  // the icon should act as a button that open a modal/drawer to more info about me

  return (
    <Link
      href={href}
      target="_blank"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={icon} h={{ base: 5, lg: 6 }} w={{ base: 5, lg: 6 }} />
    </Link>
  );
};

export default LinkIcon;
