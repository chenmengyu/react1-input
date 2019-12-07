import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: props.value || props.defaultValue
      }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
      return (
          <div>
              <input
                  value={this.state.value}
                  onChange={e => this.handleChange(e)}
                  ref={ref => this.input = ref}
              />
          </div>
      )
  }
}