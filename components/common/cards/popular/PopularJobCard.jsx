import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './popularjobcard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { checkImageURL } from '../../../../utils'
import { DEFAULT_JOB_LOGO } from '../../../../constants'

const PopularJobCard = ({ item, handleCardPress, selectedJob }) => {
  return item ? (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : DEFAULT_JOB_LOGO,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher}
          </Text>
          <Text style={styles.location}>{item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  ) : null
}

export default PopularJobCard
