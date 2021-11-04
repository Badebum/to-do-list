import React from "react";
import PropTypes from 'prop-types'


const FeedbackOptions = ({options, onLeaveFeedback}) => {
<div>
   { options.map((name, index)=>
    <button
    key={index}
    type="button"
    onClick={()=> onLeaveFeedback({name})}>{name}</button>
    )
    }

    </div>

}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions