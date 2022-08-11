import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import { auth, db, str } from '../firebase';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native-web';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');

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
    <View className='mt-4'>
      <View className='items-center'>
        {image ? <Image source={{ uri: image.uri }} className='w-40 h-40 rounded-full' /> : <Image source={{ uri: user?.userImg }}
          className='h-40 w-40 rounded-full'
        />}
        <View className='flex-row'>
          <TouchableOpacity className='bg-[#72cfe7ff] rounded-lg mt-2 mx-5 w-32 h-10 justify-center' onPress={pickImage}>
            <Text className='text-center'>
              Pick Picture
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-[#72cfe7ff] rounded-lg mt-2 mx-5 w-32 h-10 justify-center' onPress={uploadImage}>
            <Text className='text-center'>Upload Image</Text>
          </TouchableOpacity>
        </View>

      </View>
      <CustomInput placeholder={user?.username} value={username} setValue={setUsername} secureTextEntry={false} />
      <CustomInput placeholder={user?.username} value={username} setValue={setUsername} secureTextEntry={false} />
      <CustomInput placeholder={user?.username} value={username} setValue={setUsername} secureTextEntry={false} />
      <CustomInput placeholder={user?.username} value={username} setValue={setUsername} secureTextEntry={false} />
      <CustomInput placeholder={user?.username} value={username} setValue={setUsername} secureTextEntry={false} />
      <View className='items-center mt-10'>
        <TouchableOpacity className='bg-[#72cfe7ff] rounded-lg mt-2 mx-1 w-32 h-10 justify-center' onPress={updateClicked}>
          <Text className='text-center'>update</Text>
        </TouchableOpacity>
      </View>
      




    </View>

  )
}

export default EditProfile