import React from 'react';
const StatLine = (props) => {
    const header = props.header
    const section = props.section
    if (!section) return '';

    const inlineVersion = (
        <React.Fragment>
            {props.prefix}<span style={{fontWeight: 'bold'}}>{header}</span> <span>{section}</span>
        </React.Fragment>
    );
    const blockVersion = (
        <React.Fragment>
        <div>{props.prefix}<span style={{fontWeight: 'bold'}}>{header}</span> <span>{section}</span></div>
        </React.Fragment>
    );
    return props.inline ? inlineVersion : blockVersion;
};
export default StatLine;
