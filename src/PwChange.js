import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';


export default class PwChange extends React.Component {

  constructor (props) {
    super (props)
  }
  
  state = {
    changePw: false
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.topLine}>

          <Text>위쪽</Text>
        </View>  
        <View style={styles.contents}>
        
          <View style={styles.boxDesign}>
            <Text style={styles.boxText}>현재 비밀번호</Text>
            <Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} />
          </View>

          <View style={styles.boxDesign}>
            <Text style={styles.boxText}>비밀번호</Text>
            <Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} />
          </View>

          <View style={styles.boxDesign}>
            <Text style={styles.boxText}>비밀번호 확인</Text>
            <Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} />
          </View>

          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>확인</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.bottomLine}>
          <Text>아래쪽</Text>

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
    flex: 0.12,
    flexDirection:"row",
    borderRadius: 23,
    backgroundColor: "rgba(219, 219, 219, 0.2)",
    paddingLeft:15,
    paddingRight:15,
    margin: 10,
    alignItems: "center",
    justifyContent:"space-between",

  },
  boxText:{
    color: "#4f4f4f",
    fontWeight:"normal",
    fontSize: 16.5,
    letterSpacing: 0.35,
    
  },
  x_Icon:{
    width: 15,
    height: 15,
    opacity: 0.7,
    backgroundColor: "transparent",
  },
  confirmButton:{
    flex: 0.11,
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