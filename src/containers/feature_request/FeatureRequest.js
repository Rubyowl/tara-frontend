import React, {Component, useState} from 'react';
import style from './FeatureRequest.module.css'
import FeatureRequestInput from "../../components/FeatureRequestInput/FeatureRequestInput";
import Feature from "../../components/Feature/Feature";
import apis from "../../api";
import Post from "../../components/post/post";

class FeatureRequest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requests: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await apis.getAllRequests().then(requests => {
            console.log('insie component di mount ', requests)
            this.setState({
                requests: requests.data,
                isLoading: false,
            })
        })
    }

    render() {
        const reqs = this.state.requests
        return   <div className={style.container}>
            <FeatureRequestInput/>

            <h1 className={style.Heading}>Already requested Features</h1>

            {reqs.length ? (
                reqs.map(item => (
                    <Feature requestTitle={item.requestTitle} requestContent={item.requestContent} requestAnswer={item.requestAnswer}/>
                    )
                )) : (null)
            }
        </div>
    }

}

/*const FeatureRequest = () => {
    return (
        <div className={style.container}>
            <FeatureRequestInput/>

            <h1 className={style.Heading}>Already requested Features</h1>

            <Feature/>
            <Feature/>
            <Feature/>
            <Feature/>
        </div>
    );
};
*/
export default FeatureRequest;
