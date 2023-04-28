import React from 'react';
import { Button, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function NotificationItem({ data }: { data: any }) {
  let user = data['UserSubmitted'];

  if (user === "shadow") {
    return (
      <View style={styles.itemContainer}>
          <View style={styles.col}>
            <Text style={styles.userTitle}>Thanks for submitting!</Text>
            <Text style={styles.notificationText}>{data['Description']}</Text>
          </View>
          <View style={styles.col}>
            <Pressable style={styles.buttonStyle}>
              <Text style={styles.buttonText}>VIEW ALERT</Text>
            </Pressable>
          </View>
        </View>
      );  
    } else {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.col}>
            <Text style={styles.alertTitle}>New Alert!</Text>
            <Text style={styles.notificationText}>{data['Description']}</Text>
          </View>
          <View style={styles.col}>
            <Pressable style={styles.buttonStyle}>
              <Text style={styles.buttonText}>VIEW ALERT</Text>
            </Pressable>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 75,
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderColor: "#ef9457",
    borderWidth: 1,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  col: {
    width: "50%",
    maxWidth: "50%",
    backgroundColor: "#fff"
  },
  alertTitle: {
    color: "#f1414d",
    fontWeight: "800",
    fontSize: 16
  },
  userTitle: {
    color: "#000",
    fontWeight: "800",
    fontSize: 16
  },
  notificationText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 20
  },
  buttonStyle: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: "90%",
    backgroundColor: "#ffd685",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "800",
    fontSize: 16
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
