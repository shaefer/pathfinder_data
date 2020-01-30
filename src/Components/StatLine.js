import React from 'react';
const StatLine = (props) => {
    const section = props.section
    if (!section) return '';

    const inlineVersion = (
        <React.Fragment>
            {props.prefix}<span style={{fontWeight: 'bold'}}>{props.header}</span> <span>{section}</span>
        </React.Fragment>
    );
    return inlineVersion;
};
export default StatLine;
