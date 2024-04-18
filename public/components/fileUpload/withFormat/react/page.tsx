import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 
import { toast } from "../../../../../styles/components/ui/use-toast"; 

function ImageUploadComponent() {
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].type.startsWith('image/')) {
        setSelectedFileName(event.target.files[0].name);
      } else {
        // 如果不是图片类型，使用 toast 函数显示错误消息
        toast({
          title: "Error",
          description: "Please select an image file!",
          duration: 3000,
        });
        setSelectedFileName("");
      }
    }
  };

  return (
    <div className="image-upload-wrapper">
      <label htmlFor="image-upload" className="image-upload-label">
        Please upload an image:
      </label>
      <input
        type="file"
        id="image-upload"
        onChange={handleFileChange}
        className="image-upload-input"
        style={{ display: 'none' }}
        accept="image/*"
      />
      <div className="image-upload-control">
        <label htmlFor="image-upload" className="cursor-pointer">
          <Button asChild variant="outline" size="default">
            <span>Choose File</span>
          </Button>
        </label>
        <span className="image-file-name px-3">{selectedFileName || 'No file chosen'}</span>
      </div>
    </div>
  );
}

export default ImageUploadComponent;
