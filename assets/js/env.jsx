import React from "react";

const _DEPLOYMENT_OPTIONS = {
    LOCAL: 'Local development server',
    STAGING: 'Staging server',
    PROD: 'Production server'
};
const _DEPLOYMENT = _DEPLOYMENT_OPTIONS.LOCAL; // LOCAL, STAGING or PROD
let Env = null;
switch (_DEPLOYMENT) {
    case _DEPLOYMENT_OPTIONS.LOCAL:
        Env = () => {
            return {
                /* LOCAL DEV */
                apiRoot: 'http://localhost:3000/api',
                apiDataRoot: 'http://localhost:3000/api/v1',
                appDetails: {
                    organisationName: 'Aninstance Consultancy',
                    shortOrgName: 'Aninstance Consultancy',
                    copyright:
                        (<div><p>Application developed by Aninstance Consultancy. <a
                            href="https://www.aninstance.com" target="_blank">Tap here for support</a>.</p>
                        </div>),
                    footerText: `This is a demo instance of the Simple Stock Management application.`,
                    greeting: (<span>Simple Stock Management</span>),
                    version: (<div>Version: 1.1.0</div>)
                }
            };
        };
        break;
    case _DEPLOYMENT_OPTIONS.STAGING:
        Env = () => {
            return {
                // /* STAGING */
                apiRoot: 'https://stockmanagement.staging.aninstance.com/api',
                apiDataRoot: 'https://stockmanagement.staging.aninstance.com/api/v1',
                appDetails: {
                    organisationName: 'Aninstance Consultancy',
                    shortOrgName: 'Aninstance Consultancy',
                    copyright:
                        (<div><p>Application developed by Aninstance Consultancy. <a
                            href="https://www.aninstance.com" target="_blank">Tap here for support</a>.</p>
                        </div>),
                    footerText: `This is a demo instance of the Simple Stock Management application.`,
                    greeting: (<span>Simple Stock Management</span>),
                    version: (<div>Version: 1.1.0</div>)
                }
            };
        };
        break;
    case _DEPLOYMENT_OPTIONS.PROD:
        Env = () => {
            return {
                /* PRODUCTION */
                apiRoot: 'https://stockmanagement.brentlodge.org/api',
                apiDataRoot: 'https://stockmanagement.brentlodge.org/api/v1',
                appDetails: {
                    organisationName: 'Brent Lodge Bird & Wildlife Trust',
                    shortOrgName: 'Brent Lodge',
                    copyright:
                        (<div><p>Application developed by Aninstance Consultancy. <a
                            href="https://www.aninstance.com" target="_blank">Tap here for support</a>.</p>
                        </div>),
                    footerText: `Brent Lodge Bird & Wildlife Trust. Registered Charity 276179.`,
                    greeting: (<span>Simple Stock Management</span>),
                    version: (<div>Version: 1.1.0</div>)
                }
            };
        };
        break;
}

export default Env;