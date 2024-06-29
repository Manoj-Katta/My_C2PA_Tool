import React, { useState } from 'react';
import './AddManifest.css';
import badge from '../../assets/badge.svg';
import { useNavigate } from 'react-router-dom';

const AddManifest = () => {

  const Navigate = useNavigate();
  function handleReturnToHomepage(){
    Navigate('/')
  }

  function handleGoToVerifypage(){
    Navigate('/verifyManifest')
  }

  const [galleryItems, setGalleryItems] = useState([]);

  const addGalleryItem = (data) => {
    setGalleryItems((prevItems) => [...prevItems, data]);
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;
    for (let file of files) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const response = await fetch(`http://localhost:8000/upload?name=${file.name}`, {
            method: 'POST',
            headers: {
              'Content-Type': file.type,
            },
            body: e.target.result,
          });
          const body = await response.json();
          addGalleryItem(body);
        } catch (err) {
          console.log(err);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className='container'>
      <h2>Upload and <br /> Add Manifest to Image</h2>
      <input type="file" multiple accept="image/png, image/jpeg" onChange={handleFileChange} />
      <div className="gallery">
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} data={item} />
        ))}
      </div>
      <button className='home' onClick={handleReturnToHomepage}>Return to Homepage</button> 
      <button className='verify' onClick={handleGoToVerifypage}>Verify</button>
    </div>
  );
};

const GalleryItem = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => setShowPopup(true);
  const handleMouseLeave = () => setShowPopup(false);

  const { url, report } = data;
  const manifest = report.manifests[report.active_manifest];

  return (
    <div className="container">
      <img src={url} alt="" className="image" />
      <img src={badge} alt="badge" className="badge" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {showPopup && (
        <div className="popup">
          <h2 className="title">{manifest.title || data.name}</h2>
          <p className="signer">{`Signed By: ${manifest.signature_info?.issuer || ''}`}</p>
          <p className="time">{`Signed On: ${manifest.signature_info?.time ? new Date(manifest.signature_info.time).toLocaleString() : ''}`}</p>
          <p className="producer">{`Produced With: ${manifest.claim_generator?.split(' ')[0].replace(/[_/]/g, ' ')}`}</p>
        </div>
      )}
    </div>
  );
};

export default AddManifest;
