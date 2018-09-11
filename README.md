#1. pureComponent, 是什么？和Component相比有什么不一样，什么时候该使用



#2.Context
  这个是提供者和消费者，需要借助React.createContext({}),参数中的值为默认值，也就是当消费者被渲染的时候，没有Provider, 则渲染消费者时候用到的上下文内容就是参数，相当于默认provider。用来解决数据在组件之间传递的问题，不然需要一级一级的从祖父组件到孩子组件传递

  const { Provider, Consumer } = React.createContext();

  <Provider value="">
    <Consumer>
      {
        (value) => {
          //组件内容
        }
      }
    </COnsumer>
  </Provider>


#3.Fragments
  正常来说，父组件需要渲染一个子组件，但子组件也必须要一个外层的div来包裹，如果嵌套层次深的话，会加深dom树的层次，增加渲染的成本，使用fragment则可以不用写外层的div
  fragment语法为： <>    </>, 这种方式不支持属性，例如不支持添加key
  或者使用React.Fragment, 这个可以，实际上<></>是React.Fragment的语法糖


#4.PropTypes
   类型检查，但这个类型只在开发模式下进行价差
   可以声明props中的属性值为某个类型，或者该数值是否是必须的： 类型为基本类型， elemnt:react元素， node：任意可以被渲染的元素， oneOf([]),某些值中的一个， oneOfType: 或者某个类型之一: 指定数组类型，指定对象类型
   另外可以通过defaultProps定义props的默认值，后面可以使用static defaultProps = {}, 这个语法还没通过草案
