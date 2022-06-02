import { Icon, Link } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface LinkIconProp {
  href: string;
  icon: IconType;
}

const LinkIcon = ({ href, icon }: LinkIconProp) => {
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
