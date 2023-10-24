import { Camera, pausePreview } from "expo-camera";
import { TouchableOpacity, Image } from "react-native";
import styled from "styled-components";


const Btn = styled.TouchableOpacity`
    width: 64px;
    height: 64px;
    position: absolute;
    left: 0;
    top: 40px;
    margin: 15px;
`;

const Icon = styled.Image`
    width: 100%;
    height: 100%;
`

function BackButton ({ccc}) {

    const stopCamera = () => {
        ccc()
    }

    return ( 
            <Btn onPress={() => stopCamera()} >
                <Icon source={require('../img/arrow-97-64.png')}/>
            </Btn>   
    )
}

export default BackButton;