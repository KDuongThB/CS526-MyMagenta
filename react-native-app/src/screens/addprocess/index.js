import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Modal,
    Pressable,
} from 'react-native';
import styles from './styles';
import OnBack from '../../components/OnBack';
import COLORS from '../../assets/constants/colors';
import { useState } from 'react';
import { ICTrash } from '../../assets/icons';
import { ICPlus } from '../../assets/icons';
import CustomButtonAdd from '../../components/CustomButtonAdd';
import Checkbox from 'expo-checkbox';
import { normalize, scaleX, scaleY } from '../../helperFunction';

const dataProcessBlocksLight = [
    {
        id: 0,
        title: 'Làm sạch',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
    {
        id: 1,
        title: 'Toner',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
    {
        id: 2,
        title: 'Serum',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
    {
        id: 3,
        title: 'Dưỡng ẩm',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
    {
        id: 4,
        title: 'Chống nắng',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
];

const dataProcessBlocksNight = [
    {
        id: 0,
        title: 'Tẩy trang',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
    {
        id: 1,
        title: 'Làm sạch',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
    {
        id: 2,
        title: 'Toner',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
    {
        id: 3,
        title: 'Serum',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
    {
        id: 4,
        title: 'Điều trị',
        nameProcess: 'Thêm sản phẩm của bạn',
    },
    {
        id: 5,
        title: 'Dưỡng ẩm',
        nameProcess: 'Thêm sản phẩm của bạn',
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

const dailyUse = [
    {
        id: 0,
        name: 'Sáng',
        isActive: 1,
    },
    {
        id: 1,
        name: 'Tối',
        isActive: 0,
    },
    {
        id: 2,
        name: 'Bất kì',
        isActive: 0,
    },
];


const AddProcessScreen = ({ route, navigation }) => {

    const { _id } = route.params;

    const [nameProcess, setNameProcess] = useState(_id === 1 ? "Quy trình buổi sáng" : "Quy trình buổi tối");

    const [dateCheck, setDateCheck] = useState(dailyCheck);

    const [dateUse, setDateUse] = useState(dailyUse);

    const [showModal, setShowModal] = useState(false);

    const handleChangeDate = id => {
        let temp = dateCheck.map(product => {
            if (id === product.id) {
                return { ...product, isChecked: !product.isChecked };
            }
            return product;
        });
        setDateCheck(temp);
    };

    const handleChangeDateUse = id => {
        let temp = dateUse.map(data => {
            if (id === data.id) {
                data.isActive = 1;
            } else {
                data.isActive = 0;
            }
            return data;
        });
        setDateUse(temp);
    };

    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header.pad} />
                    <View style={styles.header.title}>
                        <OnBack
                            onBack={() => navigation.goBack()}
                            color={COLORS.WHITE}
                        />
                        <Text style={styles.header.title.text}>
                            Thêm quy trình
                        </Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.body.loginSpace}>
                        <TextInput
                            style={styles.body.loginSpace.loginText}
                            value={nameProcess}
                            onChangeText={(text) => {setNameProcess(text)}}
                        />
                    </View>
                    <ScrollView style={styles.body.content}>
                        <View style={styles.body.block}>
                            {_id === 1 && dataProcessBlocksLight.map((pData, index) => {
                                return (
                                    <View
                                        style={styles.processBlock}
                                        key={index}>
                                        <Text style={styles.processBlock.title}>
                                            {pData.title}
                                        </Text>
                                        <View
                                            style={styles.processBlock.content}>
                                            <TouchableOpacity
                                                style={
                                                    styles.processBlock.content
                                                        .iconTrash
                                                }>
                                                <ICTrash />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={
                                                    styles.processBlock.content
                                                        .addProduct
                                                }>
                                                <View
                                                    style={
                                                        styles.processBlock
                                                            .content.addProduct
                                                            .plus
                                                    }>
                                                    <ICPlus
                                                        color={COLORS.CARDINAL}
                                                    />
                                                </View>
                                                <Text
                                                    style={
                                                        styles.processBlock
                                                            .content.addProduct
                                                            .name
                                                    }>
                                                    {pData.nameProcess}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                );
                            })}
                            {_id === 2 && dataProcessBlocksNight.map((pData, index) => {
                                return (
                                    <View
                                        style={styles.processBlock}
                                        key={index}>
                                        <Text style={styles.processBlock.title}>
                                            {pData.title}
                                        </Text>
                                        <View
                                            style={styles.processBlock.content}>
                                            <TouchableOpacity
                                                style={
                                                    styles.processBlock.content
                                                        .iconTrash
                                                }>
                                                <ICTrash />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={
                                                    styles.processBlock.content
                                                        .addProduct
                                                }>
                                                <View
                                                    style={
                                                        styles.processBlock
                                                            .content.addProduct
                                                            .plus
                                                    }>
                                                    <ICPlus
                                                        color={COLORS.CARDINAL}
                                                    />
                                                </View>
                                                <Text
                                                    style={
                                                        styles.processBlock
                                                            .content.addProduct
                                                            .name
                                                    }>
                                                    {pData.nameProcess}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                        <View style={styles.body.buttonAdd}>
                            <CustomButtonAdd
                                label="Thêm bước mới"
                                onNavigate={() => setShowModal(true)}
                            />
                        </View>
                        <View style={styles.body.buttonLine} />
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
                                                handleChangeDate(data.id)
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
                            <View style={styles.bottom.timeUse}>
                                <Text style={styles.bottom.titleText}>
                                    Thời gian thực hiện
                                </Text>
                                <View style={styles.bottom.dailyUseSpace}>
                                    {dateUse.map((data, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() =>
                                                handleChangeDateUse(data.id)
                                            }
                                            style={
                                                (styles.bottom.dailyUseSpace
                                                    .dailyUse,
                                                {
                                                    backgroundColor:
                                                        data.isActive === 1
                                                            ? COLORS.TORCH_RED
                                                            : COLORS.WHITE,
                                                    width: scaleX(74),
                                                    height: scaleY(20),
                                                    borderRadius: 30,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderColor:
                                                        COLORS.TORCH_RED,
                                                    borderWidth: 1,
                                                    marginRight: scaleX(20),
                                                })
                                            }>
                                            <Text
                                                style={
                                                    (styles.bottom.dailyUseSpace
                                                        .dateUseText,
                                                    {
                                                        color:
                                                            data.isActive === 1
                                                                ? COLORS.WHITE
                                                                : COLORS.TORCH_RED,
                                                        fontSize: normalize(12),
                                                    })
                                                }>
                                                {data.name}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View>
                        <View style={styles.line} />
                        <View style={styles.body.footer}>
                            <TouchableOpacity style={styles.body.footer.button}>
                                <Text style={styles.body.footer.buttonText}>
                                    Kiểm tra
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.body.footer.button}>
                                <Text style={styles.body.footer.buttonText}>
                                    Tạo quy trình
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <Modal visible={showModal} animationType="fade" transparent={true}>
                <Pressable
                    style={styles.modal}
                    onPress={() => setShowModal(false)}>
                    <View style={styles.modal.block}>
                        <TextInput
                            style={styles.modal.block.textInput}
                            placeholder="Nhập tên bước"
                            placeholderTextColor={COLORS.NOBEL}
                        />
                        <View style={styles.modal.block.buttons}>
                            <TouchableOpacity
                                onPress={() => setShowModal(false)}
                                style={styles.modal.block.buttons.ignore}>
                                <Text
                                    style={
                                        styles.modal.block.buttons.ignore.text
                                    }>
                                    Bỏ qua
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modal.block.buttons.accept}>
                                <Text
                                    style={
                                        styles.modal.block.buttons.accept.text
                                    }>
                                    Thêm bước
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </React.Fragment>
    );
};

export default AddProcessScreen;
