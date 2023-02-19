import React from 'react';
import styles from './styles';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import CustomButtonAdd from '../../components/CustomButtonAdd';
import { useState } from 'react';
import SCREEN_NAME from '../../assets/constants/screens';
import axios from 'axios';
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

const ProductScreen = ({ route, navigation }) => {
    const { stepType } = route.params;
    const [data, setData] = useState(global.user.storages.filter(value => value.stepType === stepType));
    console.log(data);
    const handleData = id => {
        productData = global.user.storages.filter(value => value.stepType == stepType).filter(item => item.id !== id);
        setData(productData);
    };

    const onNavigateToSearchProduct = () => {
        navigation.navigate(SCREEN_NAME.SEARCH_PRODUCT_SCREEN);
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
                    {data.map((pData, index) => {
                        return (
                            <TouchableOpacity
                                style={styles.productContainer.item}
                                key={index}
                                onPress={() => {
                                    console.log("Hellooo")
                                    if (global.parts === "Buổi sáng") {
                                        global.dataProcessBlocksLight.forEach((item, i) => {
                                            if (item.title === pData.stepType) {
                                                global.dataProcessBlocksLight[i] = {
                                                    ...global.dataProcessBlocksLight[i],
                                                    id: pData._id,
                                                    nameProcess: pData.productName,
                                                    image: pData.imageID,
                                                }
                                                list_product = []
                                                // for (let index = 0; index < global.dataProcessBlocksLight.length - 1; index++) {
                                                //     for (let _index = index + 1; _index < global.dataProcessBlocksLight.length; _index++) {
                                                //         if (global.dataProcessBlocksLight[index].id.toString().length > 1 && global.dataProcessBlocksLight[_index].id.toString().length > 1) {
                                                //             const data = {
                                                //                 productA: global.dataProcessBlocksLight[index].id,
                                                //                 productB: global.dataProcessBlocksLight[_index].id
                                                //             };
                                                //             console.log(global.dataProcessBlocksLight[index].id)
                                                //             console.log(global.dataProcessBlocksLight[_index].id)
                                                //             axios.get('http://10.0.2.2:8000/v1/product/compare/', data)
                                                //             .then(response => {
                                                //                 console.log(response);
                                                //             })
                                                //             .catch(error => {
                                                //                 console.error(error);
                                                //             });
                                                                
                                                //         }
                                                //     }
                                                // }
                                            }
                                        })
                                    } else {
                                        global.dataProcessBlocksNight.forEach((item, i) => {
                                            if (item.title === pData.stepType) {
                                                global.dataProcessBlocksNight[i] = {
                                                    ...global.dataProcessBlocksNight[i],
                                                    id: pData._id,
                                                    nameProcess: pData.productName,
                                                    image: pData.imageID,
                                                }
                                            }
                                        })
                                    }
                                    console.log(global.dataProcessBlocksNight);
                                    navigation.navigate(SCREEN_NAME.ADD_PROCESS_SCREEN)
                                }}>
                                <View
                                    style={
                                        styles.productContainer.item.product
                                    }>
                                    <Image
                                        style={
                                            styles.productContainer.item.product
                                                .logo
                                        }
                                        source={{ uri: pData.imageID }}
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
                                            {pData.productName}
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
                                                    {pData.skin}
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
                                                    {pData.stepType}
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
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default ProductScreen;
