import { View, Text, Button, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Unit from './Unit'
import CustomInput from './CustomInput'

const TransportUnits = () => {

    return (
        <View className='mx-5 my-5'>
            <View className='flex-row justify-between p-2'>
                <Unit icon={require('../assets/taxi.png')} />
                <Unit icon={require('../assets/car.png')} />
                <Unit icon={require('../assets/bicycle.png')} />
            </View>
            <View className='flex-row justify-between p-2'>
                <Unit icon={require('../assets/tram-front-view.png')} />
                <Unit icon={require('../assets/seoul-metro-logo.png')} />
                <Unit icon={require('../assets/walk.png')} />
            </View>
            <View className='flex-row justify-between p-2'>
                <Unit icon={require('../assets/scooter.png')} />
                <Unit icon={require('../assets/bus.png')} />
                <Unit icon={require('../assets/route.png')} />
            </View>
            <View className='h-10 my-2 mt-10 bg-gray-200 rounded-lg'>
                <TextInput
                    className='mx-2 p-1'
                    placeholder="starting point"
                />
            </View>
            <View className='h-10 my-2 bg-gray-200 rounded-lg'>
                <TextInput
                    className='mx-2 p-1'
                    placeholder="starting point"
                />
            </View>

            <View className='flex-row justify-between'>
                <View className='h-10 w-44 my-2 bg-gray-200 rounded-lg'>
                    <TextInput
                        className='mx-2 p-1'
                        placeholder="starting point"
                    />
                </View>
                <View className='h-10 w-44 my-2 bg-gray-200 rounded-lg'>
                    <TextInput
                        className='mx-2 p-1'
                        placeholder="starting point"
                    />
                </View>
            </View>
            <View className='items-center mt-10'>
                <TouchableOpacity
                    className='h-10 w-40 mx-5 my-2 bg-[#72cfe7ff] rounded-lg'
                >
                    <Text className='text-center p-2.5 color-white font-bold'>Generate Route</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default TransportUnits