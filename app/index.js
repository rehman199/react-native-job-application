import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import { icons } from '../constants'
import { COLORS, SIZES } from '../constants/theme'
import Nearbyjobs from '../components/home/nearby/Nearbyjobs'
import Popularjobs from '../components/home/popular/Popularjobs'
import Welcome from '../components/home/welcome/Welcome'

const App = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.heart} dimension="100%" />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
