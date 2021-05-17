import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, ListItem, Switch, 
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default class HeaderIconTextButtonExample extends Component {

  state = {  
    switchValue: false
    
};


stateblue = {  
  switchValue: false
  
}; 


  render() {
    return (
      <Container>
        <Header>
          
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Setting Sensor</Title>
          </Body>
          <Right>
          <AntDesign name="setting" size={40} color="white" />
          </Right>
        </Header>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
            <Switch  
                    value={this.state.switchValue}  
                    onValueChange ={(switchValue)=>this.setState({switchValue})}/>    
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
            <Switch  
                    value={this.stateblue.switchValue}  
                    onValueChange ={(switchValue)=>this.setState({switchValue})}/> 
            
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <AntDesign name="arrowleft" size={24} color="black" />
              <AntDesign name="arrowright" size={24} color="black" />
            </Left>
            <Body>
              <Text>Forward/Rewind</Text>
            </Body>
            <Right>
              <Text>5 seg </Text>
            <AntDesign name="minuscircleo" size={30} color="black" />
            <AntDesign name="pluscircleo" size={30} color="black" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
            <Entypo name="gauge" size={24} color="black" />
            </Left>
            <Body>
              <Text>Velocity</Text>
            </Body>
            <Right>
            <Text>1 min-2 min </Text>
            <AntDesign name="minuscircleo" size={30} color="black" />
            <AntDesign name="pluscircleo" size={30} color="black" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
            <Octicons name="versions" size={24} color="black" />
            </Left>
            <Body>
              <Text>Version</Text>
            </Body>
            <Right>
            <Text>4.1.2 </Text>
            
            </Right>
          </ListItem>
        
      </Container>
    );
  }
}