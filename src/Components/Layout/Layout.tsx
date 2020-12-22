import React from "react";

export default function Layout({children, authService}) {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}