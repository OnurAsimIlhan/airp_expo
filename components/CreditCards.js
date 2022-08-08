import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CreditCards = () => {
    return (
        <View>
            <TouchableOpacity>
                <Image source={require('../assets/creditcardexp.png')}
                    className='h-28 w-48 mx-4 my-2'
                />
            </TouchableOpacity>
        </View>
    )
}

export default CreditCards