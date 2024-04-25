import { Component, ErrorInfo } from "react"
import ErrorPage from "../pages/ErrorPage"

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state: Readonly<State> = {
    hasError: false,
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught an error: ", error, errorInfo)

    this.setState({
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />
    }
    return this.props.children
  }
}

export default ErrorBoundary
