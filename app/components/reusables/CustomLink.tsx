// components/CustomLink.tsx
import Link from 'next/link';
import React, {ReactNode} from 'react';

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({href, children, className}) => {
  return (
    <Link href={href} passHref className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
