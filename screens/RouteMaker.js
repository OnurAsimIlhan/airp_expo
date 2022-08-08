import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import LoadingScreen from './LoadingScreen'
import { useNavigation } from '@react-navigation/native';

const RouteMaker = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff"
      },
      headerTitleAlign: "center",
      title:"Rota Oluştur"
    });
  }, []);
  return (
    <View>
    </View>
  )
}

export default RouteMaker