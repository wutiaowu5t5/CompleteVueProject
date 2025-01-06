/*
 * @Description: sourceUrl.js 获取资源地址
 * @Author: 5t5
 * @Time: 2025/1/6 16:38
 */

const compositePicturePath = (pictureName) => {
  return new URL(`@assets/images/${pictureName}`, import.meta.url).href
}

const compositeFontsPath = (name) => {
  return new URL(`@assets/fonts/${name}`, import.meta.url).href
}

const compositeAudiosPath = (name) => {
  return new URL(`@assets/audios/${name}`, import.meta.url).href
}

const compositeVideosPath = (name) => {
  return new URL(`@assets/videos/${name}`, import.meta.url).href
}

export {
  compositePicturePath,
  compositeFontsPath,
  compositeAudiosPath,
  compositeVideosPath
}
