import React from 'react';
import { connect } from 'react-redux';
import { updateRelationship } from '../store';

const FriendRequests = (props) => {
  const { user, relationships, users, updateRelationship, auth } = props;

  if(!user || !relationships) return null

  const pendingFriends = relationships.filter((rel) => rel.recipientId === user.id && rel.status === 'pending')

  return (
    <div>
      {pendingFriends.length} Friend Requests
      <ul>{pendingFriends.map(pending=>{
        const friend = users.find(user=> user.id === pending.senderId)
        return(
          <li key={pending.id}>
            {friend?.username} wants to be your friend!
            <button onClick={()=>updateRelationship(pending.senderId, auth.id, 'accept')}>Accept</button>
            <button onClick={()=>updateRelationship(pending.senderId, auth.id, 'decline')}>Decline</button>
          </li>
        )
      })}</ul>
    </div>
  )
};

const mapDispatch = (dispatch) =>{
  return{
    updateRelationship: (recipientId, senderId, acceptDecline) =>{
      dispatch(updateRelationship(recipientId, senderId, acceptDecline))
    }
  }
}

export default connect((state) => state, mapDispatch)(FriendRequests);
