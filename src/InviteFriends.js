import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Image, Dimensions, Text, Platform } from 'react-native';


export default class InviteFriends extends Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{marginLeft: 10, color:"white", fontSize:25, padding: 15, fontWeight:"400",}}>친구도 챙겨주기</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.nomalStyle}>친구야 너에게</Text>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.nomalStyle}>"</Text><Text style={styles.boldStyle}>데드라인</Text><Text style={styles.nomalStyle}>" 이 필요할거야</Text>
            </View>
            <Text style={styles.nomalStyle}>넣어둬~ 넣어둬~</Text>
            <Image source={require("./assets/big_smile.png")} style={styles.imgstyle} />
            <Text style={styles.words}>월정액 음원 서비스를 해지하려 했으나</Text>
            <View style={{flexDirection:"row",}}>
              <Text style={[styles.words, {fontWeight:"600"}]}>단지 깜빡해서 다음달 요금을 지불했던 경험</Text><Text style={styles.words}>자</Text>
            </View>
            <View style={{flexDirection:"row",}}>
              <Text style={styles.words}>음원 서비스 가입자 중 </Text><Text style={[styles.words, {fontWeight:"600"}]}>22%</Text><Text style={styles.words}>, 5명중 1명</Text>
            </View>
            <Text style={styles.words}>(2017년 내일대학연구소 설문기준)</Text>
            <Text style={styles.words}> </Text>
            <Text style={styles.words}>아껴주고 챙겨주고 싶은 사람에게 이 내용과</Text>
            <Text style={styles.words}>‘데드라인’을 알려주세요</Text>
            <TouchableOpacity style={{marginTop:80, alignSelf:"stretch"}}>
                <View style={styles.buttonStyle}><Text style={{fontSize:18, color:"black"}}>카카오톡-메세지 보내기</Text></View>
            </TouchableOpacity>

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  header: {
    flex: Platform.OS === "ios" ? 0.11 : 0.1,
    paddingTop : Platform.OS === "ios" ? 22 : 0,
    backgroundColor: "#ff726c",
    justifyContent: "center",
  },
  body: {
    flex: Platform.OS === "ios" ? 0.89 : 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  boldStyle:{
    color: "#f3403f",
    fontSize: 23,
    fontWeight: "bold"
  },
  nomalStyle:{
    color: "#f3403f",
    fontSize: 21,
    fontStyle: "normal"
  },
  imgstyle:{
    resizeMode: "contain",
    maxHeight: 100,
    marginTop:10,
    marginBottom:35,
  },
  words:{
    fontSize: 17,
    fontWeight:"100", 
    color:"black",
  },
  buttonStyle:{
    backgroundColor: "#ffe90d",
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    borderRadius: 20,
    alignSelf:"stretch",
    justifyContent:"center",
    alignItems:"center",
  },
})