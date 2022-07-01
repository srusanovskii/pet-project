import React from 'react';

type Properties = any;
type States = {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Properties, States> {
  constructor(props: any) {
    super(props);
    this.state = { 
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.log('ERROR!!!!!!!!');
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Произошла ошибка:</h1>
          <span>{this.state.error.message}</span>
        </>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
