import ITopic from './models/ITopic';

export const topicsJson: ITopic[] = [
    {
        description: 'Declarative, component based routing for React',
        id: 'react-router',
        name: 'React Router',
        resources: [
            {
                description: 'URL parameters are parameters whose values are set dynamically in a page\'s URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.',
                id: 'url-parameters',
                name: 'URL Parameters',
                url: 'https://tylermcginnis.com/react-router-url-parameters',
            },
            {
                description: 'When building an app with React Router, eventually you\'ll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.',
                id: 'programmatically-navigate',
                name: 'Programatically navigate',
                url: 'https://tylermcginnis.com/react-router-programmatically-navigate/',
            },
        ],
    },
    {
        description: 'A JavaScript library for building user interfaces',
        id: 'reactjs',
        name: 'React.js',
        resources: [
            {
                description: 'React Lifecycle events allow you to tie into specific phases of a components lifecycle',
                id: 'react-lifecycle',
                name: 'React Lifecycle Events',
                url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/',
            },
            {
                description: 'A collection of \'Aha\' moments while learning React.',
                id: 'react-aha',
                name: 'React AHA Moments',
                url: 'https://tylermcginnis.com/react-aha-moments/',
            },
        ],
    },
    {
        description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
        id: 'functional-programming',
        name: 'Functional Programming',
        resources: [
            {
                description: 'A guide to understanding the difference between Imperative and Declarative programming.',
                id: 'imperative-declarative',
                name: 'Imperative vs Declarative programming',
                url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/',
            },
            {
                description: 'A guide to building UI with pure functions and function composition in React',
                id: 'fn-composition',
                name: 'Building User Interfaces with Pure Functions and Function Composition',
                url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/',
            },
        ],
    },
];
