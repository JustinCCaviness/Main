import React from 'react';
import { createDevTools } from 'redux-devtools';
import ChartMonitor from 'redux-devtools-chart-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-d'
               changePositionKey='ctrl-q'
               changeMonitorKey='ctrl-m'>
    <LogMonitor />
    <SliderMonitor />
    <ChartMonitor />
  </DockMonitor>
);