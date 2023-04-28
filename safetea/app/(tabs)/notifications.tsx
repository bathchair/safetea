import { ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react'

import { Text, View } from '../../components/Themed';
import NotificationItem from '../../components/NotificationItem';

export default function NotificationScreen() {
    const fake_data: any[] = require('../../constants/FakeData.json')
    
    useEffect(() => {
        console.log(fake_data);
        for (let point of fake_data) {
            console.log(point);
        }
        fake_data.forEach((point: any) => {
            console.log(point);
        })
    }, [])

  function renderNotifications(data: any) {
    data.array.forEach((element: any) => {
      return (
        <NotificationItem data={element} />
      )
    });
  }
    
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