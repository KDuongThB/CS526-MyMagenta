import React from 'react';
import { useState, useEffect } from 'react';
import styles from './styles';
import {
    View,
    Text,
    Image,
    Container,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import COLORS from '../../assets/constants/colors';
import { ICVisibleEye } from '../../assets/icons';
import SCREEN_NAME from '../../assets/constants/screens';
// import * as React from 'react';
import axios from 'axios';
import { acc, set } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
// import {userName, password} from '../../assets/variables'


const url = 'https://mymagenta-dev.herokuapp.com/v1/user/'
var truePass = ''

const LoginForm = props => {
    const [account, setAccount] = useState('');
    const [pass, setPass] = useState('');
    const [passwordSecurity, setPasswordSecurity] = useState(true);
    // const [loginFormData, setLoginFormData] = useState(initializeLoginFormData);
    const navigation = useNavigation();

    handleLogin = async () => {
        try {
            const resp = await axios.get(url + 'username/' + account, {}).then();
            // console.log(JSON.stringify(resp.data.password))
            truePass = resp.data.password;
            if (truePass === pass) {
                global.user = resp.data
                global.isAccount = true
                navigation.navigate(SCREEN_NAME.HOME_SCREEN);
            }
            else
                alert("Thông tin đăng nhập không chính xác")
        } catch (error) {
            alert("Không tìm thấy tài khoản")
            console.log(error);
        }
    }

    handleNotLogin = () => {
        global.isAccount = false
        navigation.navigate(SCREEN_NAME.HOME_SCREEN);
    }

    return (
        <React.Fragment>
            <View style={styles.body}>
                <View style={styles.body.loginSpace}>
                    <TextInput
                        style={styles.body.loginText}
                        placeholder="Tên người đăng nhập hoặc email"
                        placeholderTextColor={COLORS.NOBEL}
                        onChangeText={(text) => { setAccount(text) }}
                    />
                </View>
                <View style={styles.body.loginSpace}>
                    <TextInput
                        style={styles.body.loginText}
                        placeholder="Mật khẩu"
                        placeholderTextColor={COLORS.NOBEL}
                        secureTextEntry={passwordSecurity}
                        onChangeText={(text) => { setPass(text) }}

                    />
                    <TouchableOpacity
                        onPress={() => setPasswordSecurity(!passwordSecurity)}>
                        {/* <Image
                            style={styles.body.eyeImage}
                            source={require('../../assets/images/RemoveEye.png')}
                        /> */}
                        <View>
                            <ICVisibleEye />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.body.forgotSpace}>
                    <Text style={styles.body.forgotText}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.footer.loginBtn}
                    onPress={handleLogin}>
                    <Text style={styles.footer.login_btnText}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={styles.footer.hText}>Hoặc</Text>
                <TouchableOpacity
                    style={styles.footer.another_loginSpace}
                    onPress={handleNotLogin}>
                    <Text style={styles.footer.another_loginText}>
                        Sử dụng mà không đăng nhập
                    </Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
};

export default LoginForm;
