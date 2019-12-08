import React, { Component } from 'react';

import { StyledRow, StyledButton } from './Example.styles';

class ExampleClass extends Component {
  state = {
    count: 0,
    width: window.innerWidth
  };

  componentDidMount() {
    document.title = `You click ${this.state.count} times`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = `You click ${this.state.count} times`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  handleButtonClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    const { count, width } = this.state;
    return (
      <main>
        <StyledRow>
          <StyledButton onClick={this.handleButtonClick}>
            Click me ({count})
          </StyledButton>
        </StyledRow>
        <StyledRow>Width: {width}</StyledRow>
      </main>
    );
  }
}

export default ExampleClass;
