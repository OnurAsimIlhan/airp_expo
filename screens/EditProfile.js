import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff"
      },
      headerTitleAlign: "center",
      title:"Edit Profile"
    });
  }, []);
  return (
    <View>
      <Text>EditProfile</Text>
    </View>
  )
}

export default EditProfile