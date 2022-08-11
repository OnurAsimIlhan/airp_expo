import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import { auth, db, str } from '../firebase';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native-web';
import { MailIcon, UserCircleIcon, UserIcon } from 'react-native-heroicons/outline';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [email, setEmail] = useState('');
  const [hasGalleryPermit, setGalleryPermit] = useState(null);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: "#72cfe7ff"
      },
      headerTitleAlign: "center",
      title: "Edit Profile"
    });
  }, []);

  const updateClicked = () => {
    db.collection('users').doc(auth.currentUser.uid).update({ username: username })
    db.collection('users').doc(auth.currentUser.uid).update({ userImg: imageUrl })
  }


  const [user, setUser] = useState();
  const getUser = async () => {
    try {
      const documentSnapshot = await db
        .collection('users')
        .doc(auth.currentUser.uid)
        .get();

      const userData = documentSnapshot.data();
      setUser(userData);
    } catch {
      //do whatever
    }
  };

  const getUrl = () => {
    str
      .ref('/' + user?.uid) //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
      })
  };

  // Get user on mount
  useEffect(() => {
    getUser();

  }, []);


  const [uploading, setUploading] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    const source = { uri: result.uri };
    console.log(result);
    setImage(source);
  }


  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri)
    const blob = await response.blob()
    const filename = user?.uid
    var ref = str.ref().child(filename).put(blob);
    try {
      await ref;
    } catch (e) {
      console.log(e);
    }
    setUploading(false);
    Alert.alert('photo uploaded')
    getUrl()
  }

  return (
    <View className='mt-16'>
      <View className='items-center mt-4'>
        {image ? <Image source={{ uri: image.uri }} className='w-40 h-40 rounded-full' /> : <Image source={{ uri: user?.userImg }}
          className='h-40 w-40 rounded-full'
        />}
        <View className='flex-row'>
          <TouchableOpacity className='bg-[#72cfe7ff] rounded-lg mt-5 mx-5 w-32 h-10 justify-center' onPress={pickImage}>
            <Text className='text-center font-bold'>
              Pick Image
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-[#72cfe7ff] rounded-lg mt-5 mx-5 w-32 h-10 justify-center' onPress={uploadImage}>
            <Text className='text-center font-bold'>Upload Image</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View className='flex-row mt-10'>
        <View className='m-1 my-4'>
          <UserIcon className='' size={20} color={"#000"} />
        </View>
        <View className='h-10 m-2 mx-2 my-2 bg-gray-200 rounded-lg'>
          <TextInput
            className='mx-2 p-1 w-80'
            value={username}
            onChangeText={setUsername}
            placeholder={user?.username}
            secureTextEntry={false}
          />
        </View>
      </View>

      <View className='flex-row'>
        <View className='m-1 my-4'>
          <MailIcon className='' size={20} color={"#000"} />
        </View>
        <View className='h-10 m-2 mx-2 my-2 bg-gray-200 rounded-lg'>
          <TextInput
            className='mx-2 p-1 w-80'
            value={email}
            onChangeText={setEmail}
            placeholder={user?.email}
            secureTextEntry={false}
          />
        </View>
      </View>

      <View className='flex-row'>
        <View className='m-1 my-4'>
          <Image source={require("../assets/gender.png")} className='w-6 h-6' />
        </View>
        <View className='h-10 m-2 mx-2 my-2 bg-gray-200 rounded-lg'>
          <TextInput
            className='mx-2 p-1 w-80'
            value={username}
            onChangeText={null}
            placeholder={"Male"}
            secureTextEntry={false}
          />
        </View>
      </View>

      
      <View className='items-center mt-10'>
        <TouchableOpacity className='bg-[#72cfe7ff] rounded-lg mt-2 mx-1 w-32 h-10 justify-center' onPress={updateClicked}>
          <Text className='text-center font-bold'>Update Profile</Text>
        </TouchableOpacity>
      </View>





    </View>

  )
}

export default EditProfile