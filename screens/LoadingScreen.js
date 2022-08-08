import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import * as Animateable from 'react-native-animatable'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
const LoadingScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 3000)
    }, [])
    return (
        <SafeAreaView className='flex-1 justify-center items-center bg-[#72cfe7ff]'>
            <Animateable.Image
                source={require("../assets/loading.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"

            />

        </SafeAreaView>
    )
}

export default LoadingScreen