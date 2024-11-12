import {Image, Text, View, ScrollView,StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import  React  from 'react';

const styles=StyleSheet.create({
    Parent:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        marginTop: 30,
        backgroundColor: 'whitesmoke',
        alignItems:'center',
        borderColor:'black',
        borderWidth:5
    },
    Child:{
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20,
        width: 350,
        height: 50,
        borderColor:'black',
        borderWidth:5
    }
});
const Boat = ({name, disc, icon_name, poster})=> {
    return(
        <View style={[styles.Parent,{marginTop:50}]}>
            <Text style={[styles.Child,{marginTop:50,backgroundColor:'grey'}]}>GetABoat - For Sale</Text>
            <Icon name={icon_name} size={20} color="#B23B23"/>
            <Text style={[styles.Child,{marginTop:50,backgroundColor:'black',color:'white'}]}>{name}</Text>
            <Text style={[styles.Child,{marginTop:50,backgroundColor:'whitesmoke'}]}>{disc}</Text>
            <Image source={poster} style={{width:400, height:500}}/>
        </View>
    );
};

const display =() => {
    return(
        <ScrollView>
            <Boat name="SEA RAY 500 SUNDANCER" disc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." icon_name={"sailboat"} poster={require('../img/sea_ray.jpg')}/>
            <Boat name="FOUR WINS HORIZON 180" disc="A sporty look and refined details truly set the Horizon 180 above all others." icon_name={"sailboat"} poster={require('../img/four_winns.jpg')}/>
            <Boat name="FLIPPER 640 ST" disc="A modern take on classic,traditional hardtop and perfect for a family picnic." icon_name={"sailboat"} poster={require('../img/flipper.jpg')}/>

        </ScrollView>
    )
}
export  default  display;

