import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react'

import { Text, View } from '../../components/Themed';
import fake_data from '../../constants/FakeData';
import NotificationItem from '../../components/NotificationItem';

export default function NotificationScreen() {
    const [dataItems, setDataItems] = useState([{}]);
    
    useEffect(() => {
        console.log(fake_data);
        for (let point of fake_data) {
            console.log(point);
        }
        fake_data.forEach((point: any) => {
            console.log(point);
        })
    }, [])
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {
        fake_data.forEach((point: any) => {
            console.log("hello");
            return (
                <NotificationItem data={point} />
            )
        })
      }
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});