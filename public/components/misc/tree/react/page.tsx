import React, { useState, FunctionComponent } from 'react';

interface TreeNodeProps {
    label: string;
    children?: React.ReactNode;
}

const TreeNode: FunctionComponent<TreeNodeProps> = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="tree-item">
            <span className="toggle" onClick={toggle}>
                {isOpen ? '-' : '+'}
            </span> {label}
            {isOpen && <div className="tree-children">{children}</div>}
        </div>
    );
};

const TreeViewDemo: FunctionComponent = () => {
    return (
        <div className="tree-view" aria-label="tree-view">
            <TreeNode label="Root">
                <TreeNode label="Child 1">
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
