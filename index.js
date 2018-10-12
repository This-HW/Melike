/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as DeadLine} from './app.json';
// import DeadLines from './src/Deadlines';
// import Intro from './src/Intro';

// import PwChange from './src/PwChange';
// import {name as DeadLine} from './app.json';
// AppRegistry.registerComponent(DeadLine, () => PwChange);

// import AccountControl from './src/AccountControl';
// import {name as DeadLine} from './app.json';
// AppRegistry.registerComponent(DeadLine, () => AccountControl);

// import MenuView from './src/MenuView';
// import {name as DeadLine} from './app.json';
// AppRegistry.registerComponent(DeadLine, () => MenuView);

import DeadlineMenual from './src/DeadlineMenual';
// import InviteFriends from './src/InviteFriends';
import {name as DeadLine} from './app.json';
AppRegistry.registerComponent(DeadLine, () => DeadlineMenual );
