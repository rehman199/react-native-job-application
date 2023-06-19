import React from 'react'
import { View, Text, Image, Linking } from 'react-native'

import styles from './footer.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { icons } from '../../../constants'

const JobFooter = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for the job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default JobFooter
