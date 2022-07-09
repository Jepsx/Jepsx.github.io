import React from 'react';
import './IntroItem.css'

function IntroItem({className}){
    return(
        <div className={className}>
            {className === 'intro__item text' ? 
                <React.Fragment>
                    <div className="intro__item_background-triangle"></div>
                    <p className="intro__item_p top">Hola, gusto en conocerte.</p>
                    <p className="intro__item_p bottom">Mi Nombre es</p>
                </React.Fragment>
            :   <React.Fragment>
                    <div className="intro__item_circle">
                        <div className="intro__item_circle_circle" >
                            <picture>
                                <img alt='' />
                            </picture>
                        </div>
                        </div>
                    <p className="intro__item_name">Julián E. Pinzón</p>
                     <p className="intro__item_degree">Desarrollador Web</p>
                </React.Fragment>}
        </div>
    )
}

export {IntroItem}