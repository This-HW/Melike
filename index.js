/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as DeadLine} from './app.json';
// import DeadLines from './src/Deadlines';
// import {name as DeadLine} from './app.json';
import Intro from './src/Intro';
import {name as DeadLine} from './app.json';

AppRegistry.registerComponent(DeadLine, () => Intro);
