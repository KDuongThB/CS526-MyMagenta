import React, {useState} from 'react';
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
import Checkbox from 'expo-checkbox';
import COLORS from '../../assets/constants/colors';
import {normalize, scaleX, scaleY} from '../../helperFunction.js';
const productData = [
    {
        id: 0,
        name: 'Paula’s Choice Skin Perfecting 2% BHA Gel',
        skin: 'Mọi loại da',
        materials: 'Hyaluronic Acid, Vitamin B5, Madecassoside',
        properties: ['Salicilic Acid', 'Butylene Glycol', ' Methylpropanediol'],
        usage: [
            'Thoa lên vùng da mặt vào mỗi sáng và/hoặc tối sau bước làm sạch. Không thoa lên vết thương hở',
            'Để mạng lại hiệu quả tốt nhất, nên sử dụng kem dưỡng để khóa ẩm sau cùng.',
        ],
        use_limit: 'Dùng mỗi ngày (sáng và tối). Tối đa 2 lần trong ngày.',
        step: 'Tẩy tế bào chết',
    },
];
const dailyCheck = [
    {
        id: 0,
        day: 'Th 2',
        isChecked: false,
    },
    {
        id: 1,
        day: 'Th 3',
        isChecked: false,
    },
    {
        id: 2,
        day: 'Th 4',
        isChecked: false,
    },
    {
        id: 3,
        day: 'Th 5',
        isChecked: false,
    },
    {
        id: 4,
        day: 'Th 6',
        isChecked: false,
    },
    {
        id: 5,
        day: 'Th 7',
        isChecked: false,
    },
    {
        id: 6,
        day: 'CN',
        isChecked: false,
    },
];
const AddProductToRoutine = ({route, navigation}) => {
    // const {itemId} = route.params;
    // const data = productData.filter(x => x.id === itemId)[0];
    const [dateCheck, setDateCheck] = useState(dailyCheck);
    const handleChange = id => {
        let temp = dateCheck.map(product => {
            if (id === product.id) {
                return {...product, isChecked: !product.isChecked};
            }
            return product;
        });
        setDateCheck(temp);
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
                            Thêm sản phẩm vào quy trình
                        </Text>
                    </View>
                </View>
                <ScrollView style={styles.body}>
                    <Image
                        style={styles.body.image}
                        source={require('../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png')}
                    />
                    <View style={styles.body.middle}>
                        <Text style={styles.body.titleText}>Tên sản phẩm</Text>
                        <View style={styles.body.content}>
                            <Text style={styles.body.contentText}>a</Text>
                        </View>
                        <Text style={styles.body.titleText}>
                            Loại da phù hợp
                        </Text>
                        <View style={styles.body.content}>
                            <Text style={styles.body.contentText}>b</Text>
                        </View>
                        <Text style={styles.body.titleText}>Thành phần</Text>
                        <View style={styles.body.content}>
                            <Text style={styles.body.contentText}>c</Text>
                        </View>
                        <Text style={styles.body.titleText}>Bước sử dụng</Text>
                        <View style={styles.body.content}>
                            <Text style={styles.body.contentText}>d</Text>
                        </View>
                        <Text style={styles.body.titleText}>
                            Giới hạn sử dụng
                        </Text>
                        <View style={styles.body.content}>
                            <Text style={styles.body.contentText}>e</Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.bottom.titleText}>
                            Thực hiện vào ngày
                        </Text>
                        <View style={styles.bottom.dailyCheckSpace}>
                            {dateCheck.map((data, index) => (
                                <View
                                    key={index}
                                    style={styles.bottom.dailyCheck}>
                                    <Text style={styles.bottom.dateText}>
                                        {data.day}
                                    </Text>
                                    <Checkbox
                                        value={data.isChecked}
                                        onValueChange={() =>
                                            handleChange(data.id)
                                        }
                                        color={
                                            data.isChecked
                                                ? '#008800'
                                                : undefined
                                        }
                                        style={styles.bottom.checkbox}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default AddProductToRoutine;
