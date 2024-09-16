import { Text, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
export interface OpacaoProps {
    texto: string
    indece: number
    onPress: () => void
}

export default function Opcao(props: OpacaoProps) {
    return (
        <View style={styles.container}>
            < Pressable style={styles.botao}
                onPress={props.onPress}
            >
                < Text style={styles.texto} > {props.texto}</Text >
            </Pressable >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E9E9B',
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        marginTop: 10,
        margin: 5,
        borderRadius: 50,

    },
    botao: {
        backgroundColor: '#2E9E9B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        borderRadius: 50,
    },
    texto: {
        textAlign: 'center',
        color: 'white',
        fontSize: 35,
    }
});