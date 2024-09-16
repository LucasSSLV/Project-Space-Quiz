import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export interface ResultadoProps {
    pontucao: number
    totaldePerguntas: number
    reiniciar: () => void
}

export default function Resultado(props: ResultadoProps) {

    const { pontucao, totaldePerguntas, reiniciar } = props

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Você Acertou!</Text>
            <Text style={styles.destaque}>{
                Math.round((pontucao / totaldePerguntas) * 100
                )}%</Text>
            <Pressable style={styles.botao} onPress={reiniciar}>
                <Text style={styles.textBotao}>  Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 20,
        borderRadius: 10,
        width: 300,
        // height: 300,
    },
    texto: {
        // fontFamily: "",
        fontSize: 35,
        color: "white",
        // marginBottom: 10
    },
    destaque: {
        fontSize: 90,
        color: "#FFD700",
        fontWeight: "900",
        // marginBottom: 10
    },
    botao: {
        backgroundColor: "#FFD700",
        padding: 10,
        borderBottomEndRadius: 10,
        borderTopLeftRadius: 10,
    },
    textBotao: {
        fontFamily: "SPACEMISSION",
        fontSize: 24,
        color: "black",
        padding: 10,
    },
})