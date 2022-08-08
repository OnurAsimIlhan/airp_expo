import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Wallet = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff",
      },
      headerTitleAlign: "center",
      
      title:"Cüzdan"
    });
  }, []);

  return (
    <View className='p-10'>
      <Text>Mevcut Bakiye</Text>
    </View>
  )
}

export default Wallet