
import React, {Component} from 'react';
import {StyleSheet, Text, View , TouchableOpacity} from 'react-native';

class DeadlineItem extends Component {
  flagcolor = "#FFFFFFF";
  bordercolor  = "#FFFFFF";
  fontcolor = "#FFFFFF";

  static defaultProps ={
    title: "마감일 종류",
    endDay: "0000-00-00",
    memo: "내용",
    alarmCount: 1,
    id: 0,
  }

  constructor(props){
    super(props);

    this.state = {
      leftDay: 0
    }
  }
  
  getLeftDay = () => {
    let today = new Date();
    let day = new Date(this.props.endDay);

    let currentDate = day.getTime() - today.getTime()

    let temp = currentDate / 24 / 60 / 60 / 1000
    let conclusion = Math.ceil(temp);

    this.setBoxColor(conclusion) ;
    
  }

  setBoxColor = leftDay => {
    if( leftDay <= 1){
      this.flagcolor = "#da0033";
      this.bordercolor="#da0033";
      this.fontcolor="#ffffff";
    } else if (leftDay <= 7 ){
      this.flagcolor = "#ff726c";
      this.bordercolor="#ff726c";
      this.fontcolor="#ffffff";
    }
    else if (leftDay<=14){
      this.flagcolor="#ffaaa7";
      this.bordercolor="#ffaaa7";
      this.fontcolor="#ffffff";
    }
    else {
      this.flagcolor="#ffffff";
      this.bordercolor="#ededed";
      this.fontcolor="#4a4a4a";
    }

    this.setState({
      leftDay
    })
  }

  componentDidMount(){
    this.getLeftDay();
  }

  render() {
    const {title, endDay, memo, type } = this.props;
  
    if(type === "renderItem"){
    return (
      <TouchableOpacity activeOpacity={1} style={[styles.deadlineBox, { backgroundColor: this.flagcolor}]}>
        <View style={{flexDirection:'row', alignContent:'center', justifyContent:'space-between'}}>
          <View>
            <Text style={[styles.titleBox, { color:this.fontcolor }]}>{title}</Text>
          </View>
          <View >
            <Text style={[styles.leftDateBox, { color:this.fontcolor }]}>{this.state.leftDay}일 남음</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', alignContent:'center', justifyContent:'space-between'}}>
          <View >
            <Text style={[styles.memoBox, { color:this.fontcolor }]}>{memo}</Text>
          </View>
          <View >
            <Text style={[styles.endDayBox,{ color:this.fontcolor }]}>{endDay}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
    }else if(type === "renderHiddenItem"){
      return(
      <View style={[styles.rowBack, {backgroundColor: this.flagcolor} ]}>
        <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} /*   onPress={ } */  >
            <Text style={styles.backTextWhite}>삭제</Text>
        </TouchableOpacity>
        {/* Done button */}
        <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} /*   onPress={ } */  >
            <Text style={styles.backTextWhite}>해결</Text>
        </TouchableOpacity>
      </View>
      )
    }
  }
}
export default DeadlineItem;

const styles = StyleSheet.create({
  deadlineBox: {
    height:80,
    padding:5,
    paddingLeft:12,
    paddingRight:12,
    backgroundColor: "#ffffff",
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: "#ededed",
    alignContent: 'center',
    justifyContent: 'center',
  },
  rowBack: {
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: "#ededed",
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75
  },
  backRightBtnLeft: {
    backgroundColor: '#4a4a4a',
    right:75,
//    flex:1
    
  },
  backRightBtnRight: {
    backgroundColor: '#17bbad',
    right: 0
  },

  backTextWhite: {
    color: '#FFF',
    letterSpacing: -0.15,
    textAlign: 'justify',
  },
  titleBox:{
    margin:3,
//    fontFamily: "SpoqaHanSansJP",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: -0.39,
  },
  memoBox:{
    margin:3,
    marginTop:0,
//    fontFamily: "SpoqaHanSansJP",
    fontSize: 12,
    fontWeight: "300",
    letterSpacing: -0.1,
  },
  leftDateBox:{
    margin:3,
//    fontFamily: "SpoqaHanSansJP",
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: -0.39,
  },
  endDayBox:{
    margin:3,
    marginTop:0,
//    fontFamily: "SpoqaHanSansJP",
    fontSize: 12,
    fontWeight: "300",
    letterSpacing: -0.39,
  },
});
