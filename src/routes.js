import {createStackNavigator, createAppContainer} from 'react-navigation';

import login from './pages/login';

import register from './pages/register';

const AppNavigator =  createStackNavigator({
    login,
    //register,
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;