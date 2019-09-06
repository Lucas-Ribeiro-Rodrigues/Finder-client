import {createStackNavigator, createAppContainer} from 'react-navigation';

import login    from './pages/login';
import register from './pages/register';
import map      from './pages/map'
const AppNavigator =  createStackNavigator({
    Login   : {screen: login},
    Register: {screen: register},
    Map     : {screen: map} 
}, {initialRouteName: 'Login'});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;