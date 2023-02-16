import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import CustomButtonAdd from '../../components/CustomButtonAdd';

const MonitorScreen = props => {
    // const {navigation} = props;
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header.pad} />
                <View style={styles.header.title}>
                    <Text style={styles.header.title.text}>Theo dõi</Text>
                </View>
            </View>
            <ScrollView style={styles.body}>
                <Image
                    style={styles.body.imageEmpty}
                    source={require('../../assets/images/MoniterSkinConditionEmpty/Moniter-Skin-Condition-Empty-1x.png')}
                />
                <Text style={styles.body.text1}>Không có dữ liệu theo dõi</Text>
                <Text style={styles.body.text2}>
                    Hãy cập nhật tình trạng da để bắt đầu quá trình theo dõi
                </Text>
                <View style={styles.body.buttonAdd}>
                    <CustomButtonAdd label="Thêm ảnh" />
                </View>
            </ScrollView>
        </React.Fragment>
    );
};

export default MonitorScreen;
