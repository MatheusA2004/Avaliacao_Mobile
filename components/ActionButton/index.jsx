import { Pressable, StyleSheet, Text } from "react-native"

export const ActionButton = ({ active, onPress, display }) => {
    return (
        <Pressable
            style={active ? styles.BotaoAtivo : null}
            onPress={onPress}
        >
            <Text style={styles.BotaoTexto}>
                {display}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  BotaoAtivo: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
  BotaoTexto: {
    fontSize: 12.5,
    color: '#FFF',
    padding: 8
  }
})