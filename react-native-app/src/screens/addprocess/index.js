import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import styles from './styles';
import OnBack from '../../components/OnBack';
import COLORS from '../../assets/constants/colors';
import {useState} from 'react';

const AddProcessScreen = props => {
    const {navigation} = props;

    const [nameProcess, setNameProcess] = useState('');

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
                    <ScrollView style={styles.body.content}>
                        <View style={styles.body.loginSpace}>
                            <TextInput
                                style={styles.body.loginSpace.loginText}
                                placeholder="Tên quy trình"
                                placeholderTextColor={COLORS.NOBEL}
                            />
                        </View>
                        <View></View>
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
        </React.Fragment>
    );
};

export default AddProcessScreen;
