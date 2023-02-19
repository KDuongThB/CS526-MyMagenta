import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigator from './src/routes/RootNavigator.js';
import AppNavigator from './src/routes/AppNavigator.js';
// import {Provider} from 'react-redux';
// import {Store} from './src/redux/store.js';

global.dataProcessBlocksLight = [
    {
        id: 0,
        title: 'Làm sạch',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
    {
        id: 1,
        title: 'Toner',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
    {
        id: 2,
        title: 'Serum',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
    {
        id: 3,
        title: 'Dưỡng ẩm',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
    {
        id: 4,
        title: 'Chống nắng',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
];

global.dataProcessBlocksNight = [
    {
        id: 0,
        title: 'Tẩy trang',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
    {
        id: 1,
        title: 'Làm sạch',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
    {
        id: 2,
        title: 'Toner',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
    {
        id: 3,
        title: 'Serum',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
    {
        id: 4,
        title: 'Điều trị',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
    {
        id: 5,
        title: 'Dưỡng ẩm',
        nameProcess: 'Thêm sản phẩm của bạn',
        image: "",
        isConflict: false
    },
];

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
