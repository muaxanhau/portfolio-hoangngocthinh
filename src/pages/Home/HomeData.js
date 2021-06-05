import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { AiFillInstagram, AiFillAndroid } from 'react-icons/ai'
import { CgCodeSlash } from 'react-icons/cg'
import { IoIosApps } from 'react-icons/io'
import { GiArchiveResearch } from 'react-icons/gi'
import pj1Img from './../../assets/images/pj1.png'
import pj2Img from './../../assets/images/pj2.png'
import pj3Img from './../../assets/images/pj3.png'
import ps1Img from './../../assets/images/ps1.jpg'
import ps2Img from './../../assets/images/ps2.jpg'
import ps3Img from './../../assets/images/ps3.png'
import ps4Img from './../../assets/images/ps4.jpg'

let iconSocialButtonSize = '60%'
export const SocialButtonData = [
  {
    icon: <FaFacebookF size={iconSocialButtonSize} />,
    link: 'http://www.facebook.com/Sercules'
  },
  {
    icon: <FaTwitter size={iconSocialButtonSize} />,
    link: 'http://'
  },
  {
    icon: <AiFillInstagram size={iconSocialButtonSize} />,
    link: 'http://'
  },
  {
    icon: <SiGmail size={iconSocialButtonSize} />,
    link: 'mailto:thinhhoang17485@gmail.com'
  }
]

let iconCard1Size = '100%'
export const Card1Data = [
  {
    icon: <CgCodeSlash size={iconCard1Size} />,
    title: 'Web Development',
    content:
      'I can create web apps that run on any device, accessible from anywhere. I can work with Laravel, ReactJs and I have great HTML, CSS skills.'
  },
  {
    icon: <IoIosApps size={iconCard1Size} />,
    title: 'App Development',
    content:
      'I can create desktop app with high performance, stable and powerful because my products are built on .Net platform, with great support from Microsoft.'
  },
  {
    icon: <AiFillAndroid size={iconCard1Size} />,
    title: 'Mobile Apps',
    content:
      'I use React Native for cross-platform programming that runs on both Android and IOS'
  },
  {
    icon: <GiArchiveResearch size={iconCard1Size} />,
    title: 'Research',
    content:
      'I study technologies that meet customer requirements or specialized skills in a certain field. I adapt quickly to newness'
  }
]

export const Card2Data = [
  {
    imgSrc: pj1Img,
    title: 'BookStore Web App'
  },
  {
    imgSrc: pj2Img,
    title: 'Shop Management Desktop App'
  },
  {
    imgSrc: pj3Img,
    title: 'Virtual Wallet Mobile App'
  }
]

export const Card3Data = [
  {
    imgSrc: ps1Img,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis similique dolore voluptatem non provident.',
    author: 'Annie Elert',
    tag: 'Project Leader'
  },
  {
    imgSrc: ps2Img,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis similique dolore voluptatem non provident.',
    author: 'Luna Pennis',
    tag: 'Project Analyst'
  },
  {
    imgSrc: ps3Img,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis similique dolore voluptatem non provident.',
    author: 'Mikasa',
    tag: 'Website Designer'
  },
  {
    imgSrc: ps4Img,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis similique dolore voluptatem non provident.',
    author: 'Harry Port',
    tag: 'Consultants'
  }
]
