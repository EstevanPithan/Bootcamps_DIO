import React, { Component } from 'react'

class Twitter extends Component {
  componentDidMount() {
    const { posts, loading } = this.props
    console.log('componentDidMount', posts)
    console.log('componentDidMount', loading)
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: fui removido')
  }

  render() {
    const { posts } = this.props
    console.log('render', posts)
    return <div> test </div>
  }
}

export default Twitter
