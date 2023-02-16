import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import styles from './styles';
import OnBack from '../../components/OnBack';
import {ICSearch, ICChevronRight} from '../../assets/icons';
import COLORS from '../../assets/constants/colors';
import {normalize, scaleX, scaleY} from '../../helperFunction.js';

const productData = [
    {
        id: 0,
        name: 'La Roche-Posay Effaclar Purifying Foaming Gel For Oily Sensitive Skin',
        age: 'Trên 18 tuổi',
        skin: 'Mọi loại da',
        materials: 'Hyaluronic Acid, Vitamin B5, Madecassoside',
        uses: [
            'Cấp ẩm chuyên sâu, giúp cải thiện nếp nhăn và vẻ rạng rở của da.',
            'Làm dịu, phục hồi, kích thích sự tái tạo và sức đề kháng của làn da.',
        ],
        usage: [
            'Thoa lên vùng da mặt vào mỗi sáng và/hoặc tối sau bước làm sạch. Không thoa lên vết thương hở',
            'Để mạng lại hiệu quả tốt nhất, nên sử dụng kem dưỡng để khóa ẩm sau cùng.',
        ],
        use_limit: 'Dùng mỗi ngày (sáng và tối). Tối đa 2 lần trong ngày.',
        step: 'Serum',
    },
    {
        id: 1,
        name: 'La Roche-Posay Effaclar Duo+',
        age: 'Trên 18 tuổi',
        skin: 'Mọi loại da',
        materials: 'Hyaluronic Acid, Vitamin B5, Madecassoside',
        uses: [
            'Cấp ẩm chuyên sâu, giúp cải thiện nếp nhăn và vẻ rạng rở của da.',
            'Làm dịu, phục hồi, kích thích sự tái tạo và sức đề kháng của làn da.',
        ],
        usage: [
            'Thoa lên vùng da mặt vào mỗi sáng và/hoặc tối sau bước làm sạch. Không thoa lên vết thương hở',
            'Để mạng lại hiệu quả tốt nhất, nên sử dụng kem dưỡng để khóa ẩm sau cùng.',
        ],
        use_limit: 'Dùng mỗi ngày (sáng và tối). Tối đa 2 lần trong ngày.',
        step: 'Serum',
    },
    {
        id: 2,
        name: 'La Roche-Posay Anthelios XL Dry Touch Gel-Cream SPF 50+ UVB & UVA',
        age: 'Trên 18 tuổi',
        skin: 'Mọi loại da',
        materials: 'Hyaluronic Acid, Vitamin B5, Madecassoside',
        uses: [
            'Cấp ẩm chuyên sâu, giúp cải thiện nếp nhăn và vẻ rạng rở của da.',
            'Làm dịu, phục hồi, kích thích sự tái tạo và sức đề kháng của làn da.',
        ],
        usage: [
            'Thoa lên vùng da mặt vào mỗi sáng và/hoặc tối sau bước làm sạch. Không thoa lên vết thương hở',
            'Để mạng lại hiệu quả tốt nhất, nên sử dụng kem dưỡng để khóa ẩm sau cùng.',
        ],
        use_limit: 'Dùng mỗi ngày (sáng và tối). Tối đa 2 lần trong ngày.',
        step: 'Serum',
    },
    {
        id: 3,
        name: 'La Roche-Posay Hyalu B5 Serum',
        age: 'Trên 18 tuổi',
        skin: 'Mọi loại da',
        materials: 'Hyaluronic Acid, Vitamin B5, Madecassoside',
        uses: [
            'Cấp ẩm chuyên sâu, giúp cải thiện nếp nhăn và vẻ rạng rở của da.',
            'Làm dịu, phục hồi, kích thích sự tái tạo và sức đề kháng của làn da.',
        ],
        usage: [
            'Thoa lên vùng da mặt vào mỗi sáng và/hoặc tối sau bước làm sạch. Không thoa lên vết thương hở',
            'Để mạng lại hiệu quả tốt nhất, nên sử dụng kem dưỡng để khóa ẩm sau cùng.',
        ],
        use_limit: 'Dùng mỗi ngày (sáng và tối). Tối đa 2 lần trong ngày.',
        step: 'Serum',
    },
    {
        id: 4,
        name: 'La Roche-Posay Effaclar Pure Vitamin C10 Serum ',
        age: 'Trên 18 tuổi',
        skin: 'Mọi loại da',
        materials: 'Hyaluronic Acid, Vitamin B5, Madecassoside',
        uses: [
            'Cấp ẩm chuyên sâu, giúp cải thiện nếp nhăn và vẻ rạng rở của da.',
            'Làm dịu, phục hồi, kích thích sự tái tạo và sức đề kháng của làn da.',
        ],
        usage: [
            'Thoa lên vùng da mặt vào mỗi sáng và/hoặc tối sau bước làm sạch. Không thoa lên vết thương hở',
            'Để mạng lại hiệu quả tốt nhất, nên sử dụng kem dưỡng để khóa ẩm sau cùng.',
        ],
        use_limit: 'Dùng mỗi ngày (sáng và tối). Tối đa 2 lần trong ngày.',
        step: 'Serum',
    },
];

const SearchProductScreen = ({route, navigation}) => {
    const {itemId} = route.params;
    const data = productData.filter(x => x.id === itemId)[0];
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header.pad} />
                    <View style={styles.header.title}>
                        <OnBack
                            onBack={() => navigation.goBack()}
                            color={COLORS.CARDINAL}
                        />
                        <Text style={styles.header.title.text}>
                            Thông tin sản phẩm
                        </Text>
                    </View>
                </View>
                <View style={styles.product}>
                    <Image
                        style={styles.product.logo}
                        source={require('../../assets/images/Product/La-Roche-Posay-Hyalu-B5-Serum.png')}
                    />
                    <Text style={styles.product.name}>{data.name}</Text>
                    <TouchableOpacity style={styles.product.button}>
                        <Text style={styles.product.button.text}>
                            Thêm vào kho
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.productInfo}>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Độ tuổi phù hợp
                        </Text>
                        <Text style={styles.productInfo.detail.content}>
                            {data.age}
                        </Text>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Loại da phù hợp
                        </Text>
                        <Text style={styles.productInfo.detail.content}>
                            {data.skin}
                        </Text>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Thành phần chính
                        </Text>
                        <Text
                            style={
                                (styles.productInfo.detail.content,
                                {
                                    color: COLORS.AZURE_RADIANCE,
                                    fontSize: normalize(14),
                                    marginTop: scaleY(10),
                                })
                            }>
                            {data.materials}
                        </Text>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Công dụng chính
                        </Text>
                        <View>
                            {data.uses.map((dataUses, index) => {
                                return (
                                    <Text
                                        key={index}
                                        style={
                                            styles.productInfo.detail.content
                                        }>
                                        {`\u25CF ${dataUses}`}
                                    </Text>
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Cách dùng
                        </Text>
                        <View>
                            {data.usage.map((dataUses, index) => {
                                return (
                                    <Text
                                        key={index}
                                        style={
                                            styles.productInfo.detail.content
                                        }>
                                        {`${dataUses}`}
                                    </Text>
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Giới hạn sử dụng
                        </Text>
                        <Text style={styles.productInfo.detail.content}>
                            {data.use_limit}
                        </Text>
                    </View>
                    <View style={styles.productInfo.detail}>
                        <Text style={styles.productInfo.detail.title}>
                            Bước sử dụng
                        </Text>
                        <Text style={styles.productInfo.detail.content}>
                            {data.step}
                        </Text>
                    </View>
                    <View style={styles.padding} />
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default SearchProductScreen;
