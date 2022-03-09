import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import FileUploadCSS from './FileUpload.css'
import ProfilePicture from './ProfilePicture'
import {useState} from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const FileUploadComponent = () => {
    const [showDropzone, setShowDropzone] = useState(true);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const storage = getStorage();
    const storageRef = ref(storage, 'images');

    const fileParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' }
    }
    const onFileChange = ({ meta, file }, status) => {
        console.log(status, meta, file)
        setImage(file)
        console.log("image:", image)
    };


    const onSubmit = (files, allFiles) => {
        console.log("image in fileUpload:", image)
        const imageRef = ref(storage, url);
        setShowDropzone(false)
        if (showDropzone === false)return(
            < ProfilePicture src={image.name} />
        )
    }

/*
    const onSubmit = () => {
        console.log("onSubmitBItch")
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url);
              });
          }
        );
      };
    */

    const getFilesFromEvent = e => {
        return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
                resolve(chosenFiles.map(f => f.fileObject))
            })
        })
    }
    const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
        const textMsg = files.length > 0 ? 'Upload Again' : 'Upload Profile Picture'
        return (
            <label className="btn btn-danger mt-4">
                {textMsg}
                <input
                    style={{ display: 'none' }}
                    type="file"
                    accept={accept}
                    multiple
                    onChange={e => {
                        getFilesFromEvent(e).then(chosenFiles => {
                            onFiles(chosenFiles)
                        })
                    }}
                />
            </label>
        )
    }

    if(showDropzone){
        return (
            <Dropzone
                onSubmit={onSubmit}
                onChangeStatus={onFileChange}
                InputComponent={selectFileInput}
                getUploadParams={fileParams}
                getFilesFromEvent={getFilesFromEvent}
                accept="image/*,audio/*,video/*"
                maxFiles={1}
                inputContent="Drop A File"
                styles={{
                    dropzone: { width: 600, height: 400 },
                    dropzoneActive: { borderColor: 'green' },
                }}
            />
        );
    }else{
        return(
            <img className="profile-pic" src={url}/>
        );
    }
};
export default FileUploadComponent;