import React, {useState} from 'react';
import style from './changelog.module.css'
import Post from "../../components/post/post";
import {Accordion, Card} from "react-bootstrap";

import apis from  '../../api'
import {useEffect} from 'react'

import { Component } from 'react'

class Changelog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            releases: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await apis.getAllReleases().then(releases => {
            console.log('insie component di mount ')
            this.setState({
                releases: releases.data,
                isLoading: false,
            })
        })
    }

    render() {
        const relses = this.state.releases
         return  <div>
        <div className={style.headerStyle}>
            <h1>
                cMatrix Releases
            </h1>

        </div>
        <div className={style.container}>
            <div className={style.container_changelog}>
                {relses.length ? (
                    relses.map(item => (
                            <Post header={item.blogTitle} date={item.date} text={item.blogContent}></Post>
                        )
                    )) : (null)
                }
        </div>

            </div>
        </div>
    }
    }


/*const Changelog =  () => {
    const [releases, setReleases] = useState([])
    var rows = []
    useEffect(() => {
        return async () => {
            await apis.getAllReleases().then((releases) => {
                console.log('yay got releases', releases)
                setReleases({
                    releases: releases.data
                })
                releases.data.map(release => {
                    console.log("inside mp function ", release)
                    rows.push(<Post header={release.blogTitle} date={release.date}
                                    text={release.blogContent}></Post>)
                })
            })
        }});


    return (
        <div>
        <div className={style.headerStyle}>
            <h1>
                cMatrix Releases
            </h1>

        </div>
        <div className={style.container}>
            <div className={style.container_changelog}>
                {releases.length ? (
                    releases.map(item => (
                            <Post header={item.blogTitle} date={item.date} text={item.blogContent}></Post>
                        )
                    )) : (null)
                }
        </div>
            <div className={style.navigation_right}>
                <NavigationRight/>
            </div>
            </div>
        </div>


    )
} */

export default Changelog
