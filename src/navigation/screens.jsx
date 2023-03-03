import { Text, View } from "react-native"

const StartScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Start Screen</Text>
        </View>
    )
}

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
        </View>
    )
}

const LoginScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Login Screen</Text>
        </View>
    )
}

export const screens = [
    {
        id: 2,
        name: 'HomeScreen',
        component: HomeScreen,
    },
    {   
        id: 1,
        name: 'StartScreen',
        component: StartScreen,
    },    
    {
        id: 3,
        name: 'LoginScreen',
        component: LoginScreen,
    },
]


