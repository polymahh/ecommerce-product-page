import Image from "next/image"
import prev from '../public/images/icon-previous.svg'
import next from '../public/images/icon-next.svg'
import styles from '../styles/PreviewImg.module.css'


function PreviewImg() {

  const handleImage =()=>{

  }
  return (
    <div >
        <div className='imageProduct'>
          <div className='pimg'>
          <Image src={'/../public/images/image-product-1.jpg'} alt="p1" width="1000px" height="1000px" />
          </div>

          <div className='prev' >
          <Image src={prev} alt="prev" />
          </div>
          <div className='next' >
          <Image src={next} alt="next" />
          </div>
          <div className="preview">
            <div  onClick={handleImage}>
            <Image src={'/../public/images/image-product-1.jpg'} alt="p1" width="1000px" height="1000px" />
            </div>
            <div onClick={handleImage}>
            <Image src={'/../public/images/image-product-2.jpg'} alt="p2" width="1000px" height="1000px" />
            </div>
            <div onClick={handleImage}>
            <Image src={'/../public/images/image-product-3.jpg'} alt="p3" width="1000px" height="1000px" />
            </div>
            <div onClick={handleImage}>
            <Image src={'/../public/images/image-product-4.jpg'} alt="p4" width="1000px" height="1000px" />
            </div>
          </div>
        </div>
    </div>
  )
}
export default PreviewImg
