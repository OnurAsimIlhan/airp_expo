import { View, Text, TouchableOpacity, SafeAreaView, Image, Pressable, StyleSheet, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import VisitList from '../components/VisitList'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import Posts from '../components/Posts'

const Profil = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff"
      },
      headerTitleAlign: "center",
      title:"Profil"
    });
  }, []);

  const editProfile = () => {
    navigation.navigate("EditProfile")
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("InitPage")
      })
      .catch(error => alert(error.message))
  }

  return (
    
    <ScrollView className='bg-gray-100'>
      <SafeAreaView className=''>
        
        <View className='items-center'>
          <View className='w-40 h-40 justify-center mt-20 mb-5 rounded-full'>
            <Image source={require('../assets/gandalf.png')}
              className='h-40 w-40 my-20 p-10 rounded-full' 
            />
          </View>
          <Text>You are signed in with: {auth.currentUser?.email}</Text>
        </View>
        <View className='flex-row justify-center'>
          <Pressable
            onPress={editProfile}
            className='h-10 w-100 mx-5 my-3 bg-blue-500 rounded-lg'
          >
            <Text className='p-2.5 text-center color-white font-bold'>Edit Profile</Text>
          </Pressable>
          <Pressable
            onPress={handleSignOut}
            className='h-10 w-100 mx-5 my-3 bg-blue-500 rounded-lg'
          >
            <Text className='p-2.5 text-center color-white font-bold'>  Sign Out  </Text>
          </Pressable>
        </View>

        <View className= 'flex-row justify-around w-full mb-5 mt-4'>
          <View className='w-20 h-20 justify-center'>
            <Text className='font-bold text-lg  text-center mb-1'>111</Text>
            <Text className='text-center text-xs color-gray-500'>Posts</Text>
          </View>
          <View className='w-20 h-20 justify-center'>
            <Text className='font-bold text-lg  text-center mb-1'>10,000</Text>
            <Text className='text-center text-xs color-gray-500'>Followers</Text>
          </View>
          <View className='w-20 h-20 justify-center'>
            <Text className='font-bold text-lg  text-center mb-1'>100</Text>
            <Text className='text-center text-xs color-gray-500'>Following</Text>
          </View>
        </View>
        <Text className='font-bold mx-5'>Recent Routes</Text>
        <Posts
          icon={require('../assets/navigationscreen.png')}
          title="galata kulesi"
          rating={4.5}
          place="recent"
        />
        <Posts
          icon={require('../assets/navigationscreen.png')}
          title="galata kulesi"
          rating={4.5}
          place="recent"
        />
        <Posts
          icon={require('../assets/navigationscreen.png')}
          title="galata kulesi"
          rating={4.5}
          place="recent"
        />
        
      </SafeAreaView>
    </ScrollView>
  )
}

export default Profil
const styles = StyleSheet.create({

  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});






