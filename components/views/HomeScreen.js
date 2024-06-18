import { Button, Text, View } from "react-native";

export default function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen teste</Text>

            <Button
                title='Ir Para Sobre'
                onPress={() => props.navigation.navigate('Sobre')}
            ></Button>
        </View>
    );
}