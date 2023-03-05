import React, {useState} from 'react';
import {useEffect} from 'react';
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
import SCREEN_NAME from '../../assets/constants/screens';
import {productData} from '../../data/productItem';
import {debounce} from 'lodash';

const SearchProductScreen = props => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState(productData);
    const {navigation} = props;

    useEffect(() => {
        const debouncedSearch = debounce(() => {
            if (searchTerm === '') {
                setData(productData);
            } else {
                const temp = productData.filter(pData =>
                    pData.productName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                );
                setData(temp);
            }
        }, 100);
        debouncedSearch();
        return () => debouncedSearch.cancel();
    }, [searchTerm,productData]);

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
                    {searchTerm !== '' &&
                        data.map((pData, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.showProductData}
                                    onPress={
                                        () =>
                                            navigation.navigate(
                                                SCREEN_NAME.PRODUCT_INFORMATION_SCREEN,
                                                {
                                                    itemId: pData._id,
                                                },
                                            )
                                        // {console.log(pData.id[0])}
                                    }>
                                    <View style={styles.body}>
                                        <Image
                                            style={styles.body.logo}
                                            source={pData.imageID}
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
