
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigatorLogged from './Tabs/UserLogged'
import { useSelector } from 'react-redux'
import AuthStack from './Stacks/Auth'

const MainNavigator = () => {
  const {user}=useSelector(state=>state.auth.value)


  return (
    <NavigationContainer>
    {user.email ?

      <TabNavigatorLogged/>
      :
      <AuthStack/>}
    </NavigationContainer>
  )
}

export default MainNavigator 