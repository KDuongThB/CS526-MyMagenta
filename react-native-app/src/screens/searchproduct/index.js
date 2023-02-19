import React, { useState } from 'react';
import { useEffect } from 'react';
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
import { ICSearch, ICChevronRight } from '../../assets/icons';
import COLORS from '../../assets/constants/colors';
import axios from 'axios';


// const productData = [
//     {
//         id: 0,
//         name: 'La Roche-Posay Effaclar Purifying Foaming Gel For Oily Sensitive Skin',
//     },
//     {
//         id: 1,
//         name: 'La Roche-Posay Effaclar Duo+',
//     },
//     {
//         id: 2,
//         name: 'La Roche-Posay Anthelios XL Dry Touch Gel-Cream SPF 50+ UVB & UVA',
//     },
//     {
//         id: 3,
//         name: 'La Roche-Posay Hyalu B5 Serum',
//     },
//     {
//         id: 4,
//         name: 'La Roche-Posay Effaclar Pure Vitamin C10 Serum ',
//     },
// ];

// const url = 'http://10.0.2.2:8000/v1/product/'
const url = 'https://mymagenta-dev.herokuapp.com/v1/product'

const SearchProductScreen = props => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { navigation } = props;
    // productData = []
    handleLoadData = async () => {
        try {
            const resp = await axios.get(url, {}).then();
            var temp = resp.data.filter(pData =>
                pData.productName.toLowerCase().includes(searchTerm.toLowerCase()),
            );
            setData(temp);
            // setData(resp.data)
        } catch (error) {
            alert("Không tìm thấy sản phẩm")
            console.log(error);
        }
    }

    useEffect(() => {
        // const intervalID = setInterval(() => {
        //     if (searchTerm === '') {
        //         setData(productData);
        //     } else {
        //         const temp = productData.filter(pData =>
        //             pData.name.toLowerCase().includes(searchTerm.toLowerCase()),
        //         );
        //         setData(temp);
        //     }
        // }, 100);

        // return () => clearInterval(intervalID);
        handleLoadData();
    }, [searchTerm]);

    const product = handleLoadData

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
                            Thêm sản phẩm vào kho
                        </Text>
                    </View>
                </View>
                <View style={styles.textboxContainer}>
                    <View style={styles.textboxContainer.icsearch}>
                        <ICSearch />
                    </View>
                    <TextInput
                        style={styles.textboxContainer.input}
                        placeholder="Tìm kiếm"
                        placeholderTextColor={COLORS.NOBEL}
                        value={searchTerm}
                        onChangeText={text => {
                            setSearchTerm(text);
                        }}
                    // showSoftInputOnFocus={false}
                    />
                </View>
                <View style={styles.noItemContainer}>
                    <View style={styles.noItemContainer.text}>
                        <Text style={styles.noItemContainer.text.text1}>
                            Không tìm được sản phẩm?
                        </Text>
                        <Text style={styles.noItemContainer.text.text2}>
                            Thêm thủ công
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.noItemContainer.icnav}>
                        <ICChevronRight color={COLORS.WHITE} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.showProductContainer}>
                    {data.map((pData, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.showProductData}
                                onPress={() =>
                                    navigation.navigate(
                                        SCREEN_NAME.PRODUCT_INFORMATION_SCREEN,
                                        {
                                            itemId: pData._id,
                                        },
                                    )
                                }>
                                <View style={styles.body}>
                                    <Image
                                        style={styles.body.logo}
                                        source={"../../assets/images/Product/product_" + pData['_id'] + ".png"}
                                    />
                                    <Text style={styles.body.name}>
                                        {pData.productName}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default SearchProductScreen;
