import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { checkImageURL } from '../../../utils'
import { DEFAULT_JOB_LOGO, icons } from '../../../constants'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logoImage}
          resizeMode="contain"
          source={{
            uri: checkImageURL(companyLogo) ? companyLogo : DEFAULT_JOB_LOGO,
          }}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company
