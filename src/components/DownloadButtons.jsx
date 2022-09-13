import React from 'react'

function DownloadButtons() {
    const downloadImgStyle = "border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem] mr-[1rem]"
  return (
    <div className="download">
        <div className="download_images flex">
            <img src={require('../assets/appStore.png')} alt="app-store" className={downloadImgStyle}/>
            <img src={require('../assets/googlePlay.png')} alt="play-store" className={downloadImgStyle}/>
        </div>
    </div>
  )
}

export default DownloadButtons