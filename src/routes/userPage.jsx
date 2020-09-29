import React from 'react';
import { connect } from 'dva';

class userPage extends React.Component {

    render() {
        console.log(this.props);
        return (
            <>
                <div>userPage</div>
                <button onClick={() => this.props.history.push('/')}>跳转到主页</button>
            </>
        )
    }
}

export default connect()(userPage);
