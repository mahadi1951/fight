import React from 'react';

const MyContainer = ({className, children}) => {
    return (
        <div className={`container mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
};

export default MyContainer;