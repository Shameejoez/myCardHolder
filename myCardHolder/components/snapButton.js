import styled from "styled-components/native"
import { TouchableOpacity } from "react-native"


const ButtonSnap = styled.View`
    margin-bottom: 5%;
    width: 70px;
    height: 70px;
    border: 1px;
    border-color: black;
    border-radius: 50px;
    border-style: solid;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const InnerCircle = styled.TouchableOpacity`
    width: 65px;
    height: 65px;
    border: 1px;
    border-color: black;
    border-radius: 50px;
    background-color: #888888;
`;


function SnapButton ({makePhoto}) {
    return (
        <ButtonSnap>
            <InnerCircle onPress={() => makePhoto()}></InnerCircle>
        </ButtonSnap>
    )
}

export default SnapButton;