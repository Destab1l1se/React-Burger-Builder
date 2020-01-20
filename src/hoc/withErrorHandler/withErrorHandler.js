import React, {Component} from "react";

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props);

            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });

            this.resInterceptor = axios.interceptors.response.use(null, error => {
                this.setState({error: error});
            });

            this.state = {
                error: null
            };
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        closeModalHandler = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <React.Fragment>
                    <Modal show={!!this.state.error} closeModal={this.closeModalHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props}/>
                </React.Fragment>
            )
        };
    }
};

export default withErrorHandler;