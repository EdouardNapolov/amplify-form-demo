import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    Button,
    Heading,
    TextField,
    View,
    Card,
    Flex
} from "@aws-amplify/ui-react";

function App({ signOut }) {
    return (
        <View className="App">
            <Card variation="elevated">
                <Heading >Enter user information</Heading>
                <Flex
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    alignContent="flex-start"
                    wrap="nowrap"
                    gap="1rem"
                >
                    <TextField
                        size="default"
                        label="Last name"
                        name="lastName"
                    />
                    <TextField
                        size="default"
                        label="First name"
                        name="firstName"
                    />
                    <TextField
                        size="default"
                        label="Email"
                        name="email"
                    />
                    <Button
                        variation="primary"
                        size="large"
                        loadingText=""
                        onClick={() => alert('hello')}
                        ariaLabel=""
                    >
                        Submit
                    </Button>
                </Flex>
            </Card>
        </View>
    );
}

export default withAuthenticator(App);