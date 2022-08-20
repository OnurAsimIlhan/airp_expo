import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'
import { StarIcon as StartIconSolid } from 'react-native-heroicons/solid'


const VisitList = ({
  id,
  icon,
  title,
  rating,
  place,
}) => {
  return (
    <TouchableOpacity className='bg-white mx-2 rounded-lg border-2 border-gray-200'>
      <Image source={icon}
        className='h-40 w-60 rounded-t-lg'
      />
      
      <View className='flex-row justify-between'>
        <View>
          <Text className='text-left mx-2 my-1 font-bold'>{title}</Text>
          <View className='flex-row mx-2'>
            <StartIconSolid size={15} color="green"/>
            <StartIconSolid size={15} color="green"/>
            <StartIconSolid size={15} color="green"/>
            <StartIconSolid size={15} color="green"/>
            <StarIcon size={15} color="green"/>
          </View>
            <Text className='text-left mx-2 my-1 text-sm color-gray-500'>{place}</Text>
          
        </View>
        
        <TouchableOpacity className='mr-2'>
          <Image source={require('../assets/route.png')}
          className='h-8 w-8 mx-2 mt-2'
          />
          <Text className='font-bold text-xs'>Hızlı Rota</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default VisitList