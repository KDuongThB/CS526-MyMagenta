import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import COLORS from '../../assets/constants/colors';
import OnBack from '../../components/OnBack';
import styles from './styles';
import {ICChevronRight} from '../../assets/icons';

const ProfileScreen = props => {
    const {navigation} = props;
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header.pad} />
                </View>
                <View style={styles.title}>
                    <View style={styles.title.titleIC}>
                        <OnBack onBack={() => navigation.goBack()} />
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
                            placeholder="Nhập tên người dùng"
                            placeholderTextColor={COLORS.GRAY}
                        />
                    </View>
                    <View style={styles.body.infoSpace}>
                        <Text style={styles.body.headInfo}>Email</Text>
                        <TextInput
                            style={styles.body.contentInfo}
                            placeholder="Nhập email người dùng"
                            placeholderTextColor={COLORS.GRAY}
                        />
                    </View>
                    <View style={styles.body.infoSpace}>
                        <Text style={styles.body.headInfo}>Tuổi</Text>
                        <TextInput
                            style={styles.body.contentInfo}
                            placeholder="Nhập tuổi"
                            placeholderTextColor={COLORS.GRAY}
                        />
                    </View>
                    <View style={styles.body.infoSpace}>
                        <Text style={styles.body.headInfo}>Giới tính</Text>
                        <TextInput
                            style={styles.body.contentInfo}
                            placeholder="Nhập giới tính"
                            placeholderTextColor={COLORS.GRAY}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footer.loginBtn}>
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
