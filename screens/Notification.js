import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff"
      },
      headerTitleAlign: "center",
      title:"Bildirimler"
    });
  }, []);
  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification