import React from "react";
import styles from './style.module.scss';

const Label = ({ label, onClick }) => {
    
    return <div 
            className={styles.label}
            style={
                label.isSelected ? {
                    backgroundColor: `#000`,
                } : {
                    backgroundColor: label.color,
                }
            }
            onClick={onClick}
            data-id={label.id}
        >
            {label.name}
        </div>
};

export default Label;
