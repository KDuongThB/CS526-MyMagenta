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
    Button,
    Alert,
} from 'react-native';
// import * as React from 'react';

const LoginForm = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    return (
        <React.Fragment>
            <View style={styles.body}>
                <View style={styles.body.loginSpace}>
                    <TextInput
                        style={styles.body.loginText}
                        placeholder="Tên người đăng nhập hoặc email"
                        onChangeText={account => setAccount(account)}
                    />
                </View>
                <View style={styles.body.loginSpace}>
                    <TextInput
                        style={styles.body.loginText}
                        placeholder="Mật khẩu"
                        onChangeText={password => setPassword(password)}
                    />
                    <TouchableOpacity>
                        <Image
                            style={styles.body.eyeImage}
                            source={require('../../assets/icons/RemoveEye.png')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.body.forgotSpace}>
                    <Text style={styles.body.forgotText}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footer.loginBtn}>
                    <Text style={styles.footer.login_btnText}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={styles.footer.hText}>Hoặc</Text>
                <TouchableOpacity style={styles.footer.another_loginSpace}>
                    <Text style={styles.footer.another_loginText}>
                        Sử dụng mà không đăng nhập
                    </Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
};

export default LoginForm;
