import React, { Component }  from 'react'
import PropTypes             from 'prop-types'
import ReactDOM              from 'react-dom'
import { createStore }       from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props

    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={this.onIncreaseClick2.bind(this)}>Increase2</button>
      </div>
    )
  }

  onIncreaseClick2() {
	  console.log( "haha" );
  }
}

Counter.propTypes = {
  value           : PropTypes.number.isRequired,
  onIncreaseClick : PropTypes.func.isRequired
}

// Action [所有要执行的指令]
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
// createStore 函数必须接收一个能够修改应用状态的函数
const store = createStore(counter)

// 把state映射成组件的prop
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// 绑定属性 value 到 Counter 组件 关联关系 redux state.count

// 把action映射成组件的属性
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}
// 绑定属性 onIncreaseClick 到 Counter 组件 关联关系 派发 reducer increaseAction action

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


/**
流程自诉
1. 当点击button按钮触发onClick事件
2. onClick事件执行 { onIncreaseClick } 这个句柄
3. onIncreaseClick这个句柄 派发事件给 increaseAction 这个Action
4. 在Provider中的store装有监听器Reducer-counter
5. counter根据action更新状态返回
6. state状态更新反映到映射的属性value上
7. value取到值进行显示
**/
