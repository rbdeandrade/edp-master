'use strict';

import React, { Component } from 'react';
import {
  ViroScene,
  Viro360Video,
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {} // Set initial state here
  }

  render() {
    return (
      <ViroScene>
        <Viro360Video source={require("./res/maat.mp4")}
        loop={true}
        paused={false}
        volume={1.0} />
      </ViroScene>
    );
  }

};

module.exports = HelloWorldScene;
