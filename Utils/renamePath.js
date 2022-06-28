import * as FileSystem from 'expo-file-system'

const renamePath=async (originalPath)=>{
    const fileName=originalPath.split('/').pop()
    const path=FileSystem.documentDirectory+fileName
    await FileSystem.moveAsync({
        from:originalPath,
        to:path
    })
    return path
}

export default renamePath