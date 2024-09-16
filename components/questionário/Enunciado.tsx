import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export interface EnunciadoProps {
    enunciado: string;
}

export default function Enunciado(props: EnunciadoProps) {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['black', 'transparent']}
                style={styles.background}
            />
            <Text style={styles.text}>{props.enunciado}</Text>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginHorizontal: 20,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 40,
    },
    text: {
        color: 'white',
        fontSize: 33,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.9,
    },
});