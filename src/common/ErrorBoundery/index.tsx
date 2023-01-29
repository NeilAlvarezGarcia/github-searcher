import { Component, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}
  
interface State {
    hasError: boolean;
}

class ErrorBoundery extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return  <h1>We had an error, catched in the boundery</h1>          
        }
        return this.props.children
    }
}

export default ErrorBoundery