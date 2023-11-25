import { FriendListItem } from "./FriendsListItem/FriendListItem"
import css from "./FriendList.module.css"


export const FriendList = ({ friends }) => {
  // console.log(friends)
  return (
    <div className={css.friends}>
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
 </div>
  )
}
