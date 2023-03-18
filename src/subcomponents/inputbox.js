import React from 'react';

function Inputbox({type, className, placeholder, onChange, rows}) {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            style={styles.inputbx}
            onChange={onChange}
            rows={rows}
        />
    );
}

const styles = {
    inputbx:{
        fontSize:'3vh',
    }
}

export default Inputbox;
