import React from 'react'
import { Image, Text, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { checkImageURL } from '../../../../utils'
import styles from './nearbyjobcard.style'
import { DEFAULT_JOB_LOGO } from '../../../../constants'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return job ? (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : DEFAULT_JOB_LOGO,
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  ) : null
}

export default NearbyJobCard
