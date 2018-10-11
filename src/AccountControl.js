import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';


export default class AccountControl extends React.Component {

  constructor (props) {
    super (props)
  }
  
  state = {

  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.topLine}>
          {/* 패널 삽입부 */}
        </View>

        <View style={styles.contents}>
          <TouchableOpacity style={styles.menu}>
            <Text style={{fontSize:20, margin:12, color:"#4a4a4a"}} >로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={{fontSize:20, margin:12, color:"#4a4a4a"}} >비밀번호 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={{fontSize:20, margin:12, color:"#4a4a4a"}} >다른 계정으로 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={{fontSize:20, margin:12, color:"#4a4a4a"}} >계정 삭제</Text>
          </TouchableOpacity>
        
        </View>

        <View style={styles.bottomLine}>
          {/* 쓰지 않지만 혹시 모르니 유지 */}
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
    justifyContent:"flex-start",
    backgroundColor: "#ff726c",
    padding: 15,
  },
  contents:{
    flex:0.8,
    alignItems:"center",
    justifyContent:"flex-start",
    padding: 15,
    alignItems: "stretch",
    paddingTop: 38,
  },
  bottomLine:{
    flex:0.1,
    justifyContent:"space-between"
  },
  menu:{
   borderBottomWidth:0.5,
   borderColor: "#ededed",
   padding:5,
   justifyContent:"center",
  },
})