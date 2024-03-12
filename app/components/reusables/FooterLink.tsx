// FooterLink.tsx
import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({href, children}) => (
  <Link href={href} passHref className='text-[#BDBDBD]'>
    {children}
  </Link>
);

export default FooterLink;
