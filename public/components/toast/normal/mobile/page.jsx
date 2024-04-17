import React, { useState } from 'react';

const NormalToastComponentMobile = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    const styles = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '500px',
            margin: 0,
        },
        button: {
            width: '140px',
            height: '35px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            marginTop: '10px',
            backgroundColor: buttonHover ? '#8b0000' : '#E64626',
            transition: 'background-color 0.2s ease-in-out',
            userSelect: 'none',
            boxShadow: 'none',
            borderStyle: 'none',
        },
        toast: {
            width: '250px',
            padding: '10px 20px',
            backgroundColor: '#2c3e50',
            color: '#ecf0f1',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
            opacity: 0,
            transition: 'opacity 0.3s, visibility 0.3s',
            position: 'absolute',
            bottom: '-5px',
            right: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            visibility: isVisible ? 'visible' : 'hidden',
            opacity: isVisible ? 0.3 : 0.3,
        },
        toastButton: {
            marginTop: '10px',
            padding: '5px 10px',
            border: 'none',
            backgroundColor: '#3498db',
            color: 'white',
            borderRadius: '3px',
            cursor: 'pointer',
        },
        closeButton: {
            position: 'absolute',
            top: '5px',
            right: '5px',
            cursor: 'pointer',
            background: 'transparent',
            color: '#ecf0f1',
            border: 'none',
        }
    };

    const showToast = () => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    };

    const hideToast = () => {
        setIsVisible(false);
    };

    return (
        <div style={styles.container}>
            <button
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
                onClick={showToast}
                style={styles.button}
            >
                Show Toast
            </button>
            <div
                id="toast"
                style={{
                    ...styles.toast,
                    opacity: isVisible ? '1' : '0',
                    visibility: isVisible ? 'visible' : 'hidden',
                }}
            >
                This is a toast message!
                <span onClick={hideToast} style={styles.closeButton}>&times;</span>
            </div>
        </div>
    );
};

export default NormalToastComponentMobile;