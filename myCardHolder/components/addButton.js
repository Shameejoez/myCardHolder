import { Button, View, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PlusAdd from '../assets/svg/plusAdd.svg'
import { LinearGradient } from 'expo-linear-gradient';

const BtnAdd = styled.View`
    width: 40px;
    height: 40px;
    margin-top: 40px;
    border-radius: 50px;
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

    const onPressSetCameraStatus = () => {
        cameraSet()
    }

    return(
        <TouchableOpacity onPress={() => onPressSetCameraStatus()}>
                <BtnAdd >
                    <PlusAdd  width={40} height={40}>
                      
                    </PlusAdd>
                </BtnAdd>
        </TouchableOpacity>

    ); 
}

export default AddButton;