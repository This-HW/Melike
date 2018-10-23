import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, ScrollView, Image, Dimensions, Text, Platform } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class DeadlineManual extends Component {

  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0});
  };

  render() {
      return (

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>데드라인 사용법</Text>
            <TouchableOpacity
              style={{ position: "absolute", right: 3, bottom: 25 }}
              onPress={() => {
                this.props.dismissModal();
              }}
            >
              <Image source={require("../../../assets/icons/x_white.png")} style={styles.xIcon} />
            </TouchableOpacity>
          </View>
          {/* 이게 기존의 제 헤드입니다.           
          <View style={styles.header}>
            <Text style={{fontSize:20, color:"white", fontWeight: "bold",}}>데드라인 사용법</Text>
            <TouchableOpacity style={{ position:"absolute", right:3, bottom: 25}}><Image source={require("./assets/x_white.png")} style={styles.xIcon} /></TouchableOpacity>
          </View> */}
          <ScrollView
            title="manualView"
            style={{flex:1 }}
            ref={(scroller) => {this.scroller = scroller}}
            backgroundColor="white"
            bounces={false}
            >
            
            <View style={{backgroundColor:"#ff726c", padding:20, paddingTop:5,}}>
              <Text style={[styles.title, {color:"white"}]}>당신을 위한 데드라인 사용 Tip</Text>
              <Text style={[styles.text, {color:"white"}]}>더 완벽한 데드라인 관리를 위해</Text>
              <Text style={[styles.text, {color:"white"}]}>Deadline의 다양한 기능을 확인하세요</Text>
            </View>

            
            {/* 흰색 바탕 */}
            <View style={{padding: 20}} >
            
              <Text style={styles.title}>먼저 데드라인을 등록해주세요</Text>
              <Text style={styles.text}>데드라인이 추천하는 목록에서</Text>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={[styles.text, {fontWeight:"bold"}]}>간편하게 선택</Text><Text style={styles.text}>할 수 있어요.</Text>
              </View>
              <View style={{flexDirection:"row", alignItems:"center"}}>                
                <Text style={styles.text}>원하는 항목이 없다면, </Text><Text style={[styles.text, {fontWeight:"bold"}]}>직접 등록</Text><Text style={styles.text}>을 할 수도 있습니다.</Text>
              </View>
              <Image source={require("./assets/manual/B2-001_01.png")} style={styles.image} />
              <Text style={styles.title}>데드라인 내용을 입력해주세요</Text>
              <Text style={styles.text}>추천 항목에서 선택하셨다면 날짜만 선택하면 끝이에요</Text>
              <Text style={styles.text}>직접 등록을 선택하셨다면</Text>
              <View style={{flexDirection:"row", alignItems:"center"}}>                
                <Text style={[styles.text, {fontWeight:"bold"}]}>날짜, 반복, 알림시기</Text><Text style={styles.text}>를 선택해주세요.</Text>
              </View>
              <Image source={require("./assets/manual/B2-001_02.png")} style={styles.image} />
              <Image source={require("./assets/manual/B2-001_03.png")} style={styles.image} />
              <Text style={styles.title}>알림이 오면 필요한 서비스를 선택하세요.</Text>
              <Text style={styles.text}>필요한 서비스가 있다면 클릭!</Text>
              <Text style={styles.text}>"데드라인 리스트"를 클릭해서 미리 해결할 수도 있어요.</Text>
              <Image source={require("./assets/manual/B2-001_04.png")} style={styles.image} />
              <Text style={styles.title}>알림을 받고 싶지 않다면?</Text>
              <Text style={styles.text}>알림이 필요 없으신가요?</Text>
              <Text style={styles.text}>메뉴에서 간편하게 설정하세요</Text>
              <Image source={require("./assets/manual/B2-001_05.png")} style={styles.image} />
              <Text style={[styles.title, {margin:3}]}>마감일이 지난 것도 History에 남습니다.</Text>
              <Text style={[styles.title, {margin:3}]}>필요한 친구들에게 App을 추천해주세요~</Text>
            
            </View>

            {/* <Image source={require("./assets/deadlineManual.jpeg")} style={styles.image} /> */}
            
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
    alignItems:'stretch',
    justifyContent:'center',
  },
  header: {
    flex: 0.05,
    flexDirection:"row",
    backgroundColor: "#ff726c",
    paddingTop : Platform.OS === "ios" ? 37 : 15,
    alignItems:"center",
    justifyContent: "center",
    padding:15,
  },
  image: {
    alignSelf:"flex-start",
    padding:0,
    margin:0,
    width: windowWidth*0.8,
    height: windowHeight*0.5,
    resizeMode:'contain',
    alignSelf:"center",
    margin:20,
  },
  xIcon:{
    resizeMode:'contain',
    maxHeight: 14,
  },
  title:{
    fontWeight:"bold",
    fontSize:17,
    margin:15,
    marginLeft:0,
  },
  text:{
    fontSize:14,
    margin:2,
    marginLeft:0,
  }
})