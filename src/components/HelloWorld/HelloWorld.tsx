// story: ../stories/HelloWorld.story.tsx
import * as React from 'react';
import './HelloWorld.css';

export interface HelloWorldProps {
    reverse?: boolean;
}

const reverse = (s: string) => s.split('').reverse().join('');

export const HelloWorld: React.FunctionComponent<HelloWorldProps> = (props) => (
    <p>{props.reverse ? reverse('Hello world!') : 'Hello world!'}</p>
);
