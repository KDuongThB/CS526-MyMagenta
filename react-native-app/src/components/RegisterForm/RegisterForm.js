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
// import * as React from 'react';

const RegisterForm = () => {
    const [account, setAccount] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    return (
        <React.Fragment>
            <ScrollView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.body.registerSpace}>
                        <TextInput
                            style={styles.body.registerText}
                            placeholder="Tên người dùng"
                            onChangeText={account => setAccount(account)}
                        />
                    </View>
                    <View style={styles.body.registerSpace}>
                        <TextInput
                            style={styles.body.registerText}
                            placeholder="Email"
                            onChangeText={email => setEmail(email)}
                        />
                    </View>
                    <View style={styles.body.registerSpace}>
                        <TextInput
                            style={styles.body.registerText}
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
                    <View style={styles.body.registerSpace}>
                        <TextInput
                            style={styles.body.registerText}
                            placeholder="Xác nhận mật khẩu"
                            onChangeText={verifyPassword =>
                                setVerifyPassword(verifyPassword)
                            }
                        />
                        <TouchableOpacity>
                            <Image
                                style={styles.body.eyeImage}
                                source={require('../../assets/icons/RemoveEye.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footer.registerBtn}>
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
