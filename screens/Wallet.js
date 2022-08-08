import { View, Text, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import CreditCards from '../components/CreditCards';
import { PlusCircleIcon, UserAddIcon } from 'react-native-heroicons/outline';

const Wallet = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: "#72cfe7ff",
      },
      headerTitleAlign: "center",

      title: "Cüzdan"
    });
  }, []);

  return (
    <ScrollView>
      <View className='m-5 flex-row justify-between bg-[#72cfe7ff] rounded-xl'>
        <Image source={require('../assets/wallet.png')}
          className='h-16 w-16 mx-4 my-2'
        />
        <Text className='my-8 mx-2 font-bold'>Mevcut Bakiye: 52.45 ₺</Text>
        <Image source={require('../assets/tlicon.png')}
          className='h-16 w-16 mx-4 my-2 rounded-full'
        />
      </View>

      <Text className='mx-7 font-bold'>Kartlarım</Text>
      <ScrollView
        horizontal
        contentContainer={{
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-2 px-2'
      >
        <CreditCards />
        <CreditCards />
        <CreditCards />
        <CreditCards />
        <CreditCards />

      </ScrollView>
      <View className='items-end mx-2'>
        <PlusCircleIcon size={40} color={"black"} />
      </View>


      <Text className='font-bold mx-7'>Son İşlemler</Text>

      <View className='mx-5 my-2 flex-row justify-between bg-[#72cfe7ff] rounded-xl'>
        <Text className='font-bold mx-2 my-5'>Taksi        -52.45 ₺ </Text>
        
        <Text className='font-bold mx-2 my-5'>Detaylar</Text>
      </View>

      <View className='mx-5 my-2 flex-row justify-between bg-[#72cfe7ff] rounded-xl'>
        <Text className='font-bold mx-2 my-5'>Taksi        -52.45 ₺ </Text>
        
        <Text className='font-bold mx-2 my-5'>Detaylar</Text>
      </View>

      <View className='mx-5 my-2 flex-row justify-between bg-[#72cfe7ff] rounded-xl'>
        <Text className='font-bold mx-2 my-5'>Taksi        -52.45 ₺ </Text>
        
        <Text className='font-bold mx-2 my-5'>Detaylar</Text>
      </View>

      <View className='mx-5 my-2 flex-row justify-between bg-[#72cfe7ff] rounded-xl'>
        <Text className='font-bold mx-2 my-5'>Taksi        -52.45 ₺ </Text>
        
        <Text className='font-bold mx-2 my-5'>Detaylar</Text>
      </View>
      
      <View className='mx-5 my-2 flex-row justify-between bg-[#72cfe7ff] rounded-xl'>
        <Text className='font-bold mx-2 my-5'>Taksi        -52.45 ₺ </Text>
        
        <Text className='font-bold mx-2 my-5'>Detaylar</Text>
      </View>

      
      

    </ScrollView>
  )
}

export default Wallet