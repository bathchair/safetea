import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';


export default function TabTwoScreen() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Profile</Text>
      <EditScreenInfo path="app/(tabs)/profile.tsx" />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 0,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 60,
    borderTopColor: '#F1414D'
  },
});