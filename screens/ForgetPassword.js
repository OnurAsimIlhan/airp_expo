import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';

const ForgetPassword = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [code, setCode] = useState('');
  const onResetPassword = () => {
    navigation.navigate("ResetPassword")
  }
  const onBackToInit = () => {
    navigation.navigate("InitPage")
  }
  const onForgetPassword = () => {
    navigation.navigate("ForgetPassword")
  }
  return (
    <View className='bg-blue-100 flex-1'>
      <Text className='font-bold text-center text-3xl pt-20 color-blue-500'>Confirm Email</Text>
      <View className='my-5'>
        <CustomInput placeholder="Confirmation Code"
          value={code}
          setValue={setCode} />
      </View>

      <Pressable
        onPress={onResetPassword}
        className='h-10 w-100 mx-5 my-3 bg-blue-500 rounded-lg'
      >
        <Text className='p-2.5 text-center color-white font-bold'>Confirm</Text>
      </Pressable>

      <Pressable
        onPress={onForgetPassword}
        className='h-10 w-100 mx-5 my-2 bg-white rounded-lg'
      >
        <Text className='p-2.5 text-center color-black'>Resend Code</Text>
      </Pressable>

      <Pressable
        onPress={onBackToInit}
        className='h-8 mx-4 my-2 rounded-lg'
      >
        <Text className='text-center m-1 color-gray-500'>Back to Sign in</Text>
      </Pressable>



    </View>
  )
}

export default ForgetPassword



