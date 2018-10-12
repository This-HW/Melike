Deadlines
import React, {Component} from 'react';
import { StyleSheet, View, } from 'react-native';
import DeadlineItem from './DeadlineItem';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

export default class Deadlines extends Component {

  constructor(props){
    super(props);
    this.state ={
      bgColor: '',
      deadlines: [
        {title : '-첫번째 리스트', endDay: "2018-10-18", memo:"세부사항", alarmCount:1, id:1 },
        {title : '-두번째 리스트', endDay: "2018-10-20", memo:"세부사항", alarmCount:1, id:2 },
        {title : '-세번째 리스트', endDay: "2018-10-08", memo:"세부사항", alarmCount:1, id:3 },
        {title : '-네번째 리스트', endDay: "2018-09-28", memo:"세부사항", alarmCount:1, id:4 },
        {title : '-다섯번째 리스트', endDay: "2018-10-10", memo:"세부사항", alarmCount:1, id:5 },
        {title : '-1', endDay: "2018-09-18", memo:"세부사항", alarmCount:1, id:6 },
        {title : '-2번제목', endDay: "2020-10-03", memo:"세부사항", alarmCount:1, id:7 },
        {title : '-3번제목', endDay: "2019-10-14", memo:"세부사항", alarmCount:1, id:8 },
        {title : '-2번제목', endDay: "2018-10-25", memo:"세부사항", alarmCount:1, id:9 },
        {title : '-3번제목', endDay: "2018-10-07", memo:"세부사항", alarmCount:1, id:10 },
        {title : '-2번제목', endDay: "2018-10-02", memo:"세부사항", alarmCount:1, id:11 },
        {title : '-4번제목', endDay: "2018-10-14", memo:"세부사항", alarmCount:1, id:12 },
        {title : '-3번제목', endDay: "2018-09-20", memo:"세부사항", alarmCount:1, id:13 },

      ]
    }
  }

  render(){
    return(
      <View style={{flex: 1}}>
        {/* Flat list + hidden swipealbe menu */}
        <SwipeListView
          useFlatList 
          style={{flex: 1}}
          data = {this.state.deadlines.sort((a,b) => a.endDay.localeCompare(b.endDay))}
          keyExtractor={ item => item.endDay}
          renderItem = {({item}) => 
            //each deadline item            
              <DeadlineItem 
                title={item.title} 
                endDay={item.endDay}
                memo={item.memo}
                id={item.id}
                type="renderItem"
              />
            }
          renderHiddenItem={ (data, rowMap) => (            
            <DeadlineItem 
                {...data.item}
                type="renderHiddenItem"
                styles={this.styles}
              />
          )}
          rightOpenValue={-150}
          leftOpenValue={0}
          disableRightSwipe
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

