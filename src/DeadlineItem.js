DeadlineItem
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class DeadlineItem extends Component {
  static defaultProps ={
    title: "마감일 종류",
    endDay: "0000-00-00",
    memo: "내용",
    alarmCount: 1,
    id: 0
  }
 
  getLeftDay = () => {

    let today = new Date();
    let day = new Date(this.props.endDay);

    let currentDate = day.getTime() - today.getTime()

    let temp = currentDate / 24 / 60 / 60 / 1000
    let conclusion = Math.ceil(temp);

    return conclusion;
    
  }

  setBoxColor = () => {
    let leftDay = this.getLeftDay();

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
  }

  render() {

    const {title, endDay, memo } = this.props;
    let leftDay = this.getLeftDay();
    this.setBoxColor();

    return (
      <View style={[styles.deadlineBox, { backgroundColor: this.flagcolor}]}>
        <View style={{flexDirection:'row', alignContent:'center', justifyContent:'space-between'}}>
          <View>
            <Text style={[styles.titleBox, { color:this.fontcolor }]}>{title}</Text>
          </View>
          <View >
            <Text style={[styles.leftDateBox, { color:this.fontcolor }]}>{leftDay}일 남음</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deadlineBox: {
    height:80,
    borderBottomWidth: 0.7,
    padding:5,
    paddingLeft:12,
    paddingRight:12,
    backgroundColor: "#ffffff",
    borderColor: "#ededed",
    alignContent: 'center',
    justifyContent: 'center',
  },
  titleBox:{
    margin:3,
    fontFamily: "SpoqaHanSansJP",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: -0.39,
  },
  memoBox:{
    margin:3,
    marginTop:0,
    fontFamily: "SpoqaHanSansJP",
    fontSize: 12,
    fontWeight: "300",
    letterSpacing: -0.1,
  },
  leftDateBox:{
    margin:3,
    fontFamily: "SpoqaHanSansJP",
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: -0.39,
  },
  endDayBox:{
    margin:3,
    marginTop:0,
    fontFamily: "SpoqaHanSansJP",
    fontSize: 12,
    fontWeight: "300",
    letterSpacing: -0.39,
  },
});
