import {createStackNavigator, createAppContainer} from 'react-navigation';

import login        from './pages/SinglePages/login';
import register     from './pages/SinglePages/register';
import map          from './pages/Tabs/map';
import profile      from './pages/Tabs/profile';
const AppNavigator =  createStackNavigator({
    Login   : {screen: login},
    Register: {screen: register},
    Map     : {screen: map},
    Profile : {screen: profile}
}, {initialRouteName: 'Map'});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;