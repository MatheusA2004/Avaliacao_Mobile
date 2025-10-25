import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer";
import { IconPause, IconPlay } from "../components/Icons";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('./pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('./short.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('./long.png'),
    display: 'Pausa longa'
  },
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])
  const [segundos, setsegundos] = useState(pomodoro[0].initialValue)
  const [tempoCorrido, settempoCorrido] = useState(false)

  const timerRef = useRef(null)

  const limpar = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      settempoCorrido(false)
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setsegundos(newTimerType.initialValue)
    limpar()
  }  

  const toggleTimer = () => {
    if (timerRef.current) {
      limpar()
      return
    }
    
    settempoCorrido(true)

    const id = setInterval(() => {
      setsegundos(oldState => {
        if (oldState === 0) {
          limpar()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000)
    timerRef.current = id
  }

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image}/>
      <View style={styles.acoes}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id}
              active={ timerType.id === p.id }
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalsegundos={segundos} />
        <FokusButton 
          title={tempoCorrido ? 'Pausar' : 'Começar'}
          icon={tempoCorrido ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textoFooter}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.textoFooter}>
          Desenvolvido por Matheus. 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  acoes: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footer: {
    width: '80%',
  },
  textoFooter: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})