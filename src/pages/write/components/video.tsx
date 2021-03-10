/*
 * @Author: zhangyun
 * @Date: 2021-03-10 14:00:10
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 16:19:47
 * @Desc: 
 */
import React, { useState } from 'react'
// icon
import {VideoTwo} from '@icon-park/react'
// stylesheet
import './video.scss'

function Video () {
  const [filename,setFilename] = useState(null)
  const handleUploadSuccess = (e:any) => {
    e.preventDefault();
    let file = e.target.files[0];
    if (file) {
      setFilename(file.name)
    }
    const fromData:any = new FormData();
    fromData.append('file', file);
    console.log('====', file);
  }
  return (
  <div className="video">
    <div className="text-2xl">上传视频</div>
    <div className="h-40 border-dotted border-4 border-gray-600 text-center rounded-lg">
      <input type="file" className="update-file" name="选择视频" id="targetEle" onChange={handleUploadSuccess}/>
    </div>
  </div>
  )
}

export default Video