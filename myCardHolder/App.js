import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import AddButton from './components/addButton';
import styled from 'styled-components/native';
import { Camera, CameraType, } from 'expo-camera'
import { useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library'
import BackButton from './components/backButton';
import SnapButton from './components/snapButton';


const MainContainer = styled.View`
flex: 1;
background-color: '#7B68EE';
align-items: center;
justify-content: flex-start;
flex-direction: column;
`;

const Qdrat = styled.View`
  width: 100%;
  height: 15.55%;
  align-items: flex-end;
  padding: 15px 15px 25px 15px;
  border-bottom-width: 1px;
  border-bottom-color: black;
`

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


  const stopCamera = () => {
    cameraRef.current.pausePreview()
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
    <MainContainer contentPosition={cameraStatus ? 'center' : 'flex-start'} style={styles.container}>      
    {
      cameraStatus ? 
      <Camera style={styles.camera} ref={cameraRef}  ratio={'16:9'}>
        <ButtonContainer $positionItem='flex-start'>
          <BackButton ccc={onPressCameraStatus}/>
        </ButtonContainer>
        <ButtonContainer $positionItem='center'>
          <SnapButton  />
        </ButtonContainer>
    </Camera> :
  <Qdrat>
    <AddButton cameraSet={onPressCameraStatus}/>
  </Qdrat> 
    }     
  </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B68EE',
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
