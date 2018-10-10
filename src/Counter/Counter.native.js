import React from "react"
import {
  View,
  Text,
  Button
} from "react-native"

const Counter = ({ increase, decrease, count }) => (
  <View>
    <Button onPress={increase} title="Increase"/>
    <Text>
      {count}
    </Text>
    <Button onPress={decrease} title="Decrease"/>
  </View>
)

export default Counter
