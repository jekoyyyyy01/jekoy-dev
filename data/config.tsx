import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const date = new Date();
const year = date.getFullYear();

const siteConfig = {
  logo: '/static/images/jekoy-logo.svg',
  seo: {
    title: 'Jekoy',
    description: 'Jekoy - Software Engineer',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'about',
        label: 'About',
      },
      {
        id: 'tech-stacks',
        label: 'Tech Stacks',
      },
      {
        id: 'experience',
        label: 'Experience',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://github.com/jekoyyyyy01">Jericho Cosico</Link>
        <br />
        <span>© {year}</span>
      </>
    ),
    links: [
      {
        href: 'https://www.linkedin.com/in/jericho-cosico-14595418b/',
        label: <FaLinkedin size="27" />,
      },
      {
        href: 'https://github.com/jekoyyyyy01',
        label: <FaGithub size="27" />,
      },
      {
        href: 'https://www.instagram.com/itsmejekoyyyyyyyyyy/',
        label: <FaInstagram size="27" />,
      },
      {
        href: 'https://www.facebook.com/jekoyyyyyyyyyy',
        label: <FaFacebook size="27" />,
      },
    ],
  },
}

export default siteConfig
