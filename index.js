/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as DeadLine} from './app.json';
// import DeadLines from './src/Deadlines';
// import Intro from './src/Intro';
// import PwChange from './src/PwChange';
// import AccountControl from './src/AccountControl';
import MenuView from './src/MenuView';
import {name as DeadLine} from './app.json';

AppRegistry.registerComponent(DeadLine, () => MenuView);
