import React from 'react'
import { connect } from 'react-redux'

class ComB extends React.Component {
    handleClick = () => {
        this.props.getPro()
    }
    handleList = () => {
        if(!this.props.proList) return null
        console.log('BB:',this.props)
        return this.props.proList.map((item) => {
            return (
                <div key={item.name}>
                    <div>
                        商品名：{item.name}
                    </div>
                    <div>
                        价格：{item.price}
                    </div>
                </div>
            )
        })
    }
    render() {
        
        return (
            <div>
                <button onClick={this.handleClick}>ComB发送一个action,获取商品列表</button>
                <div>商品列表：
                    {this.handleList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.pro
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPro: () => {
            dispatch({
                type: 'get_proList'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComB)