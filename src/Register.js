import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, } from 'react-native';
import Slider from "react-native-slider";

export default class PwChange extends React.Component {
  
  constructor (props) {
    super (props)
    
    this.state = {
     check : false,
     age: 20
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
        
          <View style={styles.grayBox}>
            <Text style={styles.inputTitle}>아이디</Text>
            <TextInput textContentType="username" style={styles.inputBox} placeholder={"이메일 주소 입력"}></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity>
          </View>        

          <View style={styles.grayBox}>
            <Text style={styles.inputTitle}>비밀번호</Text>
            <TextInput textContentType="password" secureTextEntry={true} style={styles.inputBox} placeholder={"6-10, 숫자 포함"}></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity>
          </View>        

          <View style={styles.grayBox}>
            <Text style={styles.inputTitle}>비밀번호 확인</Text>
            <TextInput textContentType="password" secureTextEntry={true} style={styles.inputBox} placeholder={"비밀번호 재입력"}></TextInput>
            <TouchableOpacity>
              <Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} />
              </TouchableOpacity>
          </View>

        {/* 4번째 박스는 사이즈 변형 필요 */}
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <View style={[styles.grayBox, { width:65, padding: 0, alignItems:"center", justifyContent:"center"}]}>
              <Text style={[styles.inputTitle, {margin: 0, flex:1}]}>나이</Text>
            </View>
            <Slider
              value={this.state.age}
              onValueCHange={value => this.setState({age})}
              style={{flex:1, marginLeft:0, marginRight: 17, }}
              minimumTrackTintColor="rgb(255,144,108)"
              maximumValue={100}
              minimumValue={1}
              step={1}
              maximumTrackTintColor="rgb(249,249,249)"
              value={20}
              thumbTintColor="rgb(255,144,108)"
            />
            {/* <Slider
                style={{flex:1, marginLeft:0, marginRight: 17, }}
                minimumTrackTintColor="rgb(255,144,108)"
                maximumValue={100}
                minimumValue={1}
                step={1}
                maximumTrackTintColor="rgb(249,249,249)"
                value={20}
                thumbTintColor="rgb(255,144,108)"
                // trackStyle={styles.trackStyle}                
                // thumbImage = {require("./assets/age_box.png")}
                // thumbTouchSize={{width:2, height:2, }}
                // thumbTintColor='#0c6692'
                // thumbStyle={styles.thumbStyle}
                // thumbTintColor="green"
                >
                {Platform.OS === "ios" ? 0.11 : 0.1,}
                <Image source={require("./assets/age_box.png")} style={styles.slider_image} />
                </Slider> */}
          </View>
            <Text>{this.state.age}</Text>
          <View style={styles.grayBox}>
            <Text style={styles.inputTitle}>이름</Text>
            <TextInput textContentType="name" secureTextEntry={true} style={styles.inputBox} placeholder={"실명 입력"}></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity>
          </View>

          <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", marginTop:85}}>
            <TouchableOpacity style={{marginLeft: 27.5, width:15, height:15}} onPress={ this.ifPressed }>
              {this.state.check === false ? <Image source={require("./assets/box.png")} style={{width:15, height:15}}  />
              :<Image source={require("./assets/check_box.png")} style={{width:15, height:15}}  />    }
            </TouchableOpacity>
            <Text style={styles.orangeText}> 서비스 이용악관</Text><Text style={{fontSize:13}}>과</Text>
            <Text style={styles.orangeText}> 개인정보 취급방침</Text><Text style={{fontSize:13}}>에 동의합니다.</Text>
          </View>

          <TouchableOpacity style={styles.pinkBox}>
            <Text style={styles.confirmText}>다음</Text>
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
    fontSize:13,
  },
  trackStyle:{
    height:2,
    shadowColor:"rgb(255, 114, 108)",
    backgroundColor: "rgb(255, 114, 108)",
  },
  thumbStyle:{
    width: 10,
    height: 10,
    backgroundColor: '#31a4db',
    borderRadius: 10 / 2,
    shadowColor: '#31a4db',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  slider_image:{
    width:30,
    height:30,
    position:"absolute",
    left:15
  }
})