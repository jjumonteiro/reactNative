import React, { useState } from 'react';
import {StatusBar} from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);

    const ButtonMais = () => {
        setCount(count + 1);
    }

    const ButtonMenos = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" backgroundColor={"#71afe5"} translucent={false} />
            <Image source={require("./assets/images.jpg")} style={{ width: 150, height: 150 }} />
            <Text style={styles.MudarCor}> Capibara!</Text>
            {/*<Text>----------------</Text>*/}
            <Button title={"músiquinhaa!"} onPress={() => alert('capibaraaaa, capibaraaaaaaaaaaaaa')} />
            {/*<Text>----------------</Text>*/}
            <Button title={"Sempre mais 1"} onPress={ButtonMais} />
            <Text>Você clicou {count} vezes</Text>
            <Button title={"Sempre menos 1"} onPress={ButtonMenos} />
            {/*<Text>----------------</Text>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#deecf9',
        alignItems: 'center',
        justifyContent: 'center',
        gap:20
    },
    MudarCor: {
        fontSize: 40,
        color: '#2196f3'
    }
});