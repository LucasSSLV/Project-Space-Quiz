import Pergunta from "@/components/questionário/Pergunta";
import Resultado from "@/components/questionário/Resultado";
import Logo from "@/components/template/Logo";
import Pagina from "@/components/template/Pagina";
import useQuestionario from "@/hooks/useQuestionario";
import { Text, View } from "react-native";

export default function Index() {
  const { pergunta, responder, concluido, pontuacao, totaldePerguntas, reiniciar } = useQuestionario()

  return (
    <Pagina>
      <View style={{ gap: 40 }}>
        <Text style={{ fontFamily: "SPACEMISSION", color: "white" }} />
        <Logo />
        {concluido ? (
          <Resultado
            pontucao={pontuacao}
            totaldePerguntas={totaldePerguntas}
            reiniciar={reiniciar} />
        ) : (
          <Pergunta pergunta={pergunta} opcaoSelecionada={responder} />
        )}
      </View>
    </Pagina>
  );
}
