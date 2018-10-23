import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Image, Text, Platform } from 'react-native';

export default class Agreements extends Component {
  
  static defaultProps={
    flag:1
  }

  constructor (props) {
    super (props)
    
    this.state = {

    }
  }

  // scrollToTop = () => {
  //   this.scroller.scrollTo({x: 0, y: 0});
  // };

  render() {
    flag=this.props.flag;
      return (

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize:20, }}>
              { flag===1
                ? "이용약관"
                : "개인정보 취급방침"
                }
            </Text>
            <TouchableOpacity style={{ alignItems:"center", justifyContent:"center", width:17, height:17, position:"absolute", right:25, bottom: 21}} >
              <Image source={require("./assets/x_icon_r.png")} style={styles.xIcon} />
            </TouchableOpacity>
          </View>
          <ScrollView
            title="Agreement"
            style={{flex:1 }}
            ref={(scroller) => {this.scroller = scroller}}
            >
              <View style={{padding: 30, paddingTop:50}}>
              {
                flag===1
                ? <Text style={styles.text}>
                  리도 못 가서 발병난다. 내가 그의 이름을 불러 주었을 때 그는  돌같이 하라 뭉치면 살고 흩어지면 죽는다. 이 몸이 죽고 죽어 일백번 고쳐 죽어고 임 향한 일편단심 가실 줄이 있으랴. 관용은 미덕이다. 가서 발병난다.  주었을 때 이 몸이 죽고 죽어 일백번 고쳐 죽어 백골이 진토되어 넋이라도 있고 없고  관용은그는 나에게로 와서 꽃이 되었다. 황금 보기를 돌같 죽는다.미덕이다. 왜 사냐건 웃지요. 나를 버리고 가시는 님은 십임 으랴.나에게로 와서 꽃이 되었다. 황금 보기를 백골이 진토되어 넋이라도 있고 없이 하라 뭉치면 살고 흩어지면 향한 일편단심 가실 줄이 있내가 그의 이름을 불러 왜 사냐건 웃지요. 나를 버리고 가시는 님은 십 리도 못 가서 발병난다. 내가 그의 이름을 불러 주었을 때 그는 나에게로 와서 꽃이 되었다. 황금 보기를 돌같이 하라 뭉치면 살고 흩어지면 죽는다. 이 몸이 죽고 죽어 일백번 고쳐 죽어 백골이 진토되어 넋이라도 있고 없고 임 향한 일편단심 가실 줄이 있으랴. 관용은 미덕이다. 가서 발병난다. 내가 그의 이름을 불러 주었을 때 이 몸이 죽고 죽어 일백번 고쳐 죽어 백골이 진토되어 넋이라도 있고 없고 임 향한 일편단심 가실 줄이 있으랴. 관용은그는 나에게로 쳐 죽어 백골이 진토되어 넋이라도 있고 없고 임 향한 일편단심 가실 줄이 있으랴. 관용은그는 나에게로 
                  +이용약관
                </Text>
                : <Text style={styles.text}>
                  리도 못 가서 발병난다. 내가 그의 이름을 불러 주었을 때 그는  돌같이 하라 뭉치면 살고 흩어지면 죽는다. 이 몸이 죽고 죽어 일백번 고쳐 죽어고 임 향한 일편단심 가실 줄이 있으랴. 관용은 미덕이다. 가서 발병난다.  주었을 때 이 몸이 죽고 죽어 일백번 고쳐 죽어 백골이 진토되어 넋이라도 있고 없고  관용은그는 나에게로 와서 꽃이 되었다. 황금 보기를 돌같 죽는다.미덕이다. 왜 사냐건 웃지요. 나를 버리고 가시는 님은 십임 으랴.나에게로 와서 꽃이 되었다. 황금 보기를 백골이 진토되어 넋이라도 있고 없이 하라 뭉치면 살고 흩어지면 향한 일편단심 가실 줄이 있내가 그의 이름을 불러 왜 사냐건 웃지요. 나를 버리고 가시는 님은 십 리도 못 가서 발병난다. 내가 그의 이름을 불러 주었을 때 그는 나에게로 와서 꽃이 되었다. 황금 보기를 돌같이 하라 뭉치면 살고 흩어지면 죽는다. 이 몸이 죽고 죽어 일백번 고쳐 죽어 백골이 진토되어 넋이라도 있고 없고 임 향한 일편단심 가실 줄이 있으랴. 관용은 미덕이다. 가서 발병난다. 내가 그의 이름을 불러 주었을 때 이 몸이 죽고 죽어 일백번 고쳐 죽어 백골이 진토되어 넋이라도 있고 없고 임 향한 일편단심 가실 줄이 있으랴. 관용은그는 나에게로 쳐 죽어 백골이 진토되어 넋이라도 있고 없고 임 향한 일편단심 가실 줄이 있으랴. 관용은그는 나에게로 
                  +개인정보 취급방침
                </Text>
              }
              </View>
          </ScrollView>

          {this.props.flag===1
           ? console.log("플래그가 있니 없니. 이건 있는거")
           : console.log("이건 플래그가 없는것")}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
    justifyContent:'center',
  },
  header: {
    flex: 0.05,
    flexDirection:"row",
    backgroundColor: "#ffffff",
    borderColor:"#ff726c",
    borderBottomWidth: 1,
    paddingTop : Platform.OS === "ios" ? 37 : 15,
    alignItems:"center",
    justifyContent: "center",
    padding:15,
  },
  xIcon:{
    resizeMode:'contain',
    maxHeight: 15,
  },
  text : {
    fontSize: 16, 
    fontWeight:"500", 
    lineHeight:26, 
    letterSpacing: -0.03, 
    color: "#a3a3a3"
  },
})