import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View className='h-10 m-2 mx-5 my-2 bg-gray-100 rounded-lg'>
      <TextInput
        className='mx-2 p-1'
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default CustomInput