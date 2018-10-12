import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Image, Dimensions, Text, Platform } from 'react-native';
import ScrollUpButton from "react-scroll-up-button";

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

export default class DeadlineMenual extends Component {
  render() {
      return (

        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{flex:0.45}}></View>
            <Text style={{fontSize:25, color:"white", fontWeight: "bold",}}>데드라인 사용법</Text>
            <TouchableOpacity><Image source={require("./assets/x_white.png")} style={styles.xIcon} /></TouchableOpacity>
          </View>
          <ScrollView styele={{flex:1, alignItems:"flex-start", justifyContent:"flex-start"}} >
            <Image source={require("./assets/deadlineMenual.jpeg")} style={styles.image} />
            {/* <ScrollUpButton style={{width: 75}} ToggledStyle={{right: 100}} /> */}
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ff726c",
    alignItems:'flex-start',
    justifyContent:'center',
  },
  header: {
    flex: 0.05,
    flexDirection:"row",
    backgroundColor: "#ff726c",    
    paddingTop : Platform.OS === "ios" ? 27 : 5,
    alignSelf:"stretch",
    alignItems:"center",
    justifyContent: "space-between",
  },
  image: {
    alignSelf:"flex-start",
    backgroundColor:"red",
    padding:0,
    margin:0,
    maxWidth: windowWidth,
    maxHeight: windowWidth*7.872,
    resizeMode:'contain',
  },
  xIcon:{
    resizeMode:'contain',
    maxHeight: 13,
  }
})