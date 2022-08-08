import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff"
      },
      headerTitleAlign: "center",
      title:"Ayarlar"
    });
  }, []);
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings