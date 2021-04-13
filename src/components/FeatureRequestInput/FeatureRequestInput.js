import React from 'react';
import style from './FeatureRequestInput.module.css'
import {Button} from "react-bootstrap";
import apis from "../../api";

class FeatureRequestInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            requestTitle:"",
            requestContent: "",
            requestAnswer: {
                answerId: "",
                answerTitle: "",
                answerContent: ""
            },
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await apis.getAllReleases().then(releases => {
            console.log('insie component di mount ', releases)
            this.setState({
                releases: releases.data,
                isLoading: false,
            })
        })
    }

    updateTitle = (e) => {
        this.setState({
            requestTitle : e.target.value,
        })
    }
    updateContent =  (e) => {
        this.setState({
            requestContent: e.target.value,
        })
    }

    submitRequest = async () => {
        console.log('inside submit request ');
        if(this.state.requestTitle && this.state.requestContent) {
            const payload = {
                requestTitle: this.state.requestTitle,
                requestContent: this.state.requestContent
            }
            await apis.postRequest(payload)
        }
        //this.setState(this.state)
    }

    render() {
       return  <div className={style.container}>
            <h1>Create a new Request</h1>
            <form>
                <div className={style.FormContainer}>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="reason">Test </label>
                        </div>
                        <div className="col-8">
                            <input type="text" id="reason" class="form-control"
                                   value={this.state.requestTitle} onChange={(this.updateTitle)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="cause">Beschreibung </label>
                        </div>
                        <div className="col-8">
                            <textarea id="cause" class="form-control"
                                      value={this.state.requestContent} onChange={(this.updateContent)}/>
                        </div>
                    </div>
                    <div className={style.FormButtonDiv}>
                        <Button type="submit"  onClick={() => this.submitRequest()} >Submit</Button>
                    </div>
                </div>
            </form>

        </div>
    }
}
/*const FeatureRequestInput = () => {
    return (
        <div className={style.container}>
            <h1>Create a new Request</h1>
            <form>
                <div className={style.FormContainer}>
                    <div>
                        <input type="text"/>
                    </div>
                    <div className={style.FormInputDiv}>
                        <textarea className={style.FormInput}  name="describtion" placeholder="Please write your description here"/>
                    </div>
                    <div className={style.FormButtonDiv}>
                        <Button type="submit">Submit</Button>
                    </div>
                </div>
            </form>

        </div>
    );
}; */

export default FeatureRequestInput;
