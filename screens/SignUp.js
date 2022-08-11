import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import {auth, db} from '../firebase';
import {uid} from 'uid';
const SignUp = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const uuid = uid();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onBackToInit = () => {
    navigation.navigate("InitPage")
  }
  
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        db.collection('users').doc(auth.currentUser.uid).set({
          email: email,
          username: username,
          uid: user.uid,
          userImg: 'https://firebasestorage.googleapis.com/v0/b/airpreneursfb.appspot.com/o/user.png?alt=media&token=6b8cfab9-4aa6-40de-98bc-878b681d6a9d'
        }).then(() => {
          setUsername ='';
          setEmail = ''
        })
      })
      .catch(error => alert(error.message))
    
  }

  return (
    <View className='bg-blue-100 flex-1'>
      <Text className='font-bold text-center text-3xl pt-20 color-blue-500'>Create Account</Text>
      <View className='my-10'>
        <CustomInput placeholder="Username"
          value={username}
          setValue={setUsername} />
        <CustomInput placeholder="Email"
          value={email}
          setValue={setEmail} />
        <CustomInput placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true} />
        <CustomInput placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true} />
      </View>

      <Pressable
        onPress={handleSignUp}
        className='h-10 w-100 mx-5 my-3 bg-blue-500 rounded-lg'
      >
        <Text className='p-2.5 text-center color-white font-bold'>Create Account</Text>
      </Pressable>
      <Text className='mx-3 color-blue-500'>By registering, you confirm that you accept our <Text className='color-yellow-500 font-extrabold'> Terms of Use <Text className='font-normal color-blue-500'>and</Text> Privacy Policy</Text></Text>

      <Pressable
        onPress={onBackToInit}
        className='h-8 mx-4 my-2 rounded-lg'
      >
        <Text className='text-center m-1 color-gray-500'>Already have an account? <Text className='color-blue-500 font-bold'>Sign In!</Text></Text>
      </Pressable>
    </View>
  )
}

export default SignUp



