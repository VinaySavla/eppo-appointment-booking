import React from 'react';

function Formlabel({text}) {
    return (
        <label style={styles.label}>
            {text}
        </label>
    );
}

const styles = {
    label: {
        fontSize: '5vh',
        color:'#06283D',
        fontFamily:'Stick No Bills',
}
}
export default Formlabel;
