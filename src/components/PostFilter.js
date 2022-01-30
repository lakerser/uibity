import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./select/mySelect";

const PostFilter = (props) => {
    return (
        <div>
            <div>
                <MyInput
                    value={props.filter.query}
                    onChange={e => props.setFilter({...props.filter,query: e.target.value})}
                    placeholder="Search"
                />
                <MySelect
                    value={props.filter.sort}
                    onChange={selectedSort => props.setFilter({...props.filter, sort: selectedSort})}
                    defaultVaulue="Sort"
                    options={[
                        {value: 'title', name: 'By name'},
                        {value: 'body', name: 'By description'}
                    ]}
                />
            </div>
        </div>
    );
};

export default PostFilter;