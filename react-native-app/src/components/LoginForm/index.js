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
} from 'react-native';
import COLORS from '../../assets/constants/colors';
import {ICVisibleEye} from '../../assets/icons'
import SCREEN_NAME from '../../assets/constants/screens';
// import * as React from 'react';

const LoginForm = props => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [passwordSecurity, setPasswordSecurity] = useState(true);
    const {navigation} = props;
    return (
        <React.Fragment>
            <View style={styles.body}>
                <View style={styles.body.loginSpace}>
                    <TextInput
                        style={styles.body.loginText}
                        placeholder="Tên người đăng nhập hoặc email"
                        placeholderTextColor={COLORS.NOBEL}
                        onChangeText={account => setAccount(account)}
                    />
                </View>
                <View style={styles.body.loginSpace}>
                    <TextInput
                        style={styles.body.loginText}
                        placeholder="Mật khẩu"
                        placeholderTextColor={COLORS.NOBEL}
                        secureTextEntry={passwordSecurity}
                        onChangeText={password => setPassword(password)}
                    />
                    <TouchableOpacity
                        onPress={() => setPasswordSecurity(!passwordSecurity)}>
                        {/* <Image
                            style={styles.body.eyeImage}
                            source={require('../../assets/images/RemoveEye.png')}
                        /> */}
                        <View>
                        <ICVisibleEye/>
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
                    onPress={props.onNavigate}>
                    <Text style={styles.footer.login_btnText}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={styles.footer.hText}>Hoặc</Text>
                <TouchableOpacity
                    style={styles.footer.another_loginSpace}
                    onPress={props.onNavigate}>
                    <Text style={styles.footer.another_loginText}>
                        Sử dụng mà không đăng nhập
                    </Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
};

export default LoginForm;
