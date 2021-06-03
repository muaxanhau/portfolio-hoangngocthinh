import React from 'react'
import {
  HomePageContainer,
  ContentContainer,
  HomeContainer,
  Avatar,
  Introduce,
  SocialNetwork,
  IconButton,
  AboutContentWrapper,
  AboutText,
  AboutImage,
  Span,
  ServicesContentWrapper,
  ProjectContentWrapper,
  TestimonialsContentWrapper,
  ContactContentWrapper
} from './HomeElements'
import { v4 as uuidv4 } from 'uuid'
import avtImg from './../../assets/images/avt.jpg'
import Button from './../../components/Button/index'
import introImg from './../../assets/images/intro.jpg'
import Title from './../../components/Title/index'
import Color from './../../constants/Color'
import { SocialButtonData, Card1Data, Card2Data, Card3Data } from './HomeData'
import useGlobalStates from './../../store/globalStates/useGlobalStates'
import LayoutContent from './../../components/UI/LayoutContent/index'
import Card1 from './../../components/UI/Card1/index'
import Card2 from './../../components/UI/Card2/index'
import Card3 from './../../components/UI/Card3/index'
import ContactForm from './../../components/ContactForm/index'

const HomePage = () => {
  const { state } = useGlobalStates()

  return (
    <HomePageContainer>
      <ContentContainer id='home'>
        <HomeContainer>
          <Avatar src={avtImg} alt='Hoàng Ngọc Thịnh' />
          <Introduce>
            <Title
              size='size-m'
              colorLightMode={Color.color9}
              colorNightMode={Color.color7}
            >
              Hoàng Ngọc Thịnh
            </Title>
            <p>I'm a Front End Web Developer</p>
            <a
              href='http://hnthinh17485.ml'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button title='Download My CV' />
            </a>
          </Introduce>
          <SocialNetwork>
            {SocialButtonData.map(item => (
              <a
                key={uuidv4()}
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconButton isNightMode={state.isNightMode}>
                  {item.icon}
                </IconButton>
              </a>
            ))}
          </SocialNetwork>
        </HomeContainer>
      </ContentContainer>
      <ContentContainer id='about'>
        <LayoutContent title='About Me'>
          <AboutContentWrapper isMenuOpen={state.isMenuOpen}>
            <AboutText>
              <p>
                I am the kind of positive, inspire everyone. I want to become
                who can lead everyone and pioneer in everything. I like
                innovation, advancement. I can walk by myself and by my way. I
                am not afraid of walking alone.
              </p>
              <p>
                <Span isNightMode={state.isNightMode}>Objective:</Span> Bring
                technology closer to everyone. Make our life is simple,
                convenient. I like creativity, innovatity and advanment. I wan
                to be pioneer. And I will be.
              </p>
              <p>
                Life Motto: If others can do it, I should be able to do it too.
                If I can do it, others can too. If no one can do it, I will be
                the one to do it.
              </p>
            </AboutText>
            <AboutImage src={introImg} alt='About Me'></AboutImage>
          </AboutContentWrapper>
        </LayoutContent>
      </ContentContainer>
      <ContentContainer id='services'>
        <LayoutContent
          title='Our Services'
          intro="What can I do? If you have a dream-app, but you still haven't implemented it, I will be the one to help you achieve that dream-app. Soon!!!! I make the dream come true"
        >
          <ServicesContentWrapper isMenuOpen={state.isMenuOpen}>
            {Card1Data.map(item => (
              <Card1
                key={uuidv4()}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            ))}
          </ServicesContentWrapper>
        </LayoutContent>
      </ContentContainer>
      <ContentContainer id='project'>
        <LayoutContent
          title='Recent Work'
          intro='So, what dreams have I helped make it come true? What have i done?'
        >
          <ProjectContentWrapper isMenuOpen={state.isMenuOpen}>
            {Card2Data.map(item => (
              <Card2 key={uuidv4()} image={item.imgSrc} title={item.title} />
            ))}
          </ProjectContentWrapper>
        </LayoutContent>
      </ContentContainer>
      <ContentContainer id='testimonials'>
        <LayoutContent
          title='Testimonials'
          intro='A year of experence - over 5 projects - 10+ happy clients!'
        >
          <TestimonialsContentWrapper isMenuOpen={state.isMenuOpen}>
            {Card3Data.map(item => (
              <Card3
                key={uuidv4()}
                image={item.imgSrc}
                content={item.content}
                author={item.author}
                tag={item.tag}
              />
            ))}
          </TestimonialsContentWrapper>
        </LayoutContent>
      </ContentContainer>
      <ContentContainer id='contact'>
        <LayoutContent
          title="Let's say hi"
          intro="Don't hesitate to contact me!"
        >
          <ContactContentWrapper>
            <ContactForm />
          </ContactContentWrapper>
        </LayoutContent>
      </ContentContainer>
    </HomePageContainer>
  )
}

export default HomePage
