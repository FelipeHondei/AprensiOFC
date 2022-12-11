import React, { useEffect } from 'react'
import { Text, Logo, Container } from '../../components'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 1000)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text fontFamily="bold" size={24} mt={12}>
        DISS - Aprensi
      </Text>
    </Container>
  )
}