import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import AddButton from './components/addButton';
import styled from 'styled-components/native';
import { Camera, CameraType, } from 'expo-camera'
import { useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library'
import BackButton from './components/backButton';
import SnapButton from './components/snapButton';
import { LinearGradient } from 'expo-linear-gradient';

const Qdrat = styled.View`
  width: 100%;
  height: 15.55%;
  align-items: flex-end;
  padding: 15px 15px 25px 15px;
  border-bottom-width: 1px;
  border-bottom-color: black;
`



/* const Kdrat = styled.View`
  width: 100%;
  height: 30.55%;
  align-items: center;
  justify-content: center;
  padding: 15px 15px 25px 15px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  background-color: wheat;
` */

const ButtonContainer = styled.View(props => ({
  width: '100%',
  background: props. $biba,
  alignItems: props. $positionItem,
}));


export default function App() {

  const [cameraStatus, setCameraStatus] = useState(false);
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();


  const makePhoto = async() => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data.uri);
        setCameraStatus(false);
        setImage(data.uri)
      } catch(e) {
        console.log(e)
      }
    }
    
  }

  useEffect(() => {
    (async() => {
      Camera.requestCameraPermissionsAsync();
      MediaLibrary.requestPermissionsAsync();
      await Camera.getCameraPermissionsAsync();
    })()
  },[])

   const onPressCameraStatus = () => {
    setCameraStatus(!cameraStatus ? true : false)
  }

  

  return (
      <LinearGradient colors={[ '#DCDCDC' ,'#FFFFE0', '#BDB76B' ]} style={styles.container}>
          {
            cameraStatus ? 
            <Camera style={styles.camera} ref={cameraRef}  ratio={'16:9'}>
              <ButtonContainer $positionItem='flex-start'>
                <BackButton ccc={onPressCameraStatus}/>
              </ButtonContainer>
              <ButtonContainer $positionItem='center'>
                <SnapButton  makePhoto={makePhoto} />
              </ButtonContainer>
          </Camera> :
          
        <Qdrat>
          <AddButton cameraSet={onPressCameraStatus}/>
        </Qdrat> 
  
    }
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    '*': {
      marginTop: '15px',
    }
  },
  camera: {
    backgroundColor:'#red', 
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
});
