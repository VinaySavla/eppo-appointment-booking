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
        background: "#0A2647",
        color: '#FDFBE2',
        padding: '1vh',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '3vh',
    },
    secondarySubmitbtn:{
        background: "#2C74B3",
        color: '#ffffff',
        padding: '1vh',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '3vh',
    }
}

export default Submitbtn;
