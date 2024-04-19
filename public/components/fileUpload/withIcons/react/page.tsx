import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "../../../../../styles/components/ui/button"; 

function FileUploadwithIcon() {
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : "No file chosen");
  };

  return (
    <div className="file-upload-wrapper">
      <input
        type="file"
        id="file-upload-with-icon"
        onChange={handleFileChange}
        className="file-upload-input"
        style={{ display: 'none' }} 
      />
      <div className="file-upload-control flex items-center gap-2"> 
        <label htmlFor="file-upload-with-icon" className="cursor-pointer">
          <Button asChild variant="outline" size="default">
            <span className="flex items-center gap-2"> 
              <Upload className="file-upload-icon" /> 
              <span>Choose File</span>
            </span>
          </Button>
        </label>
        <span className="file-name px-3">{selectedFile}</span>
      </div>
      {selectedFile && (
        <div className="file-display-container mt-4">
          <Button variant="default">Upload File</Button>
        </div>
      )}
    </div>
  );
}

export default FileUploadwithIcon;
