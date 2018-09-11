# 1. Refs的作用和使用
     典型的react组件的数据流是父组件通过props流向子组件
     然而，通过refs可以使子组件暴露给父组件，可以拿到子组件的实例，可以操作子组件，甚至可以更改子组件的state,违背了react state只能由拥有组件管理的原则
     ref可以通过React.createRef()来获取，也可以通过ref回调获取

# 2. Immutable.js
     可以代替shouldComponentUpdate，依靠这个钩子可以判断是不是需要执行update,；借助immutable也可以判断一个对象是不是改变了，一旦这种类型的数据被改变了，会返回一个新的引用

# 3. 高阶组件
