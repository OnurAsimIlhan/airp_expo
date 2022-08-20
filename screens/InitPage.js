import { View, Text, TouchableOpacity, Image, Pressable, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import { useState } from 'react';
import {auth} from '../firebase';
import LoadingScreen from './LoadingScreen';
import * as Animateable from 'react-native-animatable'

const InitPage = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("LoadingScreen")
      }
    })
    return unsubscribe
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({name:email})
      })
      .catch(error => alert(error.message))
  }

  

  const onInitForgetPassword = () => {
    navigation.navigate("InitForgetPass")
  }
  const onCreateAccount = () => {
    navigation.navigate("SignUp")
  }
  const onSignInWithGoogle = () => {
    navigation.navigate("LoadingScreen")
  }
  const onSignInWithFacebook = () => {
    navigation.navigate("Home")
  }

  return (
    <ScrollView className='bg-[#72cfe7ff]'>
      <View>
        <View className='items-center'>
          <SafeAreaView className='flex-1 mt-20 mb-5 items-center bg-[#72cfe7ff]'>
            <Animateable.Image
                source={require("../assets/loading.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-64 w-64"
            />
        </SafeAreaView>
          <Text className='font-bold text-xl'>~APP NAME~</Text>
        </View>

        <CustomInput placeholder="Email" value={email} setValue={setEmail} secureTextEntry={false} />

        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

        <Pressable
          onPress={handleLogin}
          className='h-10 w-100 mx-5 my-3 bg-blue-500 rounded-lg'
        >
          <Text className='p-2.5 text-center color-white font-bold'>Sign In</Text>
        </Pressable>

        <Pressable
          onPress={onInitForgetPassword}
          className='h-8 mx-4 my-2 rounded-lg'
          type="TERTIARY"
        >
          <Text className='text-center m-1 color-gray-600'>Forget Password?</Text>
        </Pressable>

        <Pressable
          onPress={onCreateAccount}
          className='h-8 mx-4 my-2 rounded-lg'
        >
          <Text className='text-center m-1 color-gray-600'>Don't have an account? <Text className='color-blue-600 font-bold'>Create one!</Text></Text>
        </Pressable>

        <Pressable
          onPress={onSignInWithGoogle}
          className='h-10 w-100 mx-5 my-2 bg-red-500 rounded-lg'
        >
          <Text className='text-center p-2.5 color-white font-bold'>Sign In with Google</Text>
        </Pressable>

        <Pressable
          onPress={onSignInWithFacebook}
          className='h-10 w-100 mx-5 my-2 bg-blue-400 rounded-lg'
        >
          <Text className='text-center p-2.5 color-white font-bold'>Sign In with Facebook</Text>
        </Pressable>


      </View>
      

    </ScrollView>
  )
}

export default InitPage