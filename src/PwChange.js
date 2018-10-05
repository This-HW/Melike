import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity} from 'react-native';

export default class PwChange extends React.Component {
  
  constructor (props) {
    super (props)
    
    this.state = {
      changePw: false,
      en_prePw:"",
      en_chPw:"",
      en_confPw:"",
      prePw:"",
    }
  }
  

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.topLine}>
          {/* 패널 삽입부 */}
        </View>  
        <View style={styles.contents}>
        
          <View style={styles.boxDesign}>
            <TextInput textContentType="password" secureTextEntry={true} style={styles.boxText} placeholder={"현재 비밀번호"}></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity>
          </View>

          <View style={styles.boxDesign}>
            <TextInput textContentType="password" secureTextEntry={true} style={styles.boxText} placeholder={"비밀번호"}></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity>
          </View>

          <View style={styles.boxDesign}>
            <TextInput textContentType="password" secureTextEntry={true} style={styles.boxText} placeholder={"비밀번호 확인"}></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>확인</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.bottomLine}>
          {/* 쓰지는 않지만 틀은 유지 */}
        </View>

      </View>
    );

  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topLine:{
    flex:0.1,
    justifyContent:"space-between"
  },
  contents:{
    flex:0.8,
    alignItems:"center",
    justifyContent:"flex-start",
    padding: 15,
    alignItems: "stretch",
    paddingTop: 50,
  },
  bottomLine:{
    flex:0.1,
    justifyContent:"space-between"

  },
  boxDesign:{
//    flex: 0.12,
    height: 45,
    flexDirection:"row",
    borderRadius: 23,
    backgroundColor: "rgba(219, 219, 219, 0.2)",
    paddingLeft:5,
    paddingRight:15,
    margin: 10,
    alignItems: "center",
    justifyContent:"space-between",

  },
  boxText:{
    flex:1,
    color: "#4f4f4f",
    fontWeight:"normal",
    fontSize: 16.5,
    letterSpacing: 0.35,
    height:35,
    marginLeft:10,
    
  },
  x_Icon:{
    width: 15,
    height: 15,
    opacity: 0.7,
    backgroundColor: "transparent",
  },
  confirmButton:{
//    flex: 0.11,
    height: 42,
    borderRadius:23,
    backgroundColor:"#ff726c",
    margin: 10,
    marginTop:30,
    justifyContent:"center",
  },
  confirmText:{
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 0.35,
    fontWeight:"normal",
    fontSize: 18,
    alignSelf:"center",
  }


})