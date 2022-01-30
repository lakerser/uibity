import React from 'react';

const MySelect = (props) => {
    return (
        <select onChange={ev=> props.onChange(ev.target.value)} value={props.value}>
            <option disabled value="">{props.defaultVaulue}</option>
            {props.options.map(option=>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;