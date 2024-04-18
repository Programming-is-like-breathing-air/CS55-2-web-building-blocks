import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 

function FileUploadMutiple() {
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 安全检查确保 files 不是 null
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const fileNames = files.map((file) => file.name);
      setSelectedFileNames(fileNames);
    } else {
      setSelectedFileNames([]);
    }
  };

  const fileNamesString = selectedFileNames.join(", ") || "No file chosen";

  return (
    <div className="file-upload-wrapper">
      <input
        type="file"
        id="file-upload3"
        onChange={handleFileChange}
        className="file-upload-input"
        style={{ display: 'none' }}
        multiple // 允许选择多个文件
      />
      <div className="file-upload-control">
        <label htmlFor="file-upload3" className="cursor-pointer">
          <Button asChild variant="outline" size="default">
            <span>Choose Files</span>
          </Button>
        </label>
        <span className="file-name px-3">{fileNamesString}</span>
      </div>
    </div>
  );
}

export default FileUploadMutiple;
