import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Modal,
    Pressable,
} from 'react-native';
import styles from './styles';
import CustomLightNightSelector from '../../components/LightNightSelector';
import Checkbox from 'expo-checkbox';
import {useState} from 'react';
import CustomButtonAdd from '../../components/CustomButtonAdd';
import {ICCalendar, ICChevronDown} from '../../assets/icons';
import {Calendar} from 'react-native-calendars';

const stepInfoMorning = [
    {
        id: 1,
        name: 'Làm sạch',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name:
            'La Roche-Posay Effaclar Purifying Foaming Gel For Oily Sensitive Skin (50ml)',
        isActive: false,
    },
    {
        id: 2,
        name: 'Tonner',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name: 'Skin1004 Madagascar Centella Asiatica Toning toner',
        isActive: false,
    },
    {
        id: 4,
        name: 'Serum',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name: 'The Ordinary Niacinamide 10% + Zinc 1%',
        isActive: false,
    },
    {
        id: 6,
        name: 'Dưỡng ẩm',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name: 'Neutrogena Hydro Boost Water Gel',
        isActive: false,
    },
    {
        id: 7,
        name: 'Chống nắng',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name: 'Sunplay Skin Aqua Tone Up UV Milk Lavender',
        isActive: false,
    },
];
const stepInfoNight = [
    {
        id: 0,
        name: 'Tẩy trang',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name:
            'Bioderma Sebium H2O Purifying Cleansing Micellar Solution',
        isActive: false,
    },
    {
        id: 1,
        name: 'Làm sạch',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name:
            'La Roche-Posay Effaclar Purifying Foaming Gel For Oily Sensitive Skin (50ml)',
        isActive: false,
    },
    {
        id: 2,
        name: 'Tonner',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name: 'Skin1004 Madagascar Centella Asiatica Toning toner',
        isActive: false,
    },
    {
        id: 3,
        name: 'Tẩy da chết',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name: 'Paula’s Choice Skin Perfecting 2% BHA Gel',
        isActive: false,
    },
    {
        id: 4,
        name: 'Serum',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name: 'The Ordinary Niacinamide 10% + Zinc 1%',
        isActive: false,
    },
    {
        id: 5,
        name: 'Điều trị',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name: 'Derma Forte Gel ',
        isActive: false,
    },
    {
        id: 6,
        name: 'Dưỡng ẩm',
        image: '../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png',
        product_name: 'Neutrogena Hydro Boost Water Gel',
        isActive: false,
    },
];
const HomeScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const [tab, setTab] = useState('Light');
    const [data_morning, setData_Morning] = useState(stepInfoMorning);
    const [data_night, setData_Night] = useState(stepInfoNight);
    const handleChange = (id, tab) => {
        if (tab === 'Light') {
            let temp = data_morning.map(product => {
                if (id === product.id) {
                    return {...product, isActive: !product.isActive};
                }
                return product;
            });
            setData_Morning(temp);
        } else {
            let temp = data_night.map(product => {
                if (id === product.id) {
                    return {...product, isActive: !product.isActive};
                }
                return product;
            });
            setData_Night(temp);
        }
    };
    const getCurrDate = () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        return `${year}-${month}-${day}`;
    };

    var currDate = getCurrDate();
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header.pad} />
                    <View style={styles.header.selection}>
                        <View styles={styles.header.selection.avt}>
                            <Image
                                style={styles.header.selection.avt.image}
                                source={require('../../assets/images/Avatar/DuongThanhBaoKhanh.png')}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.header.selection.calendar}>
                            <View
                                style={styles.header.selection.calendar.value}>
                                <ICCalendar />
                                <Text
                                    style={
                                        styles.header.selection.calendar.value
                                            .text
                                    }>
                                    31
                                </Text>
                            </View>
                            <View style={styles.header.selection.calendar.info}>
                                <View
                                    style={
                                        styles.header.selection.calendar.info
                                            .date
                                    }>
                                    <Text
                                        style={
                                            styles.header.selection.calendar
                                                .info.date.text
                                        }>
                                        Thứ 2
                                    </Text>
                                    <TouchableOpacity
                                        style={
                                            styles.header.selection.calendar
                                                .info.date.button
                                        }
                                        onPress={() => setShowModal(true)}>
                                        <ICChevronDown />
                                    </TouchableOpacity>
                                </View>
                                <Text
                                    style={
                                        styles.header.selection.calendar.info
                                            .monthYear
                                    }>
                                    Thg 12, 2022
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.header.calendar} />
                </View>
                <View style={styles.title}>
                    <Text style={styles.title.text}>Quy trình chăm sóc da</Text>
                </View>
                <View style={styles.switchButton}>
                    <CustomLightNightSelector
                        onPress={() => setTab('Light')}
                        isChoosing={tab === 'Light'}
                        label="Sáng"
                    />
                    <CustomLightNightSelector
                        onPress={() => setTab('Night')}
                        isChoosing={tab === 'Night'}
                        label="Tối"
                    />
                </View>
                {/* <ScrollView style={styles.body}>
                    <Image
                        style={styles.body.imageEmpty}
                        source={require('../../assets/images/HomeRoutineEmpty/Home-Routine-Empty-1x.png')}
                    />
                    <Text style={styles.body.text}>
                        Hãy tạo quy trình và bắt đầu chăm sóc da thôi nào !
                    </Text>
                    <View style={styles.body.buttonAdd}>
                        <CustomButtonAdd label="Thêm quy trình" />
                    </View>
                </ScrollView> */}
                {tab === 'Light' && data_morning.length === 0 && (
                    <ScrollView style={styles.body}>
                        <Image
                            style={styles.body.imageEmpty}
                            source={require('../../assets/images/HomeRoutineEmpty/Home-Routine-Empty-1x.png')}
                        />
                        <Text style={styles.body.text}>
                            Hãy tạo quy trình và bắt đầu chăm sóc da thôi nào !
                        </Text>
                        <View style={styles.body.buttonAdd}>
                            <CustomButtonAdd label="Thêm quy trình" />
                        </View>
                    </ScrollView>
                )}
                {tab === 'Night' && data_night.length === 0 && (
                    <ScrollView style={styles.body}>
                        <Image
                            style={styles.body.imageEmpty}
                            source={require('../../assets/images/HomeRoutineEmpty/Home-Routine-Empty-1x.png')}
                        />
                        <Text style={styles.body.text}>
                            Hãy tạo quy trình và bắt đầu chăm sóc da thôi nào !
                        </Text>
                        <View style={styles.body.buttonAdd}>
                            <CustomButtonAdd label="Thêm quy trình" />
                        </View>
                    </ScrollView>
                )}
                {tab === 'Light' && (
                    <ScrollView style={styles.body}>
                        {data_morning.map((sData, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.body.showStepData}
                                    onPress={() => handleChange(sData.id, tab)}>
                                    <View>
                                        <Text style={styles.body.StepDataTitle}>
                                            {index + 1}. {sData.name}
                                        </Text>
                                        <View style={styles.body.stepSpaceInfo}>
                                            <Checkbox
                                                value={sData.isActive}
                                                onValueChange={() =>
                                                    handleChange(sData.id, tab)
                                                }
                                                color={
                                                    sData.isActive
                                                        ? '#008800'
                                                        : undefined
                                                }
                                                style={styles.body.checkbox}
                                            />
                                            <Image
                                                style={styles.body.logo}
                                                source={require('../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png')}
                                            />
                                            <Text
                                                style={
                                                    styles.body.ProductDataName
                                                }>
                                                {sData.product_name}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                )}
                {tab === 'Night' && (
                    <ScrollView style={styles.body}>
                        {data_night.map((sData, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.body.showStepData}
                                    onPress={() => handleChange(sData.id, tab)}>
                                    <View>
                                        <Text style={styles.body.StepDataTitle}>
                                            {index + 1}. {sData.name}
                                        </Text>
                                        <View style={styles.body.stepSpaceInfo}>
                                            <Checkbox
                                                value={sData.isActive}
                                                onValueChange={() =>
                                                    handleChange(sData.id, tab)
                                                }
                                                color={
                                                    sData.isActive
                                                        ? '#008800'
                                                        : undefined
                                                }
                                                style={styles.body.checkbox}
                                            />
                                            <Image
                                                style={styles.body.logo}
                                                source={require('../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png')}
                                            />
                                            <Text
                                                style={
                                                    styles.body.ProductDataName
                                                }>
                                                {sData.product_name}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                )}
            </View>
            <Modal visible={showModal} animationType="fade" transparent={true}>
                <Pressable
                    style={styles.modal}
                    onPress={() => setShowModal(false)}>
                    <Calendar
                        style={styles.modal.showCalendar}
                        onDayPress={date => {
                            console.log(date);
                            setShowModal(false);
                            console.log(getCurrDate());
                        }}
                        markedDates={{
                            currDate: {marked: true, selected: true},
                        }}
                    />
                </Pressable>
            </Modal>
        </React.Fragment>
    );
};

export default HomeScreen;
