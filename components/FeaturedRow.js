import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import VisitList from './VisitList';
import EatList from './EatList';

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg '>{title}</Text>
        <ArrowRightIcon color="#00BB" />
      </View>
      <Text className="text xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainer={{
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-2 px-2'
      >
        <VisitList
          icon={require('../assets/anitkabir.jpg')}
          title="Anıtkabir"
          rating={4.5}
          place="Ankara, Çankaya"
        />
        <VisitList
          icon={require('../assets/anadolumedeniyet.jpg')}
          title="Medeniyetler Müzesi"
          rating={4.5}
          place="Ankara, Ulus"

        />
        <EatList
          icon={require('../assets/ankarakalesi.jpg')}
          title="Ankara Kalesi"
          rating={4.5}
          place="Ankara, Altındağ"

        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;