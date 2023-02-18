import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigator from './src/routes/RootNavigator.js';
import AppNavigator from './src/routes/AppNavigator.js';
// import {Provider} from 'react-redux';
// import {Store} from './src/redux/store.js';

const App = () => {
    return (
        // <Provider store={Store}>
        <SafeAreaView style={{flex: 1}}>
            {/* <AppNavigator /> */}
            <RootNavigator />
        </SafeAreaView>
        // </Provider>
    );
};

export default App;
