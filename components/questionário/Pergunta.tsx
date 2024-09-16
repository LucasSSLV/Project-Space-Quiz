import PerguntaModel from "@/data/model/Pergunta";
import { View } from "react-native";
import Enunciado from "./Enunciado";
import Opcao from "./Opcao";

export interface PerguntaProps {
    pergunta: PerguntaModel;
    opcaoSelecionada: (indice: number) => void;
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <View >
            <Enunciado enunciado={props.pergunta.enunciado} />
            <View>
                {props.pergunta.opcoes.map((opcao, index) =>
                    <Opcao
                        key={index}
                        indece={index}
                        texto={opcao}
                        onPress={() => props.opcaoSelecionada(index)}
                    />
                )}
            </View>
        </View>
    )
}
