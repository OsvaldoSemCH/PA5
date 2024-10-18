import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router'

export default function Login()
{
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");

    const PressBtn = () =>
    {
        router.push("/(tabs)");
    }

    return (
    <>
        <SafeAreaView>
            <Text>Login</Text>
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={SetEmail}
                value={Email}
                placeholder='Email'
                keyboardType='email-address'
            />
            <Text>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={SetPassword}
                value={Password}
                placeholder='Password'
                keyboardType='numeric'
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => {PressBtn()}}>
                <Text>Enviar</Text>
            </TouchableOpacity>
            <View>
                <Link href={"/(tabs)"}>Vai</Link>
            </View>
        </SafeAreaView>
    </>
    );
}

const styles = StyleSheet.create({
    input:
    {
        paddingHorizontal: 10,
        paddingVertical: 3,

    }
});