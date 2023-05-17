import { StyleSheet, Pressable, Modal, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'
import { useState } from 'react'

import { Text, View } from '../../components/Themed';

let newAlerts: { title: string; desc: string; location: {}; }[] = [];

export default function TabOneScreen() {
  const [showModal, setShowModal] = useState(false);
  const [hazardTitle, setHazardTitle] = useState("");
  const [hazardDesc, setHazardDesc] = useState("");
  const [tempMarker, setTempMarker] = useState({})
  const fake_data: any[] = require('../../constants/FakeData.json')


  for (let item of fake_data) {
    console.log(item['Location']);
  }
  console.log(showModal);
  console.log(tempMarker);
  console.log(newAlerts);

  function addNewAlert(title: string, desc: string) {
    setShowModal(false);
    newAlerts.push({"title": title, "desc": desc, "location": tempMarker})
  }


  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      onPress={ev=>{
        setTempMarker(ev.nativeEvent.coordinate)
      }}
        region={{
          latitude: 39.679210702863124,  
          longitude: -75.74839194722885,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
          {
            fake_data.map((element: any) => {
              return (
                <Marker coordinate={element['Location']} 
                title={element['IconType']} description={element['Description']}
                pinColor='red'/>
              )
            })
          }
          {
            newAlerts.map((element: any) => {
              return (
                <Marker coordinate={element['location']} 
                title={element['title']} description={element['desc']}
                pinColor='red'/>
              )
            })
          }
          <Marker coordinate={tempMarker} pinColor='yellow'/>
        </MapView>
        <Pressable style={styles.button} onPress={() => {setShowModal(true)}}>
          <Text style={styles.buttonText}>Create Alert</Text>
        </Pressable>

        <Modal visible={showModal} transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textTitle}>HAZARD TITLE</Text>
                        <TextInput style={styles.textInput} placeholder={'Try to limit to one or two words.'} value={hazardTitle} onChangeText={text => setHazardTitle(text)} />

                        <Text style={styles.textTitle}>DESCRIPTION</Text>
                        <TextInput style={styles.textInput} placeholder={'Few words describing the action.'} value={hazardDesc} onChangeText={text => setHazardDesc(text)} />

                        <View style={styles.buttonRow}>
                          <Pressable style={styles.modalCancel} onPress={() => {setShowModal(false)}}>
                            <Text style={styles.modalButtonText}>Cancel</Text>
                          </Pressable>

                          <Pressable style={styles.modalSubmit} onPress={() => {addNewAlert(hazardTitle, hazardDesc)}}>
                            <Text style={styles.modalButtonText}>Submit</Text>
                          </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
  map: {
    width: '100%',
    height: '80%',
  },
  button: {
    marginTop: 20,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '90%',
    maxWidth: "90%",
    height: '10%',
    backgroundColor: "#ffd685",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 36
  },
  modal: {
    margin: 0,
    width: "100%",
    height:"100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(80,80,80,0.4)"
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1414d",
    maxHeight: "30%",
    height: "30%",
    width: "80%",
    borderRadius: 20
  },
  textInput: {
    backgroundColor: "#ebeaeb",
    opacity: 0.6,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "600"
  },
  modalCancel: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '50%',
    maxWidth: "50%",
    backgroundColor: "#ffd685",
    alignItems: "center",
    justifyContent: "center"
  },
  modalSubmit: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '50%',
    maxWidth: "50%",
    backgroundColor: "#ef9457",
    alignItems: "center",
    justifyContent: "center"
  },
  modalButtonText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 16
  },
  buttonRow: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
