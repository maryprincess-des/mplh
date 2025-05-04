const images = import.meta.glob("@assets/images/marquees/*.jpg", { eager: true })

const imageArray = Object.values(images).map((mod) => mod.default)

export default imageArray