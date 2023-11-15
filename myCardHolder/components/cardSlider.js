import { FlatList, Image, View } from "react-native"

const DATA = [
    {
      id: '1',
      src: '../assets/testSliders/testPaint1.jpg',
    },
    {
      id: '2',
      src: '../assets/testSliders/testPaint2.jpg',
    },
    {
      id: '3',
      src: '../assets/testSliders/testPaint3.jpg',
    },
  ];


const RenderItem = ({src}) => {
    <View>
        <Image source={require(src)}/>
    </View>
}


function CardSlider () {
    return (
        <View>
            <FlatList 
            data={DATA}
            renderItem={({item}) =><RenderItem src={item.src}/>}
            />
        </View>
   
    )
}

const styles = StyleSheet.create({
    container:  {
        width: ''
    }
})