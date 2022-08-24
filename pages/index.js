import Head from 'next/head'
import Image from 'next/image'
import prev from '../public/images/icon-previous.svg'
import next from '../public/images/icon-next.svg'
import plus from '../public/images/icon-plus.svg'
import minus from '../public/images/icon-minus.svg'
import cart from '../public/images/icon-cart-w.svg'
import { useContext, useEffect, useRef, useState } from 'react'
import close from '../public/images/icon-close.svg'
import CartContext from '../CArtContext'



export default function Home() {

  const product = {
    imgs : [
      '/../public/images/image-product-1.jpg',
      '/../public/images/image-product-2.jpg',
      '/../public/images/image-product-3.jpg',
      '/../public/images/image-product-4.jpg'
    ],
    title:'Fall Limited Edition Sneakers',
    price:'125.00',
    quantity:0,

  }
  const {imgs,title,price,quantity} = product

  const {cartArr , setCartArr} = useContext(CartContext)


  let [previewImage,setPreviewImage] = useState(imgs[0])
  let [imgIndex,setImgIndex] = useState(0)
  let [showImage,setShowImage] = useState(false)
  let [qNum,setQNum] = useState(quantity)

  const preview = useRef();
  const bigPreview = useRef();


  const handleImage = (index)=>{
    setImgIndex(index)
  }

  const showToggle = ()=>{
    setShowImage(!showImage)
  }

  const nextImage = ()=>{
      if(imgIndex >= 3){
        setImgIndex(0)
      }else setImgIndex(imgIndex + 1)
  }

  const prevImage = ()=>{
    if(imgIndex <= 0){
      setImgIndex(3)
    }else setImgIndex(imgIndex - 1)
  }

  const quantityAdd = (e) =>{
    if(e.currentTarget.id === 'plus'){
      setQNum(qNum + 1)
    }else if(e.currentTarget.id === 'minus' && qNum != 0){
      setQNum(qNum - 1)
    }
  }

  const addToCart = ()=>{
    const arr =[]
    quantity = qNum == 0 ? 1 : qNum;
    arr.push({ imgs,title,price,quantity})
    setCartArr(arr)

    console.log(cartArr)
  }



  useEffect(()=>{
    preview.current.children[imgIndex].className = 'active'
  },[])

  useEffect(()=>{
    setPreviewImage(imgs[imgIndex])
    const thumbImgs = preview.current.children
    for(let i = 0; i<thumbImgs.length ; i++){
      thumbImgs[i].className = ''
    }
    thumbImgs[imgIndex].className = 'active'
    const bigThumb = bigPreview.current.children
    for(let i = 0; i<bigThumb.length ; i++){
      bigThumb[i].className = ''
    }
    bigThumb[imgIndex].className = 'active'
  },[imgIndex,cartArr])


  const showFalse = {display : 'none'}
  const showTrue = {display :'block'}

  return (
    <div >
      <Head>
        <meta name='keywords' content='ecommerce,best shop,product page'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      </Head>
      <div className='productPreview' style={showImage ? showTrue : showFalse}>
        
        <div className='big-image'>
        <div className='close' onClick={showToggle}>
        <Image src={close} alt="close" />
        </div>
            <div className='big-img'>
            <Image src={previewImage} alt="p1" width="1000px" height="1000px" />
            </div>

          <div className='big-prev' onClick={prevImage}>
          <Image src={prev} alt="prev" />
          </div>
          <div className='big-next' onClick={nextImage} >
          <Image src={next} alt="next" />
          </div>

          <div className="big-preview" ref={bigPreview}>
            {imgs.map((item,index)=>(
              <div  key={index} onClick={()=> handleImage(index)}>
                <Image src={item} alt={index} width="1000px" height="1000px" />
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className='product'>
        <div className='imageProduct'>
          <div className='pimg' onClick={showToggle}>
          <Image src={previewImage} alt="p1" width="1000px" height="1000px" />
          </div>

          <div className='prev' onClick={prevImage}>
          <Image src={prev} alt="prev" />
          </div>
          <div className='next' onClick={nextImage} >
          <Image src={next} alt="next" />
          </div>

          <div className="preview" ref={preview}>
            {imgs.map((item,index)=>(
              <div  key={index} onClick={()=> handleImage(index)}>
                <Image src={item} alt={index} width="1000px" height="1000px" />
              </div>
            ))}
          </div>

        </div>
        <div className='details'>
            <span>SNEAKER COMPANY</span>
            <h2>{title}</h2>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they`&apos;`ll withstand everything the weather can offer.
            </p>

        <div className='price'>
          
          <div className='discount'>
            <div>${price}</div> 
            <small>50%</small>
          </div>
          
          <span>$250.00</span>
        </div>
        <div className='addToCart'>
          <div className='quantity'>
            <div id='minus' onClick={quantityAdd}>
            <Image src={minus} alt="minus" />
            </div>
            <span>{qNum}</span>
            <div id='plus' onClick={quantityAdd}>
            <Image src={plus} alt="plus"/>
            </div>

          </div>
          <div  className='button' onClick={addToCart}>
            <Image src={cart} alt="next" />
              Add to cart
          </div >

        </div>
        </div>
        



      </div>
    </div>
  )
}
