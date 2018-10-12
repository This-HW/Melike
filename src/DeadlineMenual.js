import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Image, Dimensions, Text, Platform } from 'react-native';
import ScrollUpButton from "react-scroll-up-button";

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

export default class DeadlineMenual extends Component {

  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0});
  };

  render() {
      return (

        <View style={styles.container}>
          <View style={styles.header}>
            {/* <View style={{flex:0.45}}></View> */}
            <Text style={{fontSize:20, color:"white", fontWeight: "bold",}}>데드라인 사용법</Text>
            <TouchableOpacity style={{ position:"absolute", right:3, bottom: 25}}><Image source={require("./assets/x_white.png")} style={styles.xIcon} /></TouchableOpacity>
          </View>
          <ScrollView
            title="manualView"
            style={{flex:1 }}
            ref={(scroller) => {this.scroller = scroller}}
            >
            
            <Image source={require("./assets/deadlineMenual.jpeg")} style={styles.image} />
            
          </ScrollView>
          <TouchableOpacity
            style={{position:'absolute', right:-75, bottom:30, opacity:1}}
            onPress={this.scrollToTop}
            >
            <Image source={require("./assets/top_buttton.png")} style={{resizeMode:"contain", maxHeight:40 ,opacity:1, backgroundColor:"transparent"}} />
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ff726c",
    // backgroundColor:"yellow",
    alignItems:'stretch',
    justifyContent:'center',
  },
  header: {
    flex: 0.05,
    flexDirection:"row",
    backgroundColor: "#ff726c",
    // backgroundColor: "blue",    
    paddingTop : Platform.OS === "ios" ? 37 : 15,
    alignItems:"center",
    justifyContent: "center",
    padding:15,
  },
  image: {
    alignSelf:"flex-start",
    padding:0,
    margin:0,
    width: windowWidth,
    height: windowWidth*7.872,
    resizeMode:'contain',
  },
  xIcon:{
    resizeMode:'contain',
    maxHeight: 14,
  }
})