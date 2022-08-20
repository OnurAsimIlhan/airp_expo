import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, CashIcon, BellIcon, CogIcon } from 'react-native-heroicons/solid';
import * as Animateable from 'react-native-animatable'



import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaView className="bg-[#72cfe7ff]">
      <View className="flex-row pb-3 items-center mx-2 space-x-2 px-2 ">

        <Animateable.Image
          source={require("../assets/loading.gif")}
          animation=""
          iterationCount={1}
          className="h-12 w-12 mr-1 mt-1"
        />


        <View className="flex-1">
          <Text className='font-bold text-gray-500 text-xs'>Hızlı Rota!</Text>
          <Text className='font-bold text-xl'>Konumum
            <ChevronDownIcon size={20} color="#00BB" />
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Wallet")
          }}
        >
          <CashIcon size={35} color="#DF4C2C" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Notification")
          }}
        >
          <BellIcon size={35} color="#DF4C2C" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings")
          }}
        >
          <CogIcon size={35} color="#DF4C2C" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profil")
          }}
        >
          <UserIcon size={35} color="#DF4C2C" />
        </TouchableOpacity>

      </View>
      <ScrollView className='bg-gray-100'>
        <Categories />
        <FeaturedRow
          title="Yakındaki Harikalar"
          description="Konumuna yakın tarihi yerler ve efsane yiyecekler"
        />
        <FeaturedRow
          title="Yakındaki Harikalar"
          description="Konumuna yakın tarihi yerler ve efsane yiyecekler"
        />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;