import React from 'react';
import styles from './styles';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import CustomButtonAdd from '../../components/CustomButtonAdd';
import {useState, useEffect} from 'react';
import SCREEN_NAME from '../../assets/constants/screens';
import {productData} from '../../data/productItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const inputData = [
    {
        _id: 0,
        productName: 'La Roche Posay Effaclar Astringent Lotion',
        age: 'Trên 14 tuổi',
        skin: 'Da dầu',
        chemicals: ['Thermal Spring Water', 'Glycerin', 'BHA'],
        uses: [
            'Làm thông thoáng và thu nhỏ lỗ chân lông. ',
            'Làm dịu, cân bằng da và làm sạch sâu.',
        ],
        instructions:
            'Sử dụng 2 lần mỗi ngày vào buổi sáng và tối. Làm sạch da và lau khô mặt. Thấm sản phẩm lên miếng bông cotton. Chậm nhẹ lên khắp mặt. Tránh vùng da quanh mắt.',
        limit: [true, true],
        stepType: 'Toner',
        imageID: require('../../assets/images/Product/0.png'),
        __v: 0,
    },
    {
        _id: 1,
        productName: 'La Roche Posay Effaclar Purifying Foaming Gel Cleanser',
        age: 'Trên 14 tuổi',
        skin: 'Da dầu mụn',
        chemicals: ['Thermal Spring Water', 'Zinc'],
        uses: [
            'Loại bỏ bụi bẩn và bã nhờn trên da. ',
            'Giảm khả năng xuất hiện của mụn đầu đen và kiểm soát độ bóng nhờn của da.',
            'Đem lại làn da sạch và tươi mát.',
        ],
        instructions:
            'Sử dụng 2 lần mỗi ngày vào buổi sáng và tối. Làm ẩm da với nước ấm, cho một lượng vừa đủ sản phẩm ra tay, tạo bọt, thoa sản phẩm lên mặt, tránh vùng da quanh mắt. Massage nhẹ nhàng, sau đó rửa sạch lại với nước và thấm khô.',
        limit: [true, true],
        stepType: 'Làm sạch',
        imageID: require('../../assets/images/Product/1.png'),
        __v: 0,
    },
    {
        _id: 2,
        productName: 'La Roche Posay Effaclar Micellar Water Ultra Oily Skin',
        age: 'Trên 18 tuổi',
        skin: 'Da dầu',
        chemicals: ['Thermal Spring Water', 'Zinc', 'Glycerin'],
        uses: [
            'Làm sạch nhẹ nhàng, mà không làm khô da.',
            'Loại bỏ hiệu quả bụi bẩn.',
            'Giúp da sạch, thoáng và giảm bóng nhờn.',
        ],
        instructions:
            'Thấm sản phẩm vào miếng bông tẩy trang và làm sạch vùng da mặt, cổ. Nhẹ nhàng lau khô da, sử dụng khăn sạch hoặc miếng bông tẩy trang mới nếu cảm thấy bụi bẩn và lớp trang điểm vẫn còn trên da.',
        limit: [false, true],
        stepType: 'Tẩy trang',
        imageID: require('../../assets/images/Product/2.png'),
        __v: 0,
    },
    {
        _id: 3,
        productName: 'La Roche Posay Micellar Water Ultra Sensitive Skin',
        age: 'Trên 18 tuổi',
        skin: 'Da nhạy cảm',
        chemicals: ['Thermal Spring Water', 'Glyco Micellar', 'Glycerin'],
        uses: [
            'Làm sạch đến 99% lớp trang điểm, 70% mascara và các hạt bụi siêu nhỏ có trong khói xe và môi trường ô nhiễm.',
            'Cung cấp độ ẩm và giảm ma sát tối đa khi làm sạch.',
            'Chống oxy hóa, giúp bảo vệ da trước môi trường ô nhiễm.',
        ],
        instructions:
            'Thấm sản phẩm vào miếng bông tẩy trang và làm sạch vùng da mặt, cổ. Nhẹ nhàng lau khô da, sử dụng khăn sạch hoặc miếng bông tẩy trang mới nếu cảm thấy bụi bẩn và lớp trang điểm vẫn còn trên da.',
        limit: [false, true],
        stepType: 'Tẩy trang',
        imageID: require('../../assets/images/Product/3.png'),
        __v: 0,
    },
];

