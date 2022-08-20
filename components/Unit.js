import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const Unit = ({
    icon,
}) => {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    }
    return (
        <TouchableOpacity className='border-4 border-[#72cfe7ff] rounded-full' onPress={toggle}>
            {state ? <Image source={icon} className='h-20 w-20 rounded-full bg-[#72cfe7ff]'/> : <Image source={icon} className='h-20 w-20 rounded-full'/>}
        </TouchableOpacity>

    )
}

export default Unit