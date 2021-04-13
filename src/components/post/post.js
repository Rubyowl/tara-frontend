import React, {useState} from 'react';
import style from './post.module.css'
import {useEffect} from "react";
import {Accordion, Card} from "react-bootstrap";
const Post = ({header, date, text}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [releases, setReleases] = useState([])

    function handleClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        return () => {
            console.log('inside post use effect ', header)
        };
    }, [header]);

    return (
        <div>
            <div className={isOpen ? style.container_open : style.container_collapsed} onClick={handleClick}>
            <div className={style.header}>
                {header}
            </div>
            <div className={style.date}>
                {date}
            </div>
            <div className={style.text}>
                {text}
            </div>
        </div>
        </div>
    )
};

export default Post;
