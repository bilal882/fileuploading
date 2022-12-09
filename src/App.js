import React, { useState } from 'react'

export default function App() {
  const [file, setFile] = useState("")

  const handleUploadFile = () => {
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "Mail-Chat")
    data.append("cloud_name", "muhammad-bilal")

    console.log(data);
    // fetch("https://api.cloudinary.com/v1_1/muhammad-bilal/video/upload", {
    fetch("https://api.cloudinary.com/v1_1/muhammad-bilal/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
      }).catch(e => console.error(e))
  }


  return (
    <>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUploadFile}>Upload</button>
    </>
  )
}
