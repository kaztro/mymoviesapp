import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';

const Card = ({ movie, color, textBtn, navigation }) => {
    const { _id, title, poster_path, release_date, overview, vote_average } = movie;

    const [imageURL] = `https://image.tmdb.org/t/p/original${poster_path}`;

    return (
        <SafeAreaView style={styles.card}>
            <View style={[styles.tituloView, { backgroundColor: color }]}>
                <Text style={styles.titulo}>{title}</Text>
            </View>
            <Image source={{uri: imageURL}} style={styles.img} />
            <View style={styles.viewCard}>
                <View style={[styles.button, { backgroundColor: color }]}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('details', { _id })}>
                        <Text style={styles.buttonText}>{textBtn}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        marginBottom: 40,
        marginTop: 20,
        width: '90%',
        height: 200,
    },
    viewCard: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    tituloView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    titulo: { fontSize: 19, color: '#fff', fontWeight: 'bold' },
    button: {
        paddingVertical: 7,
        borderRadius: 10,
        width: '35%',
        opacity: 0.8,
        height: 40,
        marginTop: -60,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        opacity: 1,
    },
    img: {
        width: '100%',
        height: '90%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
});