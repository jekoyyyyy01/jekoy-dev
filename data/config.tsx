import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const date = new Date();
const year = date.getFullYear();

const siteConfig = {
  logo: '',
  seo: {
    title: 'Jekoy',
    description: 'Jekoy - Software engineer',
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
        id: 'skills',
        label: 'Skills',
      },
      // {
      //   id: 'resume',
      //   label: 'Resume',
      // },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://github.com/Jekoy261">Jericho Cosico</Link>
        <br />
        <span>© {year}</span>
      </>
    ),
    links: [
      {
        href: 'jekcosico@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://www.linkedin.com/in/jericho-cosico-14595418b/',
        label: <FaLinkedin size="14" />,
      },
      {
        href: 'https://github.com/Jekoy261',
        label: <FaGithub size="14" />,
      },
      {
        href: 'https://www.instagram.com/itsmejekoyyyyyyyyyy/',
        label: <FaInstagram size="14" />,
      },
      {
        href: 'https://www.facebook.com/jekoy262626',
        label: <FaFacebook size="14" />,
      },
    ],
  },
}

export default siteConfig
