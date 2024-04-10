import React, { useState } from 'react';

const TopTooltipComponentMobile = () => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const styles = {
        tooltipContainer: {
            position: 'relative',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        tooltipText: {
            visibility: isTooltipVisible ? 'visible' : 'hidden',
            width: '120px',
            backgroundColor: '#f1f1f1',
            color: '#424242',
            textAlign: 'center',
            padding: '5px 10px',
            borderRadius: '7px',
            fontSize: '13px',
            position: 'absolute',
            zIndex: 1,
            bottom: '100%', // Make Tooltip display on the top of component
            left: '50%',
            transform: 'translateX(-50%) translateY(-10px)', 
        },
        tooltipArrow: {
            position: 'absolute',
            top: '100%', // Make sure arrow is under the Tooltip
            left: '50%', 
            marginLeft: '-5px',
            borderWidth: '5px',
            borderStyle: 'solid',
            borderColor: '#f1f1f1 transparent transparent transparent', 
        }
    };

    return (
        <div
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            style={styles.tooltipContainer}
        >
            <img
                src="https://img.icons8.com/android/24/pencil.png"
                alt="pencil"
                width="20"
                height="20"
            />
            <span style={styles.tooltipText}>
                Change Name
                <div style={styles.tooltipArrow}></div>
            </span>
        </div>
    );
};

export default TopTooltipComponentMobile;
