import React from 'react'
import { useAppSelector } from '../app/store'
import Splash from '../screens/Splash'

const Navigation: React.FC = () => {
  const isLogin = useAppSelector(state => state.user.isLogin)

  if (!isLogin) {
    return <Splash />
  }

  return (
    <>
    </>
  )
}

export default Navigation
