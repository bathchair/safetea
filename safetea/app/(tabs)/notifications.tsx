import { ScrollView, StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import NotificationItem from '../../components/NotificationItem';

export default function NotificationScreen() {
  const fake_data: any[] = require('../../constants/FakeData.json')
    
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollstyle}>
        {
          fake_data.map((element: any) => {
            return (
              <NotificationItem data={(element)} />
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  scrollstyle: {
    marginTop: 10,
  }
});