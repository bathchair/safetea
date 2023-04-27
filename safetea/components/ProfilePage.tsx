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
    marginTop: -450,
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
});
