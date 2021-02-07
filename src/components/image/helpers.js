export const getImagesByResolution = (images, resolution = 'desktop') => {
  const filteredImages = images.filter(image => image.resolution === resolution)
  return filteredImages.length > 0
    ? filteredImages
    : images.filter(image => image.resolution === 'desktop')
}

export const getWebpImages = images => {
  const filteredImages = images.filter(image => image.type === 'webp')
  return filteredImages.length > 0
    ? filteredImages
    : images
}

export const getImageRatio = image => {
  const imagePadding = typeof window !== 'undefined'
    ? (image.height / image.width) * 100 + '%'
    : '100%'
  return imagePadding
}
