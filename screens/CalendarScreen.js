import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Agenda } from 'react-native-calendars';
import LoadingScreen from './LoadingScreen';

const CalendarScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff"
      },
      headerTitleAlign: "center",
      title:"Takvim"
    });
  }, []);

  return (
    <View classnName='flex-1'>
    </View>
  )
}

export default CalendarScreen