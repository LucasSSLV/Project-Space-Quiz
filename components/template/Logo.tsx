import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View style={styles.container}>
            <Text style={styles.primario}>Space Quiz</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    primario: {
        fontSize: 60,
        color: 'white',
        fontFamily: 'SOLARSPACEDEMO-Regular',
        textAlign: 'center',
    },

});