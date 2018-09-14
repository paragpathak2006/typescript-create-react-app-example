import * as React from 'react';

interface IState {}
interface IProps {}

export default class Home extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <h1>Home.</h1>
        );
    }

}
