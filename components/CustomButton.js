import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ name, destionation, bgcolor, fontcolor }) => {

  const navigation = useNavigation();

  return (
    <Pressable
      backgroundColor={bgcolor}
      onPress={() => {
        navigation.navigate(destionation)
      }}
      className='h-10 w-100 mx-5 my-2 rounded-md'
    >
      <Text
        color={fontcolor}
        className='text-center justify-content m-2 font-bold'>{name}</Text>
    </Pressable>
  )
}


export default CustomButton