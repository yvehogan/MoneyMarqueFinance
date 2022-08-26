import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';

function PageWrapper({ children }) {
    return (
        <div className=" w-full">
            <div className="w-full overflow-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default PageWrapper;
