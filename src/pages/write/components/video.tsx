/*
 * @Author: zhangyun
 * @Date: 2021-03-10 14:00:10
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 16:44:40
 * @Desc: 
 */
import React, { useState } from 'react'
// icon
import {VideoOne} from '@icon-park/react'
// stylesheet
import './video.scss'

function Video () {
  const [filename,setFilename] = useState(null)
  const handleUpload = () => {
    const el:any = document.getElementById('targetEle')
    el.click()
  }
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
    <input type="file" className="update-file" id="targetEle" onChange={handleUploadSuccess}/>
    <div className="w-64 h-40 border-dotted border-4 border-gray-600 text-center rounded-lg" onClick={handleUpload}>
      <div className="text-lg bg-green-600 flex justify-center w-28 my-2 py-1 margin-center text-white rounded-full cursor-default vide-btn">
        <VideoOne theme="outline" size="26" fill="#fff" strokeLinecap="square"/>上传视频
      </div>
      <div>{filename}</div>
      <div className="text-xs text-red-400">建议大小不超过1GB</div>
    </div>
  </div>
  )
}

export default Video