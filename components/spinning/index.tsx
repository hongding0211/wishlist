import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { View } from 'react-native'

const Spinning: React.FC = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faCircleNotch} />
    </View>
  )
}

export default Spinning
