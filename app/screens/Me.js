import React from 'react';
import {
    ScrollView
} from 'react-native';

import { Tile, List, ListItem, Button } from 'react-native-elements'
import { me } from '../config/data';

export default class Me extends React.Component {

    handleSettingPress = () => {
        this.props.navigation.navigate('Settings');
    };

    render() {
        return (
            <ScrollView>
                <Tile
                    imageSrc={{ uri: this.props.picture.large }}
                    featured
                    title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
                    caption={this.props.email}
                />
                <Button
                    title="Settings"
                    buttonStyle={{ marginTop: 20}}
                    onPress={this.handleSettingPress}
                />
                <List>
                    <ListItem
                        title="Email"
                        rightTitle={this.props.email}
                        hideChevron
                    />
                    <ListItem
                        title="Phone"
                        rightTitle={this.props.phone}
                        hideChevron
                    />
                </List>
                <List>
                    <ListItem
                        title="Username"
                        rightTitle={this.props.login.username}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Birthday"
                        rightTitle={this.props.dob}
                        hideChevron
                    />
                    <ListItem
                        title="City"
                        rightTitle={this.props.location.city}
                        hideChevron
                    />
                </List>
            </ScrollView>

        );
    }
}
Me.defaultProps = {...me};