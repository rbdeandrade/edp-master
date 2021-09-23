'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from 'react-viro';

var createReactClass = require('create-react-class');
var HelloWorldSceneAR = createReactClass({

  render: function() {
    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[0, 0, -10]} scale={[.01, .01, .01]}>
            <Viro3DObject source={require('./portal_res/portal_edp/portal.obj')}
              resources={[require('./portal_res/portal_edp/material.mtl')]}
              type="OBJ"/>
          </ViroPortal>
          <Viro360Video source={require("./portal_res/maat.mp4")}
          loop={true}/>
        </ViroPortalScene>
      </ViroARScene>
    );
  },
});

module.exports = HelloWorldSceneAR;