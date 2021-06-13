import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { AiFillInstagram, AiFillAndroid } from 'react-icons/ai'
import { CgCodeSlash } from 'react-icons/cg'
import { IoIosApps } from 'react-icons/io'
import { GiArchiveResearch } from 'react-icons/gi'
import Images from './../../constants/Images'

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
    imgSrc: Images.img03,
    title: 'BookStore Web App'
  },
  {
    imgSrc: Images.img04,
    title: 'Shop Management Desktop App'
  },
  {
    imgSrc: Images.img05,
    title: 'Virtual Wallet Mobile App'
  }
]

export const Card3Data = [
  {
    imgSrc: Images.img06,
    content:
      '"He is a hard worker. Quickly adapt to the working environment. Always complete the assigned work well."',
    author: 'Cao Thanh Phu',
    tag: 'Project Leader'
  },
  {
    imgSrc: Images.img07,
    content:
      '"The app helps a lot in classifying products, making everything faster and more convenient. In addition, the app is stable, the filter data is also quite accurate."',
    author: 'Le Thi My Ha',
    tag: 'Client'
  }
]
