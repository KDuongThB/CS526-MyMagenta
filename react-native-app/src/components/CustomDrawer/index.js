import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../assets/constants/colors';
import {ICSignOut} from '../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = props => {
    const [name, setName] = useState('Khanh1234');
    const [email, setEmail] = useState('1234567@gmail.com');

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <LinearGradient
                    colors={[
                        COLORS.TORCH_RED,
                        COLORS.TORCH_RED,
                        COLORS.CARDINAL,
                    ]}
                    style={styles.header.container}>
                    <View style={styles.header}>
                        <Image
                            style={styles.header.avtImage.image}
                            source={require('../../assets/images/Avatar/DuongThanhBaoKhanh.png')}
                        />
                        <Text style={styles.header.textName}>{name}</Text>
                        <Text style={styles.header.textEmail}>{email}</Text>
                    </View>
                </LinearGradient>
                <View style={styles.body}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.footer.dividedLine}>
                <TouchableOpacity style={styles.footer.touchStyle}>
                    <ICSignOut color={COLORS.CARDINAL} />
                    <Text style={styles.footer.textSignOut}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
