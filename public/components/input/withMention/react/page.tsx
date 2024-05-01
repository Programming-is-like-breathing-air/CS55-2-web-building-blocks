import React, { useState } from 'react';
import { Mentions } from 'antd';

const MOCK_DATA = {
  '@': ['gmail.com', 'icloud.com', 'qq.com'],
  '#': ['1.0', '2.0', '3.0'],
};

export function InputMention() {
  const [prefix, setPrefix] = useState('@');

  const onSearch = (_, newPrefix) => {
    setPrefix(newPrefix);
  };

  return (
    <Mentions
      style={{ width: '50%' }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={['@', '#']}
      onSearch={onSearch}
      options={(MOCK_DATA[prefix] || []).map((value) => ({
        key: value,
        value,
        label: value,
      }))}
    />
  );
}

export default InputMention;
