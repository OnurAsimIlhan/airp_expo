import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const CategoryCard = ({ icon, title }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CallTaxi")
      }}
    >
      <Image source={icon}
        className='h-20 w-20 mx-4 my-2'
      />
      <Text className='mx-4 my-2'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard