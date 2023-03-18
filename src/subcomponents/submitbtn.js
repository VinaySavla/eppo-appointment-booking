import React from "react";

function Submitbtn({text, secondary, onPress}) {
    if(secondary)
    {
        return (
            <div className="d-grid">
                <button type="submit" style={styles.secondarySubmitbtn} class="btn" onClick={onPress}>
                    {text}
                </button>
            </div>
        );
    }
    else {
        return (
            <div className="d-grid">
                <button type="submit" style={styles.submitbtn} class="btn" onClick={onPress}>
                    {text}
                </button>
            </div>
        );
    }


}

const styles = {
    submitbtn:{
        background: "#06283D",
        color: '#FDFBE2',
        padding: '1vh',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '150%',
    },
    secondarySubmitbtn:{
        background: "#F7D65A",
        color: '#06283D',
        padding: '1vh',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '150%',
    }
}

export default Submitbtn;
