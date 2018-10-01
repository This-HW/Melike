import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  image: {
    resizeMode:'contain',
    flex:0.24,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  text: {
    color: 'rgb(155, 155, 155)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize:19,
    fontWeight: "100",
    paddingHorizontal: 16,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight:'bold',
    color: 'rgb(74, 74, 74)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 23,
  },
  buttonStyle:{
    flex: 1,
    backgroundColor: 'rgb(255, 114, 108)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
  }
});

//DeadLine intro items
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

  constructor(props){
    super(props)

  this.state = {
    showRealApp: false
  }
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  // Customizing the intro items for DeadLine
  _renderItem = props => {
    return (
    <View style={[styles.mainContent,
      {
      paddingTop: props.topSpacer,
      paddingBottom: props.bottomSpacer,
      width: props.width,
      height: props.height,
    }]} >
      <Image source={props.image} style={props.imageStyle} />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>)
  }
  render() {
    if (this.state.showRealApp) {
      return <Intro />;
    } else {
      return (
       <AppIntroSlider 
        slides={slides} 
        renderItem={this._renderItem}
        bottomButton
        showSkipButton
        skipLabel="시작하기"
        doneLabel="시작하기"
        hideNextButton
        buttonStyle={styles.buttonStyle}
        onDone={this._onDone}
        onSkip={this._onDone}
        />
      );
    }
  }
}