import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity} from 'react-native';

export default class PwChange extends React.Component {
  
  constructor (props) {
    super (props)
    
    this.state = {
     check : false
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
  }


  ifPressed = () => {
    this.setState({ check: !this.state.check});
  }


  render(){

    return(
      <View style={styles.container}>
        <View style={styles.topLine}>
          {/* 패널 삽입부 */}
        </View>  
        <View style={styles.contents}>
          <View>
            <Text style={{fontSize:13}}>데드라인이 당신을 기억해드릴게요!</Text>
            <Text style={{fontSize=9, }}>앱 사용성을 위해 추가정보를 설정해주세요</Text>
          </View>
          <View style={[styles.grayBox, { /***********크기 조절 필요**********/   }]}>
            <Text style={styles.inputTitle}>나이</Text>
            {/* <TextInput textContentType="password" secureTextEntry={true} style={styles.inputBox} placeholder={"입력하세요"}></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity> */}
          </View>

          <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={{marginTop:85, marginLeft: 25, width:15, height:15}} onPress={ this.ifPressed }>
              {this.state.check === false ? <Image source={require("./assets/box.png")} style={{width:15, height:15}}  />
              :<Image source={require("./assets/check_box.png")} style={{width:15, height:15}}  />    }
            </TouchableOpacity>
            <Text style={styles.orangeText}>서비스 이용악관</Text><Text>과</Text><Text style={styles.orangeText}> 개인정보 취급방침</Text><Text>에 동의합니다.</Text>
          </View>

          <TouchableOpacity style={styles.pinkBox}>
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
    paddingTop: 50,
  },
  bottomLine:{
    flex:0.1,
  },
  grayBox:{
    height: 45,
    flexDirection:"row",
    borderRadius: 23,
    backgroundColor: "rgba(219, 219, 219, 0.2)",
    paddingLeft:5,
    paddingRight:15,
    margin: 10,
    alignItems: "center",
    textAlign:"center",
    justifyContent:"space-between",

  },
  inputTitle : {
    flex:0.35,
    color: "#4f4f4f",
    fontWeight:"normal",
    fontSize: 16,
    letterSpacing: 0.35,
    marginLeft:13,
    marginRight: 0,
  },
  inputBox:{
    flex:0.65,
    color: "#4f4f4f",
    fontWeight:"normal",
    fontSize: 16,
    letterSpacing: 0.35,
    height:35,
    marginLeft:7,
    
  },
  x_Icon:{
    width: 15,
    height: 15,
    opacity: 0.7,
    backgroundColor: "transparent",
  },
  pinkBox:{
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
  },
  orangeText:{
    color: "rgb(239,155,89)",
    fontSize:9,
  }

})