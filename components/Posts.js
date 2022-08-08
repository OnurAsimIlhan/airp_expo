import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CalendarIcon } from 'react-native-heroicons/outline'
import { ClockIcon } from 'react-native-heroicons/solid'

const Posts = ({
  id,
  icon,
  title,
  rating
}) => {
  return (
    <TouchableOpacity className='mx-4 my-2 w-96 rounded-lg bg-white'>
      <Image source={icon}
        className='h-60 w-96 rounded-t-lg'
      />
      <View className='flex-row my-2  justify-between '>
        <View className='flex-row mx-1'>
         <CalendarIcon size={20} color="black"/>
          <Text> 12.04.2022</Text>
        </View>
        <View className='flex-row mx-1'>
         <ClockIcon size={20} color="black"/>
          <Text> 45 min</Text>
        </View>
        
      </View>
    </TouchableOpacity>
  )
}

export default Posts