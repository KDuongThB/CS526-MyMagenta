import React from 'react';
import {useState} from 'react';
import styles from './styles';
import {
    View,
    Text,
    Image,
    Container,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import COLORS from '../../assets/constants/colors';
import {ICVisibleEye} from '../../assets/icons';
// import * as React from 'react';

const RegisterForm = () => {
    const [account, setAccount] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [passwordSecurity, setPasswordSecurity] = useState(true);
    const [passwordVerifySecurity, setPasswordVerifySecurity] = useState(true);
    const VerifyReigister = () => {
        if (passwordSecurity === passwordVerifySecurity) {
            alert('Đăng ký thành công');
        } else {
            alert('Mật khẩu và xác nhận mật khẩu không trùng khớp');
        }
    };
    return (
        <React.Fragment>
            <ScrollView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.body.registerSpace}>
                        <TextInput
                            style={styles.body.registerText}
                            placeholder="Tên người dùng"
                            placeholderTextColor={COLORS.NOBEL}
                            onChangeText={account => setAccount(account)}
                        />
                    </View>
                    <View style={styles.body.registerSpace}>
                        <TextInput
                            style={styles.body.registerText}
                            placeholder="Email"
                            placeholderTextColor={COLORS.NOBEL}
                            onChangeText={email => setEmail(email)}
                        />
                    </View>
                    <View style={styles.body.registerSpace}>
                        <TextInput
                            style={styles.body.registerText}
                            placeholder="Mật khẩu"
                            placeholderTextColor={COLORS.NOBEL}
                            secureTextEntry={passwordSecurity}
                            onChangeText={password => setPassword(password)}
                        />
                        <TouchableOpacity
                            onPress={() =>
                                setPasswordSecurity(!passwordSecurity)
                            }>
                            <View>
                                <ICVisibleEye />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body.registerSpace}>
                        <TextInput
                            style={styles.body.registerText}
                            placeholder="Xác nhận mật khẩu"
                            placeholderTextColor={COLORS.NOBEL}
                            secureTextEntry={passwordVerifySecurity}
                            onChangeText={verifyPassword =>
                                setVerifyPassword(verifyPassword)
                            }
                        />
                        <TouchableOpacity
                            onPress={() =>
                                setPasswordVerifySecurity(
                                    !passwordVerifySecurity,
                                )
                            }>
                            {/* <Image
                                style={styles.body.eyeImage}
                                source={require('../../assets/images/RemoveEye.png')}
                            /> */}
                            <View>
                                <ICVisibleEye />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.footer.registerBtn}
                        onPress={VerifyReigister}>
                        <Text style={styles.footer.register_btnText}>
                            Đăng ký
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </React.Fragment>
    );
};

export default RegisterForm;
