import React from 'react'
import { FooterContainer } from './FooterElements'

const Footer = () => {
  let d = new Date()
  let year = d.getFullYear()

  return (
    <FooterContainer>
      <p>Copyright &copy; {year} Hoàng Ngọc Thịnh. All Right Reserved.</p>
    </FooterContainer>
  )
}

export default Footer
