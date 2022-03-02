/* eslint-disable jsx-a11y/alt-text */

export default function ProfilePicture(props){
  /* Want camera to display if haven't taken a picture, picture if they have */
  /* showInput true, show picture */
  if(props.showInput){
      const picture = props.initialPic
      console.log(picture)
      return(
        <img className="profile-pic"
        src={picture}/>
      )
  }else{
      return(
        <button onClick={props.showCamera}>
            Add a profile picture
        </button>
      )
  }
}