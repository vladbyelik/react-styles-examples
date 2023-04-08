import React from 'react';
import { Button, StyledComponentsContainer, Title } from './styles';

class StyledComponentsExamples extends React.Component {
  state = {
    isYellow: false
  }

  render() {
    return (
      <StyledComponentsContainer>
        <Title isYellow={this.state.isYellow}>
          StyledComponentsExamples
        </Title>
        <Button onClick={() => this.setState({ isYellow: !this.state.isYellow })}>
          Click to change title color
        </Button>
      </StyledComponentsContainer>
    )
  } 
}

export default StyledComponentsExamples;