import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Replace with the actual path

function FileUploadComponent() {
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : "");
  };

  return (
    <div className="file-upload-wrapper">
      <div className="file-upload-content">
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          className="file-upload-input"
          style={{ display: 'none' }} // Hide the default input
        />
        <div className="file-upload-control">
          <Button asChild variant="outline" size="default" onClick={() => document.getElementById('file-upload').click()}>
            <span>Choose File</span>
          </Button>
          <span className="file-name px-3">{selectedFile || 'No file chosen'}</span>
        </div>
      </div>
      {selectedFile && (
        <div className="file-display-container mt-4">
          <Button variant="default">Upload File</Button>
        </div>
      )}
    </div>
  );
}

export default FileUploadComponent;
