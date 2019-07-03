import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Layout, Spin } from 'antd';
import PageHeader from './header';
import PageConten from './content';
const userMenu = [
    {
        "code": "counter",
        "name": "counter",
        "order": 0,
        "parentId": null,
        "id": null,
        "status": null,
        "enabledAll": null,
        "subMenuList": [

        ]
    },
    {
        "code": "password",
        "name": "password",
        "order": 0,
        "parentId": null,
        "id": null,
        "status": null,
        "enabledAll": null,
        "subMenuList": [

        ]
    },
];
export default class BasicLayout extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        const { history, navData, match } = this.props;
        return (
            <div>
                <div style={{ width: '100%', height: '100%' }}>
                    <Layout style={{ width: '100%', height: '100%', minWidth: '1310px' }} >
                        <PageHeader
                            key="header"
                            history={history}
                            userInfo={{name:'lanveer'}}
                            userMenu={userMenu}
                        />
                        <PageConten
                            navData={navData}
                            history={history}
                            match={match}
                            userMenu={userMenu}
                        />
                    </Layout>
                </div>
            </div>
        );
    }
}