const ProductScreen = props => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                // await AsyncStorage.setItem(
                //     'userProduct',
                //     JSON.stringify(inputData),
                // );
                const dataCheck = await AsyncStorage.getItem('userProduct');
                const checkData = JSON.parse(dataCheck);
                console.log('CheckData: ', checkData);
                setData(checkData);
                console.log('Data got successfully');
            } catch (e) {
                console.log('Failed to get data: ', e);
            }
        };
        getData();
    }, []);
    const renderData = () => {
        if (data) {
            try {
                return data.map((pData, index) => {
                    return (
                        <View style={styles.productContainer.item} key={index}>
                            <View style={styles.productContainer.item.product}>
                                <Image
                                    style={
                                        styles.productContainer.item.product
                                            .logo
                                    }
                                    // source={{uri: "../../assets/images/Product/product_63f03e9b065f671f8f19a453.png"}}
                                    // source={{uri: data[0].imageID}}\
                                    source={pData.imageID}
                                />
                                <View
                                    style={
                                        styles.productContainer.item.product
                                            .name
                                    }>
                                    <Text
                                        style={
                                            styles.productContainer.item.product
                                                .name.text
                                        }>
                                        {pData.productName}
                                    </Text>
                                    <View
                                        style={
                                            styles.productContainer.item.product
                                                .name.buttons
                                        }>
                                        <TouchableOpacity
                                            style={
                                                styles.productContainer.item
                                                    .product.name.buttons.button
                                            }>
                                            <Text
                                                style={
                                                    styles.productContainer.item
                                                        .product.name.buttons
                                                        .button.text
                                                }>
                                                {pData.skin}
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={
                                                styles.productContainer.item
                                                    .product.name.buttons.button
                                            }>
                                            <Text
                                                style={
                                                    styles.productContainer.item
                                                        .product.name.buttons
                                                        .button.text
                                                }>
                                                {pData.stepType}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={
                                    styles.productContainer.item.buttonRemove
                                }
                                onPress={() => handleData(pData._id)}>
                                <Text
                                    style={
                                        styles.productContainer.item
                                            .buttonRemove.text
                                    }>
                                    Xóa sản phẩm
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                });
            } catch (e) {
                console.log('error parsing data: ', e);
                // return <Text>Error: Failed to parse data.</Text>;
            }
        } else {
            return <ActivityIndicator />;
        }
    };
    const handleData = async id => {
        await AsyncStorage.setItem('userProduct', JSON.stringify(data));
        const existingData = await AsyncStorage.getItem('userProduct');
        var myObject = JSON.parse(existingData);
        console.log('myObject: ', myObject);
        try {
            myObject = myObject.filter(item => item._id !== id);
            setData(myObject);
            await AsyncStorage.setItem('userProduct', JSON.stringify(data));
        } catch (e) {
            console.log('Cannot filter');
        }
    };
    // useEffect(() => {
    //     updateData();
    // }, []);

    const onNavigateToSearchProduct = () => {
        props.navigation.navigate(SCREEN_NAME.SEARCH_PRODUCT_SCREEN);
    };

    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header.pad} />
                    <Text style={styles.header.text}>Sản phẩm</Text>
                </View>
                <View style={styles.button}>
                    <CustomButtonAdd
                        label="Thêm sản phẩm vào kho"
                        onNavigate={onNavigateToSearchProduct}
                    />
                </View>
                <View style={styles.body}>
                    <Text style={styles.header.text}>Kho của tôi</Text>
                    <Text style={styles.body.quatity}>
                        {data.length} sản phẩm
                    </Text>
                </View>
                <ScrollView style={styles.productContainer}>
                    {renderData()}
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default ProductScreen;
