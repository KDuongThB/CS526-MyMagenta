import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomButtonAdd from '../../components/CustomButtonAdd';

const faceImage = [
    {
        id: 1,
        date: '10 Th01 2023',
        image: require('../../assets/images/Monitor_image/145288752_2951851131760470_5389648903642415029_n.jpg'),
    },
    {
        id: 2,
        date: '15 Th11 2022',
        image: require('../../assets/images/Monitor_image/309244433_3440398112905767_7719438081529738242_n.jpg'),
    },
    {
        id: 3,
        date: '03 Th09 2022',
        image: require('../../assets/images/Monitor_image/145288752_2951851131760470_5389648903642415029_n.jpg'),
    },
];

const MonitorScreen = props => {
    // const {navigation} = props;
    const [data, setData] = useState(faceImage);
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header.pad} />
                <View style={styles.header.title}>
                    <Text style={styles.header.title.text}>Theo dõi</Text>
                </View>
                {data.length === 0 && (
                    <ScrollView style={styles.body}>
                        <Image
                            style={styles.body.imageEmpty}
                            source={require('../../assets/images/MoniterSkinConditionEmpty/Moniter-Skin-Condition-Empty-1x.png')}
                        />
                        <Text style={styles.body.text1}>
                            Không có dữ liệu theo dõi
                        </Text>
                        <Text style={styles.body.text2}>
                            Hãy cập nhật tình trạng da để bắt đầu quá trình theo
                            dõi
                        </Text>
                        <View style={styles.body.buttonAdd}>
                            <CustomButtonAdd label="Thêm ảnh" />
                        </View>
                    </ScrollView>
                )}
                {data.length !== 0 && (
                    <ScrollView style={styles.body}>
                        {data.map((iData, index) => {
                            return (
                                <View
                                    key={index}
                                    style={styles.body.showImageData}>
                                    <Text style={styles.body.imageDate}>
                                        {iData.date}
                                    </Text>
                                    <Image
                                        style={styles.body.image}
                                        source={iData.image}
                                    />
                                </View>
                            );
                        })}
                        <View style={styles.body.buttonAdd}>
                            <CustomButtonAdd label="Thêm ảnh" />
                        </View>
                    </ScrollView>
                )}
            </View>
        </React.Fragment>
    );
};

export default MonitorScreen;
