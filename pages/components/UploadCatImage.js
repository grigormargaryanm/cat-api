import Image from 'next/image'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useUploadImageMutation } from '../../redux/cats/api/catsApi'
import UploadSvg from '../../asstes/upload.svg'
import { useEffect } from 'react'

const UploadCatImage = () => {
    const [uploadImage, { data, error }] = useUploadImageMutation()
    const handleFileInput = (e) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        uploadImage(formData)
    }

    useEffect(() => {
        if (data) {
            NotificationManager.success(
                'You have successfully added a cat photo.',
                'Success'
            )
        } else if (error) {
            NotificationManager.error('Something went wrong.', 'Oops')
        }
    }, [data, error])

    return (
        <div className="flex items-center justify-center w-full mt-12">
            <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-96 h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Image
                        src={UploadSvg}
                        alt="upload"
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Upload Cat Photo</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG or GIF
                    </p>
                </div>
                <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileInput}
                    accept=".png,.jpg,.gif"
                />
            </label>
            <NotificationContainer />
        </div>
    )
}

export default UploadCatImage
