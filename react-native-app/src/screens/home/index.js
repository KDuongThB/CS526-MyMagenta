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
import {useState} from 'react';
import CustomButtonAdd from '../../components/CustomButtonAdd';
import {ICCalendar, ICChevronDown} from '../../assets/icons';
import {Calendar} from 'react-native-calendars';
const HomeScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const [tab, setTab] = useState('Light');

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
