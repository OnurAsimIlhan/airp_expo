import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import {auth, db} from '../firebase';


const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff"
      },
      headerTitleAlign: "center",
      title:"Edit Profile"
    });
  }, []);
  const updateClicked = () => {
    db.collection('users').doc(auth.currentUser.uid).update({username:username})
  }
  return (
    <View>
      <CustomInput placeholder="Name" value={username} setValue={setUsername} secureTextEntry={false} />
      <TouchableOpacity onPress={updateClicked}>
        <Text>update</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default EditProfile