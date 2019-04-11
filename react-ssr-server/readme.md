#  服务端渲染流程
1. 服务器接收到请求，redux中的store是空的
2. 渲染home组件时，componentDidMount这个生命周期函数在服务器端不执行，所以html中要渲染的redux中获取的数组一直是空的
3. 客户端加载index.js运行，这个store依然是空的
4. 加载home组件，componentDidMount这个生命周期函数是可以在客户端执行的，列表数据被获取
5. store中的列表数据被更新
6. 客户端渲染出store中数据对应的列表内容

