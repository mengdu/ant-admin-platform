import React from 'react'
import {Button, Form, Input, Icon, Checkbox} from 'antd'

class Login extends React.Component{
  state = {
    username: 'Administrator',
    password: '123456',
    isLoding: false
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('user', JSON.stringify(values))
        this.setState({
          isLoding: true
        })
        this.$msg.loading('正在登陆...', 2, () => {
          this.setState({
            isLoding: false
          })
          this.$msg.success('登陆成功')
          this.props.history.push('/admin')
        })
      }
    })
  }
  componentDidMount () {
    this.props.form.setFieldsValue({
      username: this.state.username,
      password: this.state.password
    })
  }
  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div  className="middle-box login-page">

        <div className="m-box login-form blur-0">
          <div className="login-form-wallpaper"></div>
          <div className="text-center"><img src={this.$config.data.logo} width="128" height="128" alt="logo" className="logo" /></div>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              {/*<a className="login-form-forgot" href="">
                Forgot password
              </a>*/}
              <Button className="btn-block btn-lg" type="primary" htmlType="submit" disabled={this.state.isLoding}>Log in</Button>
            </Form.Item>
          </Form>
          
          <div style={{color: '#9fa8b1'}} className="text-center">Antd platform</div>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)
