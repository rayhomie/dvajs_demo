import * as req from '../services/example.js'
export default {
    namespace: 'testModel',//单一状态树上的唯一标识（每一个model必须有唯一命名空间）
    state: {
        name: 'rayhomie'
    },
    reducers: {
        setName(_state, payload) {
            console.log(payload);
            // const _state = JSON.parse(JSON.stringify(state));
            //state改变前后内存地址改变才能触发更新
            _state.name = payload.data.name
            return { ..._state }
        },
        netRequestHandler(state, payload) {
            const { res } = payload
            console.log(res);
            return { ...state, res }
        }
    },
    effects: {
        *setNameAsync(payload, { put, call }) {
            yield put({
                type: 'setName',
                data: payload.data
            })
            yield console.log(call);
        },
        *netRequest(payload, { put, call, select }) {
            let res = yield call(req.topics)
            let a=yield select(state=>state.testModel)
            yield console.log(a)
            if (res.data) {
                yield put({
                    type: 'netRequestHandler',
                    res: res.data.data[0].content
                })
            }
        }
    }
}