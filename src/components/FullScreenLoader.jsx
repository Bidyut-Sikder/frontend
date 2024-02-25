
import React, {Fragment} from 'react';
import {useSelector} from "react-redux";
const FullscreenLoader = () => {
    const settings = useSelector((state) => state.setting.loader)

   // console.log(settings)

    return (
        <Fragment>
            <div  className={settings + " LoadingOverlay"}>
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                    
                </div>
            </div>
        </Fragment>
    );
};

export default FullscreenLoader;