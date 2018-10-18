import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Slider from "react-native-slider";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Register extends React.Component {
  
  constructor (props) {
    super (props)
    
    this.state = {
      userID:"",
      userPassword:"",
      confirmPassword:"",
      age: 20,
      userName: "",
      check : false,

      pwdPlaceholder: "비밀번호 재입력",
      pwdplaceholderTextColor:'#C7C7CD',
      pwdblurOnSubmit:false,
      idPlaceholder: "이메일 주소 입력",
      idplaceholderTextColor:'#C7C7CD',
      idblurOnSubmit:false,
    }
  }

  // componentDidUpdate(prevProps, prevState){
  //   console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
  //   console.log("this.windowWidth : " + windowWidth );
  //   console.log("this.state.userID : " + this.state.userID );
  //   console.log("this.state.userPassword : " + this.state.userPassword );
  //   console.log("this.state.confirmPassword : " + this.state.confirmPassword );
  // }

  ifPressed = () => {
    this.setState({ check: !this.state.check});
  }

  //아이디가 DB에 존재하는 ID와 중복되는지 확인하는 함수
  // checkID =(e) => {
  //   flag = (this.state.userID ==  )
    
  //   flag 
  //     ? this.setState({
  //       idPlaceholder: "이메일 주소 입력",
  //       idplaceholderTextColor: "#C7C7CD",
  //       idblurOnSubmit: false              
  //     })
  //     :
  //     this.setState({
  //       userID: "",
  //       idPlaceholder: "중복된 이메일입니다.",
  //       idplaceholderTextColor: "rgb(239,155,89)",
  //       idblurOnSubmit: true              
  //     })
  // }

  checkPassword =(e) => {
    flag = (this.state.userPassword == this.state.confirmPassword )
    
    flag 
      ? this.setState({
        pwdPlaceholder: "비밀번호 재입력",
        pwdplaceholderTextColor: "#C7C7CD",
        pwdblurOnSubmit: false              
      })
      :
      this.setState({
        confirmPassword: "",
        pwdPlaceholder: "비밀번호가 불일치합니다.",
        pwdplaceholderTextColor: "rgb(239,155,89)",
        pwdblurOnSubmit: true              
      })
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
            <TextInput textContentType="username" secureTextEntry={false} style={styles.inputBox} placeholder={this.state.idPlaceholder}
              name="userID" onChangeText={(userID) => this.setState({userID})} autoCapitalize='none'
              value={this.state.userID}
              onBlur={this.checkID} 
              placeholderTextColor={this.state.idplaceholderTextColor} 
              blurOnSubmit={this.state.idblurOnSubmit}
            ></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity>
          </View>        

          <View style={styles.grayBox}>
            <Text style={styles.inputTitle}>비밀번호</Text>
            <TextInput textContentType="password" secureTextEntry={true} style={styles.inputBox} placeholder={"6-10, 숫자 포함"}
              name="userPassword" onChangeText={(userPassword) => this.setState({userPassword})}      
              value={this.state.userPassword}
            ></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity>
          </View>        

          <View style={styles.grayBox}>
            <Text style={styles.inputTitle}>비밀번호 확인</Text>
            <TextInput textContentType="password" secureTextEntry={true} style={styles.inputBox} placeholder={this.state.pwdPlaceholder}
              name="confirmPassword" onChangeText={(confirmPassword) => this.setState({confirmPassword})}  
              onBlur={this.checkPassword} 
              placeholderTextColor={this.state.pwdplaceholderTextColor} 
              blurOnSubmit={this.state.pwdblurOnSubmit}
              value={this.state.confirmPassword}             
            ></TextInput>
            <TouchableOpacity>
              <Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} />
              </TouchableOpacity>
          </View>
         
        {/* 4번째 박스는 사이즈 변형 필요 */}
          <View style={{flexDirection:"row", alignItems:"center",  marginTop:10, marginBottom:0, }}>
            <View style={[styles.grayBox, { flex:0.17, padding: 0, alignItems:"center", justifyContent:"center"}]}>
              <Text style={[styles.inputTitle, {alignSelf:"center", marginRight:0, flex: 1,}]}> 나이</Text>
            </View>
            {/* 나이 설정 - 슬라이더로 */}
            <Slider
              age={this.state.age} onValueChange={ age => this.setState({ age }) }
              style={{flex:0.83, height:windowHeight/10, marginLeft:0, marginRight: 17, }}
              minimumTrackTintColor="rgb(255,144,108)"
              maximumValue={100}
              minimumValue={8}
              step={1}
              maximumTrackTintColor="rgb(249,249,249)"
              value={20}
              thumbStyle={styles.thumbStyle}
              thumbTouchSize={{width:40, height:windowHeight/10}}
            >
            </Slider>
          </View>

          <View style={[styles.grayBox, {}]}>
            <Text style={styles.inputTitle}>이름</Text>
            <TextInput textContentType="name" secureTextEntry={false} style={styles.inputBox} placeholder={"실명 입력"}
              name="userName" onChangeText={(userName) => this.setState({userName})}   
              value={this.state.userName}        
            ></TextInput>
            <TouchableOpacity><Image source={require("./assets/x_icon_circle.png")} style={styles.x_Icon} /></TouchableOpacity>
          </View>


          {/* 나이 나타내는 말풍선 삽입 (말풍선 이미지 크기 22*18) / age 도입 전 -> top:-83.5, right:-93.5, */} 
          <View style={{ positoin:"absolute", top:(-windowHeight/7.99*1.77), left: ((windowWidth/8.775)+(this.state.age*windowWidth/100/1.485)), width:50, height: 40}}>    
            <Image source={require("./assets/age_box.png")} style={{position:"absolute", width:55, height: 45, resizeMode:"contain"}}  />
            <Text style={{color:"white", position:"absolute", right: 8.5, top:10, fontSize:13}}>{this.state.age}세</Text>
          </View>

          <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", marginTop:90}}>
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
    paddingLeft:0,
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
    fontSize: 15,
    letterSpacing: 0.35,
    marginLeft:13,
    marginRight: 0,
  },
  inputBox:{
    flex:0.65,
    color: "#4f4f4f",
    fontWeight:"normal",
    fontSize: 14,
    letterSpacing: 0.35,
    height:55,
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
  thumbStyle:{
    width: 10,
    height: 10,
    backgroundColor: "#ff726c",
    borderRadius: 10 / 2,
    shadowColor: 'white',
    shadowOffset: {width: -1.5, height: -0},
    shadowRadius: 0,
    shadowOpacity: 1,
  },
})