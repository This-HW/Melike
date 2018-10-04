import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import Switch from 'react-native-switch-pro'

export default class AccountControl extends React.Component {

  constructor (props) {
    super (props)
  }
  
  state = {
    alarmFlag:true,
    mailAdress:"aaaa@aaaa.com"
  }

  render(){
    
    return(
      <View style={styles.container}>
        <View style={styles.topLine}>
          <Text style={{color:"#ffffff", fontSize:15, }}>{this.mailAdress}</Text>
        </View>

        <View style={styles.contents}>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText} >알림설정</Text>
            {/* Use component : react-native-switch-pro */}
            <Switch onSyncPress={value => {this.alarmFlag}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText} >History 보기</Text>
            <Image source={require("./assets/arrow_right.png")} style={styles.buttonStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText} >사용법 보기</Text>
            <Image source={require("./assets/arrow_right.png")} style={styles.buttonStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText} >필요한 친구에게 추천하기</Text>
            <Image source={require("./assets/arrow_right.png")} style={styles.buttonStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText} >내 정보동의 설정</Text>
            <Image source={require("./assets/arrow_right.png")} style={styles.buttonStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText} >계정관리</Text>
            <Image source={require("./assets/arrow_right.png")} style={styles.buttonStyle} />
          </TouchableOpacity>
          <View style={{marginTop:10, padding:7, paddingLeft: 10}}>
            <View style={{flexDirection:"row", alignItems:"flex-end"}}>
              <Text style={{ fontSize: 19, fontWeight:"bold",  fontStyle:"italic", margin:5, color:"#3a3a3a" }}>deadline</Text>
              <Text style={styles.texts}>beta ver.0.1</Text>
            </View>
            <Text style={styles.texts}> (주)미라이크 : 서울시 성수이로 22길 37 202호</Text>
            <Text style={styles.texts}> 불편, 개선사항 보내기 : jung@amatta.kr</Text>
          </View>
        
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
    height: Platform.OS === "ios" ? 122 : 100,
    justifyContent:"space-between",
    justifyContent:"flex-start",
    backgroundColor: "#ff726c",
    padding: 15,
    justifyContent: "flex-end",
  },
  contents:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",
    padding: 15,
    alignItems: "stretch",
    paddingTop: 5,
  },
  menu:{
   borderBottomWidth:0.5,
   borderColor: "#ededed",
   padding:5,
   paddingLeft:0,
   justifyContent:"space-between",
   alignItems:"center",
   flexDirection:"row",
  },
  menuText:{
    fontSize:20, 
    margin:14,
    marginLeft:5,
    color:"#4a4a4a", 
    fontWeight:"200"
  },
  texts:{
    fontSize:14,
    marginBottom:5,
  },
  buttonStyle:{
    width:8,
    height:13,
    marginRight:5,
  }
})