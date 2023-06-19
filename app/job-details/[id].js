import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native'
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn'
import Company from '../../components/jobdetails/company/Company'
import { COLORS, SIZES, icons } from '../../constants'
import useFetch from '../../hooks/use-fetch'
import Tabs from '../../components/jobdetails/tabs/Tabs'
import Specifics from '../../components/jobdetails/specifics/Specifics'
import JobAbout from '../../components/jobdetails/about/About'
import JobFooter from '../../components/jobdetails/footer/Footer'

const tabs = ['About', 'Qualifications', 'Responsibilities']

export default JobDetails = () => {
  const params = useSearchParams()
  const router = useRouter()

  const [refreshing, setRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState(tabs[0])

  const { data, isLoading, error, refetch } = useFetch(`job-details`, {
    job_id: params.id,
  })

  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return (
          <Specifics
            title="Qualifications"
            points={
              data?.job_highlights?.qualifications ?? ['No data available']
            }
          />
        )
      case 'About':
        return <JobAbout info={data.job_description ?? 'No data available'} />
      case 'Responsibilities':
        return (
          <Specifics title="Responsibilities" points={['No data available']} />
        )
    }
  }

  const onRefresh = () => {}

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          title: 'Details',
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerBackVisible: false,
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: '',
        }}
      ></Stack.Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} size="large" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text> No Data</Text>
        ) : (
          <View
            style={{
              padding: SIZES.medium,
              paddingBottom: 100,
            }}
          >
            <Company
              companyName={data?.employer_name}
              companyLogo={data?.employer_logo}
              jobTitle={data?.job_title}
              location={data?.job_country}
            />
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter url="https://careers.google.com/jobs/results" />
    </SafeAreaView>
  )
}
