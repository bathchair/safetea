import { StyleSheet } from 'react-native';

import ProfilePage from '../../components/ProfilePage';
import { Text, View } from '../../components/Themed';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ProfilePage path="app/(tabs)/profile.tsx" />
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
});