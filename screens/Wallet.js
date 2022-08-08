import { View, Text, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import CreditCards from '../components/CreditCards';

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
    <View>
      <View className='m-5 flex-row justify-between bg-[#72cfe7ff] rounded-xl'>
        <Text className='my-8 mx-2'>Mevcut Bakiye: 52.45 ₺</Text>
        <Image source={require('../assets/tlicon.png')}
          className='h-16 w-16 mx-4 my-2'
        />
      </View>

      <Text className='mx-7'>Kartlarım</Text>
      <ScrollView
        horizontal
        contentContainer={{
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-2 px-2'
      >
        <CreditCards/>
        <CreditCards/>
        <CreditCards/>
        <CreditCards/>
        <CreditCards/>
        <CreditCards/>
        <CreditCards/>
      </ScrollView>
    </View>
  )
}

export default Wallet