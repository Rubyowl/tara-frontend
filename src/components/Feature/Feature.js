import React, {useState} from 'react';
import style from './Feature.module.css'
import { Component } from 'react'
import Answer from "../../components/Feature/Answer";
import apis from "../../api";
class Feature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ìsVisible: false
        }
    }

    handleClick= (x) => {
       // this.setState({isVisible:x })
    }

    render() {
       return  <div className={style.container}>
            <div className={style.header}>
                <div className={style.headerLeft}>
                    <div className={style.headerLeftHeading}>
                        {this.props.requestTitle}
                    </div>
                </div>

            </div>
            <div className={style.FeatureTextContainer} onClick={this.handleClick(!this.state.isVisible)}>
                <div className={style.FeatureText}>
                    {this.props.requestContent}
                </div>
                <div>
                    +
                </div>
            </div>
            <div className={this.state.isVisible? style.FeatureAnswerVisible : style.FeatureAnswerInvisible} onClick={this.handleClick(!this.state.isVisible)}>
                Because of reasons we cannot add your feature and more Bla bla to fill space öykjvaldfbvliadfubvöiuabdflvzbadlfkvbadfjbvaökdfvbladjh
            </div>
           <div>
               {this.props.requestAnswer !== undefined && this.props.requestAnswer.length ? (
                   this.props.requestAnswer.map(item => (
                           <Answer requestContent={ item.answerContent } />
                       )
                   )) : (null)
               }
           </div>
            <div className={style.spacingDiv}/>

        </div>
    }
}
/*const Feature = () => {
    const [isVisible, setIsVisible] = useState(false)

    function handleClick() {
        setIsVisible(!isVisible)
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.headerLeft}>
                    <div className={style.headerLeftHeading}>
                        {this.props.requestTitle}
                    </div>
                    <div className={style.headerLeftDate}>
                        posted On: 22.10.2020 at 15:00
                    </div>
                </div>
                <div className={style.headerRightRejected}>
                    No
                </div>
            </div>
            <div className={style.FeatureTextContainer} onClick={handleClick}>
                <div className={style.FeatureText}>
                    {this.props.requestContent}
                </div>
                <div>
                    +
                </div>
            </div>
            <div className={isVisible? style.FeatureAnswerVisible : style.FeatureAnswerInvisible} onClick={handleClick}>
                Because of reasons we cannot add your feature and more Bla bla to fill space öykjvaldfbvliadfubvöiuabdflvzbadlfkvbadfjbvaökdfvbladjh
            </div>
            <div className={style.spacingDiv}/>
        </div>
    );
}; */

export default Feature;
