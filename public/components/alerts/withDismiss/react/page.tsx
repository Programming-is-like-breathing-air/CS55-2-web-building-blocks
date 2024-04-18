import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { RocketIcon, InfoCircledIcon,CrossCircledIcon,CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../../styles/components/ui/alert"

export function AlertDemo() {
  return (
    <div style={{width: '600px'}}>
    <Alert variant="success">
    <CheckCircledIcon className="h-4 w-4" style={{ color: '#4CAF50' }} />
    <AlertTitle style={{ marginLeft: '0.5rem' }}>Successful alert</AlertTitle>
  <button style={{
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    padding: '0.25rem',
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
  }}>
    {/* 使用适当的关闭图标 */}
    <CrossCircledIcon className="h-4 w-4" style={{ color: '#4CAF50' }} />
  </button>
  </Alert>
    </div>   



  
  )
}
export default AlertDemo;