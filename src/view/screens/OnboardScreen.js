import React from'react';
import {SafeAreaView, TouchableOpacity, View,StyleSheet} from 'react-native';

const OnboardScreen =() =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <View>
                <Image style={{
                    width:'100%',
                    resizeMode:'contain',
                    top:-150,
                }} source={require('../../assets/onboardImage.png')}/>
            </View>
            <View style={style.textContainer}>
                <Text style={{fontSize:'32',fontWeight:'bold', textAlign:'center'}}></Text>
                <Text style ={{fontSize:'18', color:'grey', textAlign:'center',mogin:20}}>We help You to find best and Delisious food</Text>        
            </View>
            <View style={style.indicatorContainer}>
                <View stye={style.currentIndicator}></View>
                <View stye={style.Indicators}></View>
                <View stye={style.Indicators}></View>
            </View>
            <View>
                <TouchableOpacity style={style.getStartdBtn}>
                    <Text style={style.getStartedText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}
const style=StyleSheet.create({
    textContainer:{
        flex:1,
        // height:'150',
        justifyContent:'center',
        padding:'10'
    },
    indicatorContaioner:{
        height:50,
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row'
    },
    currentIndicator:{
        height:12,
        width:30,
        borderRadius:10,
        backgroundColor:'orange',
        marginHorizontal:5
    },
    Indicators:{
        height:12,
        width:12,
        backgroundColor:'gray',
        marginHorizontal:5,
        borderRadius:6
    },
    getStartdBtn:{
        height:15,
        width:'60%',
        borderRadius:60,
        backgroundColor:'orange',
        margin:20
    },
    getStartdText:{
        color:'#fff',
        justifyContent:'center',
        alignContent:'center',
        height:10
    }

    
})
export default OnboardScreen;