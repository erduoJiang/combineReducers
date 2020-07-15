import React from 'react'
import { connect } from 'react-redux'

class ComA extends React.Component {
    handleClick = () => {
        console.log('AA:',this.props)
        this.props.getUsers()
    }
    render() {
        
        return (
            <div>
                <button onClick={this.handleClick}>comA发送一个action</button>
                <div>
                    <div>姓名：{this.props.userName}</div>
                    <div>年龄：{this.props.age}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch({
                type: 'get_users'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComA)