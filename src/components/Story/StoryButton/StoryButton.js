import React from 'react';

import classes from './StoryButton.module.css';

const StoryButton = (props) => {
    let classList = [classes.StoryButton];
    props.option ? classList.push(classes.Option) : classList.push(classes.Story)
    return (
        <div className={classList.join(' ')} data-id={props.id} onClick={props.clickHandler} data-associatedscene={props.associatedScene}>
            {props.title ? <h3 data-id={props.id} data-associatedscene={props.associatedScene}>{props.title}</h3> : null}
            {props.title ? <hr /> : null}
            {props.description ? <i data-id={props.id} data-associatedscene={props.associatedScene}>{props.description}</i> : null}
            {props.children}
        </div>)
}

export default StoryButton;