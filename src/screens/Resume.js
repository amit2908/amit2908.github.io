import React from 'react';
import DownloadIcon from '@material-ui/icons/GetApp';

function Resume() {
    return (
        <div className='Page-container' >
        <div className='Page-container-vertical'>
           <embed src="https://resume.creddle.io/resume/i1kb2oku7y4" width="850px" height="1300px" />
           <div className='App-button' style={{margin: 30}}><DownloadIcon /><a href="https://ufile.io/96ufqojn" target="_blank" download>Download</a></div>
        </div>
        </div>
    );
}
  
export default Resume;