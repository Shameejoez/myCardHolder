import { Button, View, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const BtnAdd = styled.View`
width: 40px;
height: 40px;
margin-top: 40px;
background-color: #888888;
justify-content: center;
align-items: center;
`;

const AddIcon = styled.Image`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`


function AddButton ({cameraSet}) {

/*     const onPressSetCameraStatus = (statusCamera) => {
        setCameraStatus()
    } */

    return(
        <TouchableOpacity onPress={() => cameraSet()}>
                <BtnAdd >
                    <AddIcon 
                        source={require('../components/iconAdd.png')}
                    />
                    </BtnAdd>
        </TouchableOpacity>

    ); 
}

export default AddButton;