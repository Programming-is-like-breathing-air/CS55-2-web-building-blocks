import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 
import { toast } from "../../../../../styles/components/ui/use-toast"; 

function FileUploadLimitSize() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const maxFileSize = 2 * 1024 * 1024; // 2MB in bytes

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      if (file.size > maxFileSize) {
        toast({
          title: "Too large!",
          description: "Please upload fize size less than 2MB",
          duration: 3000,
        });
        setSelectedFileName("");
      } else {
        setSelectedFileName(file.name);
      }
    }
  };

  return (
    <div className="file-upload-wrapper">
      <label htmlFor="file-upload" className="file-upload-label">
        Please upload a file less than 2MB in size:
      </label>
      <input
        type="file"
        id="file-upload4"
        onChange={handleFileChange}
        className="file-upload-input"
        style={{ display: 'none' }}
      />
      <div className="file-upload-control">
        <label htmlFor="file-upload4" className="cursor-pointer">
          <Button asChild variant="outline" size="default">
            <span>Choose File</span>
          </Button>
        </label>
        <span className="file-name px-3">{selectedFileName || 'No file chosen'}</span>
      </div>
    </div>
  );
}

export default FileUploadLimitSize;
