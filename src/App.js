import React, { useState } from 'react'

export default function App() {
  const [imgSrc, setImgSrc] = useState("")
  const [videoSrc, setVideoSrc] = useState("")
  const [loading, setLoading] = useState(false)


  const handleUploadFile = (image) => {
    setLoading(true)
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "Mail-Chat")
    data.append("cloud_name", "muhammad-bilal")



    // fetch("https://api.cloudinary.com/v1_1/muhammad-bilal/video/upload", {
    fetch("https://api.cloudinary.com/v1_1/muhammad-bilal/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setImgSrc(data.url)
        setLoading(false)
      }).catch((e) => {
        alert("Something went wrong")
        console.error(e)
        setLoading(false)
      })
  }
  const handleUploadVideo = (image) => {
    setLoading(true)
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "Mail-Chat")
    data.append("cloud_name", "muhammad-bilal")



    fetch("https://api.cloudinary.com/v1_1/muhammad-bilal/video/upload", {
      // fetch("https://api.cloudinary.com/v1_1/muhammad-bilal/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setVideoSrc(data.url)
        setLoading(false)
      }).catch((e) => {
        alert("Something went wrong")
        console.error(e)
        setLoading(false)
      })
  }


  return (
    <div className='min-vh-100 d-flex justify-content-center align-items-center flex-column mt-5'>
      {/* Video */}
      <input type="file" onChange={(e) => { handleUploadFile(e.target.files[0]) }} id="inputForPic" className='d-none' />
      <button type="button" className='btn btn-primary rounded-0' disabled={loading} onClick={() => document.getElementById("inputForPic").click()} >{!loading ? "Chose Picture" : <div className='spinner-grow spinner-grow-sm'></div>}</button>

      {/* Video */}
      <input type="file" onChange={(e) => { handleUploadVideo(e.target.files[0]) }} id="inputForVideo" className='d-none' />
      <button type="button" className='btn btn-primary mt-3 rounded-0' disabled={loading} onClick={() => document.getElementById("inputForVideo").click()} >{!loading ? "Chose Video" : <div className='spinner-grow spinner-grow-sm'></div>}</button>


      <h4 className='my-2'>Click Img OR play video to copy url.</h4>


      {!imgSrc ? <></> :
        <div className='card p-2 mt-2'>
          <img src={imgSrc} className="img-fluid" width="200" alt={imgSrc} onClick={() => { window.navigator.clipboard.writeText(imgSrc); alert("Image url is Copied") }} />
        </div>
      }


      {!videoSrc ? <></> :
        <div className='card p-2 mt-2'>
          <video src={videoSrc} width="200" className="img-fluid" controls onPlay={() => { window.navigator.clipboard.writeText(videoSrc); alert("Image url is Copied") }} ></video>
        </div>
      }
    </div>
  )
}
