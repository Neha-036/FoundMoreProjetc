import React, { useState } from 'react'
import { Upload, Button, Icon, message } from 'antd'

const Import = ({ handleUpload, buttonDisabled }) => {
  const [fileList, setFileList] = useState([])
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Upload
        fileList={fileList}
        beforeUpload={file => {
          setFileList([file])
          return false
        }}
        onRemove={() => setFileList([])}
        accept="application/zip"
      >
        <Button>
          <Icon type="upload" /> Select a file
        </Button>
      </Upload>
      <Button
        type="primary"
        onClick={async () => {
          try {
            setLoading(true)
            await handleUpload(fileList[0])
            setFileList([])
            message.success('Upload succeeded')
          } catch (e) {
            message.error(JSON.stringify(e))
          }
          setLoading(false)
        }}
        disabled={fileList.length === 0 || buttonDisabled}
        loading={loading}
        style={{ marginTop: 16 }}
      >
        {loading ? 'Uploading' : 'Start Upload'}
      </Button>
    </>
  )
}

export default Import
