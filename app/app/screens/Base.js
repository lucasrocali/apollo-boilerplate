// @flow

import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    font-size: 20
`;

const Button = styled.TouchableOpacity`

`

export default function Base() {
    const [count, setCount] = useState(0);
    return (
        <Container>
            <Text>Base</Text>
            <Text>{`${count}`}</Text>
            <Button onPress={() => setCount(count + 1)}>
                <Text>{'+'}</Text>
            </Button>
            <Button onPress={() => setCount(count - 1)}>
                <Text>{'-'}</Text>
            </Button>
        </Container>
    );
}