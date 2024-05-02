import React from 'react';
import { Card } from "styles/components/ui/card";
import { Statistic, ArrowDownOutlined , ArrowUpOutlined } from 'styles/components/ui/statistic';

function IncardStatistic() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1, marginRight: '10px', marginLeft: '-10px', marginTop: '10px' }}> 
        <Card style={{ width: '170px', height: '100px' }}>
          
            <div style={{marginTop: '10px', textAlign: 'center', marginBottom: '6px',color: '#888',marginLeft: '-100px' }}>Active</div>
            <Statistic
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
        </Card>
      </div>
      <div style={{ flex: 1, marginTop: '10px' }}> 
        <Card style={{ width: '170px', height: '100px' }}>
          
            <div style={{ marginTop: '10px', textAlign: 'center', marginBottom: '6px',color: '#888', marginLeft: '-120px' }}> 
              Idle
            </div>
            <Statistic
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          
        </Card>
      </div>
    </div>
  );
}

export default IncardStatistic;
