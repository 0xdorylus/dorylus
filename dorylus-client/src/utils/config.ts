export function getFileUploadUrl() {

    return localStorage.getItem("0xbot_file_upload_url") || "https://0xbot.org/apis/Fs/Index/uploadFile"
   
}

export function getImageUploadUrl() {

    return localStorage.getItem("0xbot_image_upload_url") || "https://api.dorylus.ai/upload"
   
}

export function getWssUrl() {
    return localStorage.getItem("0xbot_wss_url") || "wss://api.dorylus.ai/wss"

}

  