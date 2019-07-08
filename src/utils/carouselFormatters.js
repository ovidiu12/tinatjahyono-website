const carouselFormatters = {
  getAltText: ({ data, index }) => data.caption || `${index + 1}. kép`,

  getNextLabel: ({ currentIndex, views }) =>
    `Mutasd a(z) ${currentIndex + 2}. képet a(z) ${views.length} közül`,
  getPrevLabel: ({ currentIndex, views }) =>
    `Mutasd a(z) ${currentIndex}. képet a(z) ${views.length} közül`,

  getNextTitle: () => "Next Project",
  getPrevTitle: () => "Previous Project",

  getCloseLabel: () => "Close Gallery",
  getFullscreenLabel: ({ isFullscreen }) =>
    isFullscreen ? "Close full screen mode" : "Full screen mode",
}

export default carouselFormatters
