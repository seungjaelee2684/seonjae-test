import React from 'react'
import Header from './Header'


const Layout = ({ children }) => {
  const bgStyle = {
    backgroundImage: 'url(/images/bg.png)',

  }
  return (
    <div
      className="bg-mbti-yellow bg-repeat h-full px-4 overflow-auto font-pretendard"
      style={bgStyle}>
      <div className="h-full flex flex-col">
        <Header />
        <main className="px-4 h-full w-full max-w-lg mx-auto pt-12.5"> {children}</main>
      </div>
    </div>
  )
}

export default Layout
