import React, { useState } from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const questions = [
    {
        id: 1,
        image: require('./img/porcupine.png'),
        label: 'What is this animal?',
        options: ['Porcupine', 'Hedgehog', 'Armadillo'],
        answer: 'Porcupine',
    },
    {
        id: 2,
        image: require('./img/zebra.png'),
        label: 'What is this animal?',
        options: ['Zebra', 'Horse', 'Donkey'],
        answer: 'Zebra',
    },
    {
        id: 3,
        image: require('./img/giraffe.png'),
        label: 'What is this animal?',
        options: ['Giraffe', 'Camel', 'Llama'],
        answer: 'Giraffe',
    },
];

const MyApp = () => {
    const [answers, setAnswers] = useState({});

    const handleSubmit = () => {
        let correctCount = 0;
        for (const question of questions) {
            if (answers[question.id] === question.answer) {
                correctCount += 1;
            }
        }
        Alert.alert(`You have ${correctCount} correct answer${correctCount !== 1 ? 's' : ''}!`);
    };

    return (
        <View>
            {questions.map((question) => (
                <View key={question.id}>
                    <Image source={question.image} />
                    <Text>{question.label}</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setAnswers({ ...answers, [question.id]: value })}
                        items={question.options.map((option) => ({
                            label: option,
                            value: option,
                        }))}
                        placeholder={{ label: "Select an option", value: null }}
                    />
                </View>
            ))}
            <Button title="Submit Answers" onPress={handleSubmit} />
        </View>
    );
};

export default MyApp;
