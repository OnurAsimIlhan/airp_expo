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
        <TouchableOpacity className='border-2 border-black rounded-xl' onPress={toggle}>
            {state ? <Image source={icon} className='h-20 w-20 rounded-xl bg-[#72cfe7ff]'/> : <Image source={icon} className='h-20 w-20 rounded-xl'/>}
        </TouchableOpacity>

    )
}

export default Unit