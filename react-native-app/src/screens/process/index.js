import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import CustomButtonAdd from '../../components/CustomButtonAdd';
import {ICSun, ICMoon} from '../../assets/icons';
import SCREEN_NAME from '../../assets/constants/screens';

const processes = [
    {
        id: 1,
        name: 'Quy trình trị mụn',
        parts: 'Bất kì',
        day: 'Mỗi ngày',
        step: '5',
    },
    {
        id: 2,
        name: 'Quy trình lọc mụn',
        parts: 'Buổi sáng',
        day: 'Mỗi ngày',
        step: '4',
    },
    {
        id: 2,
        name: 'Quy trình lọc mụn',
        parts: 'Buổi sáng',
        day: 'Mỗi ngày',
        step: '4',
    },
    {
        id: 2,
        name: 'Quy trình lọc mụn',
        parts: 'Buổi sáng',
        day: 'Mỗi ngày',
        step: '4',
    },
];

const recommendationProcess = [
    {
        id: 1,
        name: 'Quy trình buổi sáng',
        parts: 'Buổi sáng',
        day: 'Mỗi ngày',
        step: '5',
    },
    {
        id: 2,
        name: 'Quy trình buổi tối',
        parts: 'Buổi tối',
        day: 'Mỗi ngày',
        step: '6',
    },
];

const ProcessScreen = props => {
    const onNavigateToAddProcess = () => {
        props.navigation.navigate(SCREEN_NAME.ADD_PROCESS_SCREEN);
    };

    return (
        <React.Fragment>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header.pad} />
                    <View style={styles.header.title}>
                        <Text style={styles.header.title.text}>Quy trình</Text>
                    </View>
                </View>
                <View style={styles.activeProcess}>
                    <View style={styles.activeProcess.title}>
                        <Text style={styles.activeProcess.title.text}>
                            Quy trình đang hoạt động
                        </Text>
                    </View>
                    <View style={styles.activeProcess.body}>
                        {processes.map((process, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.activeProcess.body.items}>
                                    <View
                                        style={
                                            styles.activeProcess.body.items.info
                                        }>
                                        <Text
                                            style={
                                                styles.activeProcess.body.items
                                                    .info.name
                                            }>
                                            {process.name}
                                        </Text>
                                        <Text
                                            style={
                                                styles.activeProcess.body.items
                                                    .info.parts
                                            }>
                                            {process.parts}
                                        </Text>
                                        <Text
                                            style={
                                                styles.activeProcess.body.items
                                                    .info.day
                                            }>
                                            {process.day}
                                        </Text>
                                    </View>
                                    <Text
                                        style={
                                            styles.activeProcess.body.items.step
                                        }>
                                        {process.step} bước
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <View style={styles.activeProcess.button}>
                        <CustomButtonAdd
                            label="Thêm quy trình"
                            onNavigate={onNavigateToAddProcess}
                        />
                    </View>
                </View>
                <View style={styles.recommendProcess}>
                    <View style={styles.activeProcess.title}>
                        <Text style={styles.activeProcess.title.text}>
                            Quy trình đề xuất
                        </Text>
                    </View>
                    <View style={styles.activeProcess.body}>
                        {recommendationProcess.map((process, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.activeProcess.body.items}>
                                    <View
                                        style={
                                            styles.activeProcess.body.items
                                                .align
                                        }>
                                        <View style={styles.icon}>
                                            {process.id === 1 && <ICSun />}
                                            {process.id === 2 && <ICMoon />}
                                        </View>
                                        <View
                                            style={
                                                styles.activeProcess.body.items
                                                    .info
                                            }>
                                            <Text
                                                style={
                                                    styles.activeProcess.body
                                                        .items.info.name
                                                }>
                                                {process.name}
                                            </Text>
                                            <Text
                                                style={
                                                    styles.activeProcess.body
                                                        .items.info.parts
                                                }>
                                                {process.parts}
                                            </Text>
                                            <Text
                                                style={
                                                    styles.activeProcess.body
                                                        .items.info.day
                                                }>
                                                {process.day}
                                            </Text>
                                        </View>
                                    </View>
                                    <Text
                                        style={
                                            styles.activeProcess.body.items.step
                                        }>
                                        {process.step} bước
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </React.Fragment>
    );
};

export default ProcessScreen;
