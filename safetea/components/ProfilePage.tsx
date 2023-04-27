import React from 'react';
import { StyleSheet, Image } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function ProfilePage({ path }: { path: string }) {
    return (
        <View style={styles.profileContainer}>
          <View style={styles.circle}>
            <Image source={require('../assets/images/shadow.jpg')} style={styles.image} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.username}>Username</Text>
            <Text style={styles.userPoints}>Credibility Points</Text>
          </View>
        </View>
      );
    }

const styles = StyleSheet.create({
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -375,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
  image: {
    width: 170,
    height: 170,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginHorizontal:120,
  },
  userPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right',
    marginRight:120,
  },
});
