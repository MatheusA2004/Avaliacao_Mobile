import { Pressable, StyleSheet, Text } from "react-native"

export const FokusButton = ({ onPress, title, icon }) => {
    return (
        <Pressable style={styles.botao} onPress={onPress}>
            {icon}
            <Text style={styles.botaoTexto}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoTexto: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  }
})