import React, { ChangeEvent, FC, useRef } from 'react';

interface FileUploadProps {
    setFile: Function
    accept: string
}

export const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {

    const input = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0]);
    }

    return (
        <div onClick={() => input.current?.click()}>
            <input
                onChange={handleChange}
                type="file"
                accept={accept}
                ref={input}
                style={{ display: 'none' }}
            />
            {children}
        </div>
    )
}
