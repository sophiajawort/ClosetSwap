import {useState} from 'react';
import storage from './firebase';

function ImageUpload(){
  const [image , setImage] = useState('');
  function upload(){
    if(image == null)
      return;
    storage.ref(`/images/${image.name}`).put(image)
     .on("state_changed" , alert("success") , alert);
  }
  return (
    <div className="ImageUpload">
        <p>Hello help me</p>
        <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
        <button onClick={upload}>Upload</button>
    </div>
  );
}

export default ImageUpload;