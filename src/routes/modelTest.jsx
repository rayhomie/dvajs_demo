import React, { Component } from 'react'
import { connect } from 'dva'


class modelTest extends Component {
    componentDidUpdate() {
            this.refdom.innerHTML = this.props.reduxState.res
    }

    render() {
        return (
            <div >
                我是modelTest页面<br />
                页面中状态：{ this.props.pagesState.age} <br />
        redux中状态：{ this.props.reduxState.name}
                <button onClick={() => {
                    this.props.dispatch({
                        type: 'testModel/setName',
                        data: { name: Math.random() * 100 | 0 },
                        aaa: '数据'
                    })
                }}>
                    reducer修改名字
                </button>
                <button onClick={() => {
                    this.props.dispatch({
                        type: 'testModel/setNameAsync',
                        data: { name: Math.random() * 100 | 0 },
                        aaa: '数据'
                    })
                }}>
                    effect修改名字
                </button>
                <button onClick={() => {
                    this.props.dispatch({
                        type: 'testModel/netRequest'
                    })
                }}>effect发请求</button>
                <div ref={ref => { this.refdom = ref }}></div>
            </div >

        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        pagesState: { age: 21 },
        reduxState: state.testModel
    }
}


export default connect(mapStateToProps)(modelTest)