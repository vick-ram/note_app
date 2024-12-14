import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Container from '@/components/container';

const notes = [
    {
        id: 1,
        title: 'Note 1',
        content: 'This is the content of note 1',
    },
    {
        id: 2,
        title: 'Note 2',
        content: 'This is the content of note 2',
    },
    {
        id: 3,
        title: 'Note 3',
        content: 'This is the content of note 3',
    },
    {
        id: 4,
        title: 'Note 4',
        content: 'This is the content of note 4',
    },
    {
        id: 5,
        title: 'Note 5',
        content: 'This is the content of note 5',
    },
    {
        id: 6,
        title: 'Note 6',
        content: 'This is the content of note 6',
    },
    {
        id: 7,
        title: 'Note 7',
        content: 'This is the content of note 7',
    },
    {
        id: 8,
        title: 'Note 8',
        content: 'This is the content of note 8',
    },
    {
        id: 9,
        title: 'Note 9',
        content: 'This is the content of note 9',
    },
    {
        id: 10,
        title: 'Note 10',
        content: 'This is the content of note 10',
    },
]

type ItemProps = {
    title: string;
    content: string;
}

const Item = ({ title, content }: ItemProps) => (
    <View>
        <Text>{title}</Text>
        <Text>{content}</Text>
    </View>
)

const HomeScreen = () => {
    return (
        <Container>
            <View style={styles.container}>
                <FlatList
                data={notes}
                renderItem={({ item }) => <Item title={item.title} content={item.content} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default HomeScreen;