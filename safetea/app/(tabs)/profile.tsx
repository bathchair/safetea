import { StyleSheet, Image, ScrollView } from 'react-native';
import NotificationItem from '../../components/NotificationItem';
import Colors from '../../constants/Colors';

import { Text, View } from '../../components/Themed';

export default function ProfilePage({ path }: { path: string }) {
  const fake_data: any[] = require('../../constants/FakeData.json')
  var user_data = [];

  for (let element of fake_data) {
    if (element['UserSubmitted'] === "shadow") {
      user_data.push(element);
    }
  }

    return (
        <View style={styles.profileContainer}>
          <View style={styles.circle}>
            <Image source={require('../../assets/images/shadow.jpg')} style={styles.image} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.usernameTitle}>My Username</Text>
            <Text style={styles.userPointsTitle}>Credibility Points</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.userName}>Shadow</Text>
            <Text style={styles.userPoints}>16</Text>
          </View>
            <Text style={styles.recentAlertsTitle}>My Recent Alerts</Text>
            <ScrollView contentContainerStyle={styles.scrollstyle}>
              {
                user_data.map((element: any) => {
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
  homeScreenFilename: {
    marginVertical: 7,
  },
  scrollstyle: {
    marginTop: 20,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    marginBottom: 30,
  },
  image: {
    width: 170,
    height: 170,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  usernameTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  recentAlertsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
  userPointsTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  userName:{
    flex: 1,    
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  userPoints: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});