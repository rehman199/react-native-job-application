import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hooks/use-fetch'
import { COLORS, SIZES } from '../../../constants'

const Popularjobs = () => {
  const router = useRouter()

  const { data, error, isLoading } = useFetch('search', {
    query: 'Ruby on rails developer',
    num_pages: '1',
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <>
            <FlatList
              data={data}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                  handleCardPress={() => {}}
                  selectedJob={item}
                  key={item?.job_id}
                />
              )}
              keyExtractor={(item) => item?.job_id}
              horizontal
            />
          </>
        )}
      </View>
    </View>
  )
}

export default Popularjobs
