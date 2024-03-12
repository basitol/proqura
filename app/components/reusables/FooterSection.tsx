// FooterSection.tsx
import React from 'react';
import FooterLink from './FooterLink'; // Adjust the import path as needed

interface FooterSectionProps {
  title: string;
  links: {href: string; label: string}[];
}

const FooterSection: React.FC<FooterSectionProps> = ({title, links}) => (
  <div className='w-full md:w-1/6 flex flex-col gap-3 items-center md:items-start'>
    <p className='text-[#4F4F4F] font-semibold'>{title}</p>
    {links.map((link, index) => (
      <FooterLink key={index} href={link.href}>
        {link.label}
      </FooterLink>
    ))}
  </div>
);

export default FooterSection;
