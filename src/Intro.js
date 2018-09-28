import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  image: {
    resizeMode:'contain',
    flex:0.2,
    // width: 250,
    // height: 150,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  // image: {
  //   width: 320,
  //   height: 320,
  // },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});

const slides = [
  {
    key: 'money_for',
    title: '데드라인 손실방지 앱',
    text: '데드라인을 놓쳐\n손해봤던 경험 있으신가요?',
    image: require('./assets/money_for.png'),
    imageStyle: styles.image,
    backgroundColor: '#ffffff',
  },
  {
    key: 'hand_for',
    title: '한 번에! 간편 등록',
    text: '로그인 한번으로 손쉽게 등록하고\n시간 순서대로 관리하세요',
    image: require('./assets/hand_for.png'),
    imageStyle: styles.image,
    backgroundColor: '#ffffff',
  },
  {
    key: 'sandglass_for',
    title: '한 눈에! 마감 순위 정렬',
    text: '데드라인 관련\n꿀정보까지 추천해드려요 :)',
    image: require('./assets/sandglass_for.png'),
    imageStyle: styles.image,
    backgroundColor: 'ffffff',
  },
  {
    key: 'alarm_for',
    title: '리마인드',
    text: '제 때 알람을 줘서\n까먹을 일 없어요!',
    image: require('./assets/alarm_for.png'),
    imageStyle: styles.image,
    backgroundColor: 'ffffff',
  }
];

export default class Intro extends React.Component {
  state = {
    showRealApp: false
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  // _renderItem = props => (

  // )
  render() {
    if (this.state.showRealApp) {
      return <Intro />;
    } else {
      return (
       <AppIntroSlider 
        slides={slides} 
        onDone={this._onDone}
        // renderItem={this._renderItem}
        bottomButton
        
        />
      );
    }
  }
}