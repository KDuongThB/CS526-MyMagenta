import React from 'react';
import styles from './styles';
import {View, Text, ScrollView} from 'react-native';
import CustomButtonAdd from '../../components/CustomButtonAdd';
import {useState} from 'react';
import SCREEN_NAME from '../../assets/constants/screens';

const ProductScreen = props => {
    const [quatity, setQuatity] = useState(0);

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
                    <Text style={styles.body.quatity}>{quatity} sản phẩm</Text>
                </View>
                <ScrollView style={styles.product} />
            </View>
        </React.Fragment>
    );
};

export default ProductScreen;
