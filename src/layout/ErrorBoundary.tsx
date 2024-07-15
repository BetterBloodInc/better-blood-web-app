import React from 'react'
import { Link } from 'react-router-dom'

export class ErrorBoundary extends React.Component<
  {
    history: any
    children: React.ReactNode
  },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  handleReload = () => {
    this.setState({ hasError: false })
    this.props.history.push('/')
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={this.handleReload}>Go Home</button>
        </div>
      )
    }

    return this.props.children
  }
}
