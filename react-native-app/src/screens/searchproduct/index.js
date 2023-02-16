import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import OnBack from '../../components/OnBack';
import {ICSearch, ICChevronRight} from '../../assets/icons';
import COLORS from '../../assets/constants/colors';

const SearchProductScreen = props => {
    const {navigation} = props;
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header.pad} />
                    <View style={styles.header.title}>
                        <OnBack onBack={() => navigation.goBack()} />
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
            </View>
        </React.Fragment>
    );
};

export default SearchProductScreen;
