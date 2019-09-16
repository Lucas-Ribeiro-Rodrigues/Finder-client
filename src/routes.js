import {createStackNavigator, createAppContainer} from 'react-navigation';
import login                from './pages/SinglePages/login';
import register             from './pages/SinglePages/register';
import itemRegister    from './pages/SinglePages/Wizards/itemRegister/itemRegister';
import main                 from './pages/main';

const AppNavigator =  createStackNavigator({
    Login   : {screen: login},
    Register: {screen: register},
    Main    : {screen: main}, 
    ItemRegister: {screen: itemRegister}   
}, {initialRouteName: 'Main'});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;