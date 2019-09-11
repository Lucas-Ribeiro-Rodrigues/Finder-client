import {createStackNavigator, createAppContainer} from 'react-navigation';
import login                from './pages/SinglePages/login';
import register             from './pages/SinglePages/register';
import foundItemRegister    from './pages/SinglePages/foundItemRegister';
import lostItemRegister     from './pages/SinglePages/lostItemRegister';
import map                  from './pages/Tabs/map';
import profile              from './pages/Tabs/profile';
import main                 from './pages/main';

const AppNavigator =  createStackNavigator({
    Login   : {screen: login},
    Register: {screen: register},
    Map     : {screen: map},
    Profile : {screen: profile},
    Main    : {screen: main}, 
    LostItemRegister: {screen: lostItemRegister},
    FoundItemRegister: {screen: foundItemRegister}
}, {initialRouteName: 'Main'});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;