import React from 'react';
import Watermark from 'styles/components/ui/watermark'; 

const WatermarkNormal = () => (
  <Watermark content="Custom Watermark" count={3}>
    <div style={{ height: '200px' }} />
  </Watermark>
);

export default WatermarkNormal;
