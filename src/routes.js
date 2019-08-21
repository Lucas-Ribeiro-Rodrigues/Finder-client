import {createStackNavigator, createAppContainer} from 'react-navigation';

import login from './pages/login';

const AppNavigator =  createStackNavigator({
    login,
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;