import React, { useState, FunctionComponent } from 'react';

interface TreeNodeProps {
  label: string;
  children?: React.ReactNode;
}

const TreeNode: FunctionComponent<TreeNodeProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Inline styles are for demonstration. It's better to use CSS classes in a real app.
  const nodeStyle = {
    cursor: 'pointer',
    userSelect: 'none',
  };

  const childrenStyle = {
    marginLeft: '20px',
    paddingLeft: '5px',
    borderLeft: '1px solid lightgray',
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className="tree-item">
      <span  className="toggle" onClick={toggle}>
        {children ? (isOpen ? '▼' : '▶︎') : ''}{' '}
      </span>
      {label}
      <div style={childrenStyle} className="tree-children">
        {children}
      </div>
    </div>
  );
};

const TreeViewDemo: FunctionComponent = () => {
  return (
    <div className="tree-view" aria-label="tree-view">
      <TreeNode label="Root">
        <TreeNode label="Child 1">
          {/* These nodes are not given an initial open state, they will remain closed */}
          <TreeNode label="Grandchild 1.1" />
          <TreeNode label="Grandchild 1.2" />
        </TreeNode>
        <TreeNode label="Child 2" />
        <TreeNode label="Child 3" />
      </TreeNode>
    </div>
  );
};

export default TreeViewDemo;
