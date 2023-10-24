import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import AddButton from './components/addButton';
import styled from 'styled-components/native';
import { Camera, CameraType, } from 'expo-camera'
import { useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library'
import BackButton from './components/backButton';


const Btn = styled.TouchableOpacity
`
color: #BF4F74;
font-size: 1em;
margin: 1em;
padding: 20px 15px;
border-radius: 3px;
width: 64px;
height: 64px;
position: absolute;
left: 0;
top: 40px;
`;

export default function App() {

  const [cameraStatus, setCameraStatus] = useState(false);
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);



  const [permission, requestPermission] = Camera.useCameraPermissions();


  const stopCamera = () => {
    cameraRef.current.pausePreview()
  }

  useEffect(() => {
    (async() => {
      pausePrevew()
      Camera.requestCameraPermissionsAsync();
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.getCameraPermissionsAsync();
    })()
  },[])

   const onPressCameraStatus = () => {
    setCameraStatus(!cameraStatus ? true : false)
    alert(cameraStatus)
    console.log(cameraStatus)
  }

  return (
    <View style={styles.container}>{
      cameraStatus ? 
      <Camera style={styles.camera} ref={cameraRef} >
      <View style={styles.buttonContainer}>
      <BackButton ccc={onPressCameraStatus}/>
    </View>
  </Camera> : 
  <AddButton cameraSet={onPressCameraStatus}/>
    }
  
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888888',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '*': {
      marginTop: '15px',
    }
  },
  camera: {
    backgroundColor:'#red', 
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonTop: {
    bottom: '200px'
  },
  button: {
    backgroundColor: '#888888'
  }
});
