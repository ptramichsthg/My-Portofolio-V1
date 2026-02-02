import { useState } from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({
    children,
    onClick,
    variant = 'primary',
    icon,
    className = '',
    disabled = false,
    active = false
}) => {
    const [ripples, setRipples] = useState([]);

    const createRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
            id: Date.now()
        };

        setRipples([...ripples, newRipple]);

        setTimeout(() => {
            setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
        }, 600);
    };

    const handleClick = (e) => {
        if (!disabled) {
            createRipple(e);
            onClick && onClick(e);
        }
    };

    const variantClasses = {
        primary: 'animated-btn-primary',
        secondary: 'animated-btn-secondary',
        gradient: 'animated-btn-gradient',
        glow: 'animated-btn-glow',
        magnetic: 'animated-btn-magnetic',
        navigation: 'animated-btn-navigation'
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`animated-btn ${variantClasses[variant]} ${className} ${disabled ? 'disabled' : ''} ${active ? 'active' : ''}`}
        >
            <span className="btn-content">
                {icon && <i className={`${icon} btn-icon`}></i>}
                {children}
            </span>

            {/* Ripple Effect */}
            <span className="ripple-container">
                {ripples.map(ripple => (
                    <span
                        key={ripple.id}
                        className="ripple"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            width: ripple.size,
                            height: ripple.size
                        }}
                    />
                ))}
            </span>

            {/* Shimmer Effect */}
            <span className="shimmer"></span>
        </button>
    );
};

export default AnimatedButton;
