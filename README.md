# 最简单的redux

## 流程自述
1. 当点击button按钮触发onClick事件  
2. onClick事件执行 { onIncreaseClick } 这个句柄  
3. onIncreaseClick这个句柄 派发事件给 increaseAction 这个Action  
4. 在Provider中的store装有监听器Reducer-counter  
5. counter根据action更新状态返回  
6. state状态更新反映到映射的属性value上  
7. value取到值进行显示  
## 我喜欢的一些文档
http://cn.redux.js.org/  
https://github.com/happypoulp/redux-tutorial  [TODO示例编写]


For beginners like me to learn the concepts in [Redux](https://github.com/reactjs/redux)

To run this example:

1. [Download this repo](https://github.com/jackielii/simplest-redux-example/archive/master.zip) or `git clone https://github.com/jackielii/simplest-redux-example.git`
2. From the repo folder run:  
   `npm install`
3. `npm start`
4. open [http://localhost:8000/](http://localhost:8000/) in the browser

And also head over to http://redux.js.org/ for some great documentation.

There is also a [webpack](https://github.com/jackielii/simplest-redux-example/tree/webpack) and an [ES5](https://github.com/jackielii/simplest-redux-example/tree/es5) example.
