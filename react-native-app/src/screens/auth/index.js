import React from 'react';
import {useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';
import CustomLogo from '../../components/CustomLogo/CustomLogo';
import SwitchSelector from 'react-native-switch-selector';
import COLORS from '../../assets/constants/colors';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import {normalize} from '../../helperFunction';
import SCREEN_NAME from '../../assets/constants/screens';

const AuthenticateScreen = props => {
    const onNavigateToHome = () => {
        props.navigation.navigate(SCREEN_NAME.HOME_SCREEN);
    };
    const [auth, setAuth] = useState(0);
    return (
        <React.Fragment>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.header.imageHeader}
                        source={require('../../assets/images/HeaderImage/HeaderImage1x.png')}
                    />
                    <View style={styles.header.logoHeader}>
                        <CustomLogo />
                    </View>
                </View>

                <View style={styles.body}>
                    <SwitchSelector
                        style={styles.body.SwitchSelector}
                        initial={0}
                        onPress={value => setAuth(value)}
                        bold={true}
                        textColor={COLORS.TORCH_RED}
                        selectedColor={COLORS.WHITE}
                        buttonColor={COLORS.TORCH_RED}
                        borderColor={COLORS.MERCURY}
                        hasPadding
                        fontSize={normalize(14)}
                        options={[
                            {
                                label: 'Đăng nhập',
                                value: 0,
                            },
                            {
                                label: 'Đăng ký',
                                value: 1,
                            },
                        ]}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                    />
                    {auth === 0 && <LoginForm onNavigate={onNavigateToHome} />}
                    {auth === 1 && <RegisterForm />}
                </View>
                <View style={styles.footer}>
                    <Image
                        source={require('../../assets/images/FooterImage/FooterImage2-1x.png')}
                    />
                </View>
            </ScrollView>
        </React.Fragment>
    );
};

export default AuthenticateScreen;
