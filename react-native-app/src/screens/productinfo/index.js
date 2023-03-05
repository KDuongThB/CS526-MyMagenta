import React, {useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import styles from './styles';
import OnBack from '../../components/OnBack';
import {ICSearch, ICChevronRight} from '../../assets/icons';
import COLORS from '../../assets/constants/colors';
import {normalize, scaleX, scaleY} from '../../helperFunction.js';
import {productData} from '../../data/productItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SCREEN_NAME from '../../assets/constants/screens';

const SearchProductScreen = ({route, navigation}) => {
    const {itemId} = route.params;
    console.log(itemId);
    const data = productData.filter(x => x._id === itemId)[0];
    console.log(data.productName);
    const updateData = async (newData) => {
        try {
          await AsyncStorage.setItem('userProduct', JSON.stringify(newData));
          console.log('Data updated successfully');
        } catch (e) {
          console.log('Failed to update data: ', e);
          alert('Failed to update data');
        }
      };
    const saveData = async () => {
        try {
            if (!data) {
                console.log('No data to save');
                return;
            }
            updateData(data);
            const dataCHeck = await AsyncStorage.getItem('userProduct');
            console.log(dataCHeck);
            console.log('Data saved successfully');
            alert('Data saved successfully');
            navigation.navigate(SCREEN_NAME.PRODUCT_SCREEN)
        } catch (e) {
            console.log('Failed to save data: ', e);
            alert('Failed to save data');
        }
    };
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header.pad} />
                    <View style={styles.header.title}>
                        <OnBack
                            onBack={() => navigation.goBack()}
                            color={COLORS.CARDINAL}
                        />
                        <Text style={styles.header.title.text}>
                            Thông tin sản phẩm
                        </Text>
                    </View>
                </View>
                <View style={styles.product}>
                    <Image style={styles.product.logo} source={data.imageID} />
                    <Text style={styles.product.name}>{data.productName}</Text>
                    <TouchableOpacity
                        style={styles.product.button}
                        onPress={saveData}>
                        <Text style={styles.product.button.text}>
                            Thêm vào kho
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.productInfo}>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Độ tuổi phù hợp
                        </Text>
                        <Text style={styles.productInfo.detail.content}>
                            {data.age}
                        </Text>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Loại da phù hợp
                        </Text>
                        <Text style={styles.productInfo.detail.content}>
                            {data.skin}
                        </Text>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Thành phần chính
                        </Text>
                        <Text
                            style={
                                (styles.productInfo.detail.content,
                                {
                                    color: COLORS.AZURE_RADIANCE,
                                    fontSize: normalize(14),
                                    marginTop: scaleY(10),
                                })
                            }>
                            {data.chemicals}
                        </Text>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Công dụng chính
                        </Text>
                        <View>
                            {data.uses.map((dataUses, index) => {
                                return (
                                    <Text
                                        key={index}
                                        style={
                                            styles.productInfo.detail.content
                                        }>
                                        {`\u25CF ${dataUses}`}
                                    </Text>
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Cách dùng
                        </Text>
                        <View>
                            {data.uses.map((dataUses, index) => {
                                return (
                                    <Text
                                        key={index}
                                        style={
                                            styles.productInfo.detail.content
                                        }>
                                        {`${dataUses}`}
                                    </Text>
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Giới hạn sử dụng
                        </Text>
                        <Text style={styles.productInfo.detail.content}>
                            {data.use_limit}
                        </Text>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Bước sử dụng
                        </Text>
                        <Text style={styles.productInfo.detail.content}>
                            {data.step}
                        </Text>
                    </View>
                    <View style={styles.padding} />
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default SearchProductScreen;
