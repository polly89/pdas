import React from 'react'

function ProfileCard({ title, handle }) { // This is equivilant to passing props.title & props.handle.
    return (
    <div> 
        <div> Title is {title} </div>
        <div> Handle s {handle} </div>
    </div>
    );
}
export default ProfileCard