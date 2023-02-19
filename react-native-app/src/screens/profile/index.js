import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import COLORS from '../../assets/constants/colors';
import OnBack from '../../components/OnBack';
import styles from './styles';
import { ICChevronRight } from '../../assets/icons';
import axios from 'axios';

const ProfileScreen = props => {
    const { navigation } = props;
    const [nameUser, setNameUser] = useState(global.user.userName);
    const [emailUser, setEmailUser] = useState(global.user.email);
    const [sexUser, setSexUser] = useState(global.user.sex);

    const handleSaveData = async () => {
        if (nameUser.trim() === "") {
            Alert.alert("Không hợp lệ", "Tên không hợp lệ", [{
                text: "OK",
                style: "cancel"
            }], { cancelable: false });
        }
        else if (emailUser.trim() === "") {
            Alert.alert("Không hợp lệ", "Email không hợp lệ", [{
                text: "OK",
                style: "cancel"
            }], { cancelable: false });
        }
        else if (sexUser.toString().trim() === "") {
            Alert.alert("Không hợp lệ", "Giới tính không hợp lệ", [{
                text: "OK",
                style: "cancel"
            }], { cancelable: false });
        }
        else {
            global.user = {
                ...global.user,
                userName: nameUser,
                email: emailUser,
                sex: sexUser
            }

            const url = 'https://mymagenta-dev.herokuapp.com/v1/user/id'
            try {
                const resp = await axios.put(url + global.user._id, global.user).then();
                // console.log(JSON.stringify(resp.data.password))
                console.log(resp)
            } catch (error) {
                console.log(error);
            }

            Alert.alert("Lưu thành công", "Thông tin người dùng đã được cập nhật", [{
                text: "OK",
                style: "cancel"
            }], { cancelable: false });
        }
    }

    const handleCheckDataChanged = () => {
        if (nameUser !== global.user.userName || emailUser !== global.user.email || sexUser.toString() !== global.user.sex.toString()) {
            Alert.alert(
                "Thoát",
                "Thoát mà không lưu thay đổi?",
                [
                    {
                        text: "Ở lại",
                        style: "cancel"
                    },
                    {
                        text: "Thoát", onPress: () => {
                            setNameUser(global.user.userName);
                            setEmailUser(global.user.email);
                            setSexUser(global.user.sex);
                            navigation.goBack()
                        }
                    }
                ],
                { cancelable: false }
            );
        }
        else {
            navigation.goBack()
        }
    }

    return (
        <React.Fragment>
            {console.log(emailUser)}
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header.pad} />
                </View>
                <View style={styles.title}>
                    <View style={styles.title.titleIC}>
                        <OnBack
                            onBack={() => handleCheckDataChanged()}
                            color={COLORS.CARDINAL}
                        />
                    </View>
                    <Text style={styles.title.titleText_Space}>
                        <Text style={styles.title.titleText}>
                            Chỉnh sửa hồ sơ
                        </Text>
                    </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.body.infoSpace}>
                        <Text style={styles.body.headInfo}>Ảnh đại diện</Text>
                        <View style={styles.body.avatarSpace}>
                            <Image
                                style={styles.body.avatarImg}
                                source={require('../../assets/images/Avatar/DuongThanhBaoKhanh.png')}
                            />
                            <TouchableOpacity>
                                <ICChevronRight color={COLORS.BLACK} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.body.infoSpace}>
                        <Text style={styles.body.headInfo}>Tên người dùng</Text>
                        <TextInput
                            style={styles.body.contentInfo}
                            // placeholder={nameUser}
                            // placeholderTextColor={COLORS.GRAY}
                            onChangeText={(text) => { setNameUser(text) }}
                            value={nameUser}
                        />
                    </View>
                    <View style={styles.body.infoSpace}>
                        <Text style={styles.body.headInfo}>Email</Text>
                        <TextInput
                            style={styles.body.contentInfo}
                            // placeholder={emailUser}
                            // placeholderTextColor={COLORS.GRAY}
                            onChangeText={(text) => { setEmailUser(text) }}
                            value={emailUser}
                        />
                    </View>
                    {/* <View style={styles.body.infoSpace}>
                        <Text style={styles.body.headInfo}>Tuổi</Text>
                        <TextInput
                            style={styles.body.contentInfo}
                            placeholder="Nhập tuổi"
                            placeholderTextColor={COLORS.GRAY}
                        />
                    </View> */}
                    <View style={styles.body.infoSpace}>
                        <Text style={styles.body.headInfo}>Giới tính</Text>
                        <TextInput
                            style={styles.body.contentInfo}
                            // placeholder={sexUser.toString()}
                            // placeholderTextColor={COLORS.GRAY}
                            onChangeText={(text) => { setSexUser(text) }}
                            value={sexUser.toString()}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footer.loginBtn} onPress={() => handleSaveData()}>
                        <Text style={styles.footer.login_btnText}>
                            Lưu thay đổi
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>
    );
};

export default ProfileScreen;
