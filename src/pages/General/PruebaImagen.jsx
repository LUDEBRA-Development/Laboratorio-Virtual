import { useState } from 'react'
import { defaultUrlPath } from '../../models/GlobalVars'
import axios from 'axios'

export function PruebaImagen() {
  const [image, setImage] = useState(null)

  const handleImageChange = event => {
    const selectedImage = event.target.files[0]
    setImage(selectedImage)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (!image) {
      alert('Please select an image.')
      return
    }

    const formData = new FormData()
    formData.append('image', image)

    try {
      const response = await axios.post(`${defaultUrlPath}/api/file`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 200) {
        const responseData = response.data
        console.log(responseData)
        alert('Image uploaded successfully!')
        // Realiza cualquier acción adicional después de subir la imagen
      } else {
        alert('Failed to upload image.')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('An error occurred while uploading the image.')
    }
  }

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input type='file' accept='image/*' onChange={handleImageChange} />
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}
