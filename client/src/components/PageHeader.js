import React from 'react';

const PageHeader = ({title}) => {
    //const {title} = props
    return (
        <div className="wrapperPage">
            <hr />
            <h1>{title}</h1>
        </div>
    );
}

export default PageHeader;
