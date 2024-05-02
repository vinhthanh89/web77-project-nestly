export const getAvatarFileName = (avatarUrl) => {
    const parts = avatarUrl.split('/')
    const publicId = parts[parts.length - 2] + '/' + parts[parts.length - 1];
    const fileName = publicId.substring(0, publicId.lastIndexOf('.'));

    return fileName
}