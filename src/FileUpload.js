import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import FileUploadCSS from './FileUpload.css'
import ProfilePicture from './ProfilePicture'
import {useState} from "react";

const FileUploadComponent = () => {
    const [showDropzone, setShowDropzone] = useState(true);
    const [image, setImage] = useState();
    const fileParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' }
    }
    const onFileChange = ({ meta, file }, status, e) => {
        console.log(status, meta, file)
        setImage(meta.previewUrl)
    }

    const onSubmit = (files, allFiles) => {
        console.log("image in fileUpload:", image)
        setShowDropzone(false)
        if (showDropzone === false)return(
            < ProfilePicture src={image} />
        )
    }
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
            <img className="profile-pic" src={image}/>
        );
    }
};
export default FileUploadComponent;