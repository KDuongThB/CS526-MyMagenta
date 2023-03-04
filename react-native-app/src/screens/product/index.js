import React from 'react';
import styles from './styles';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import CustomButtonAdd from '../../components/CustomButtonAdd';
import {useState} from 'react';
import SCREEN_NAME from '../../assets/constants/screens';

var productData = [
    {
        id: 0,
        name: 'La Roche-Posay Effaclar Purifying Foaming Gel For Oily Sensitive Skin',
    },
    {
        id: 1,
        name: 'Bioderma Sebium H2O Purifying Cleansing Micellar Solution',
    },
    {
        id: 2,
        name: 'Skin1004 Madagascar Centella Asiatica Toning toner',
    },
    {
        id: 3,
        name: 'The Ordinary Niacinamide 10% + Zinc 1%',
    },
    {
        id: 4,
        name: 'Paula’s Choice Skin Perfecting 2% BHA Gel',
    },
    {
        id: 5,
        name: 'Derma Forte Gel',
    },
];

const ProductScreen = props => {
    const [data, setData] = useState(productData);

    const handleData = id => {
        productData = productData.filter(item => item.id !== id);
        setData(productData);
    };

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
                    {productData.map((pData, index) => {
                        return (
                            <View
                                style={styles.productContainer.item}
                                key={index}>
                                <View
                                    style={
                                        styles.productContainer.item.product
                                    }>
                                    <Image
                                        style={
                                            styles.productContainer.item.product
                                                .logo
                                        }
                                        source={require('../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png')}
                                    />
                                    <View
                                        style={
                                            styles.productContainer.item.product
                                                .name
                                        }>
                                        <Text
                                            style={
                                                styles.productContainer.item
                                                    .product.name.text
                                            }>
                                            {pData.name}
                                        </Text>
                                        <View
                                            style={
                                                styles.productContainer.item
                                                    .product.name.buttons
                                            }>
                                            <TouchableOpacity
                                                style={
                                                    styles.productContainer.item
                                                        .product.name.buttons
                                                        .button
                                                }>
                                                <Text
                                                    style={
                                                        styles.productContainer
                                                            .item.product.name
                                                            .buttons.button.text
                                                    }>
                                                    Da dầu
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={
                                                    styles.productContainer.item
                                                        .product.name.buttons
                                                        .button
                                                }>
                                                <Text
                                                    style={
                                                        styles.productContainer
                                                            .item.product.name
                                                            .buttons.button.text
                                                    }>
                                                    Rửa mặt
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={
                                        styles.productContainer.item
                                            .buttonRemove
                                    }
                                    onPress={() => handleData(pData.id)}>
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
                    })}
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default ProductScreen;
