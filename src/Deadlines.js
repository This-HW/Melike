Deadlines
import React, {Component} from 'react';
import { StyleSheet, FlatList, Text, View} from 'react-native';
import DeadlineItem from './DeadlineItem';

export default class Deadlines extends Component {

  state = {
    deadlines: [
      {title : '-첫번째 리스트', endDay: "2018-10-18", memo:"세부사항", alarmCount:1, id:1 },
      {title : '-두번째 리스트', endDay: "2018-11-18", memo:"세부사항", alarmCount:1, id:2 },
      {title : '-세번째 리스트', endDay: "2018-09-30", memo:"세부사항", alarmCount:1, id:3 },
      {title : '-네번째 리스트', endDay: "2018-09-28", memo:"세부사항", alarmCount:1, id:4 },
      {title : '-다섯번째 리스트', endDay: "2018-09-29", memo:"세부사항", alarmCount:1, id:5 },
      {title : '-1', endDay: "2018-09-18", memo:"세부사항", alarmCount:1, id:6 },
      {title : '-2번제목', endDay: "2020-09-28", memo:"세부사항", alarmCount:1, id:7 },
      {title : '-3번제목', endDay: "2019-09-24", memo:"세부사항", alarmCount:1, id:8 },
      {title : '-2번제목', endDay: "2018-09-25", memo:"세부사항", alarmCount:1, id:9 },
      {title : '-3번제목', endDay: "2018-09-08", memo:"세부사항", alarmCount:1, id:10 },
      {title : '-2번제목', endDay: "2018-09-22", memo:"세부사항", alarmCount:1, id:11 },
      {title : '-4번제목', endDay: "2018-09-21", memo:"세부사항", alarmCount:1, id:12 },
      {title : '-3번제목', endDay: "2018-09-20", memo:"세부사항", alarmCount:1, id:13 },

    ]
  }


  render(){

    return(
      <View style={{flex: 1}}>

        <FlatList 
        style={{flex: 1}}
        data = {this.state.deadlines.sort((a,b) => a.endDay.localeCompare(b.endDay))}
        keyExtractor={ item => item.endDay}
        renderItem = {({item}) => <DeadlineItem 
          title={item.title} 
          endDay={item.endDay}
          memo={item.memo}
          id={item.id} 
          />}
        />        

      </View>

    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },


});

