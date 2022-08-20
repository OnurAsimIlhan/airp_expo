import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="flex-row justify-between mx-5 my-3">

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CallTaxi")
          }}
          className='border-2 rounded-xl'
        >
          <Image source={require('../assets/taxi.png')}
            className='h-20 w-20 mx-4 my-2'
          />
          <Text className='mx-4 my-2 text-center font-extrabold'>Taksi Çağır</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RouteMaker")
          }}
          className='border-2 rounded-xl'
        >
          <Image source={require('../assets/distance.png')}
            className='h-20 w-20 mx-4 my-2 '
          />
          <Text className='mx-4 my-2 text-center font-extrabold'>Rota Oluştur</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='border-2 rounded-xl'
        >
          <Image source={require('../assets/checkin.png')}
            className='h-20 w-20 mx-4 my-2'
          />
          <Text className='mx-4 my-2 text-center font-extrabold'>Check-in</Text>
        </TouchableOpacity>

      </View>
      <View className="flex-row mx-5 my-2 justify-between">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CalendarScreen")
          }}
          className='border-2 rounded-xl'
        >
          <Image source={require('../assets/calendar.png')}
            className='h-20 w-20 mx-4 my-2'
          />
          <Text className='mx-4 my-2 text-center font-extrabold'>Takvim</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='border-2 rounded-xl'
        >
          <Image source={require('../assets/car-rent.png')}
            className='h-20 w-20 mx-4 my-2'
          />
          <Text className='mx-4 my-2 text-center font-extrabold'>Araç Kirala</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='border-2 rounded-xl'
        >
          <Image source={require('../assets/favicon.png')}
            className='h-20 w-20 mx-4 my-2'
          />
          <Text className='mx-4 my-2 text-center font-extrabold'>testing</Text>
        </TouchableOpacity>
      </View>
    </View>


  )
}

export default Categories