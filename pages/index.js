import Head from 'next/head'
import Image from 'next/image'
import prev from '../public/images/icon-previous.svg'
import next from '../public/images/icon-next.svg'
import plus from '../public/images/icon-plus.svg'
import minus from '../public/images/icon-minus.svg'
import cart from '../public/images/icon-cart-w.svg'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Ecommerce Product page</title>
        <meta name='keywords' content='ecommerce,best shop,product page'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      </Head>
      <div className='product'>
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
            <div>
            <Image src={'/../public/images/image-product-1.jpg'} alt="p1" width="1000px" height="1000px" />
            </div>
            <div>
            <Image src={'/../public/images/image-product-2.jpg'} alt="p2" width="1000px" height="1000px" />
            </div>
            <div>
            <Image src={'/../public/images/image-product-3.jpg'} alt="p3" width="1000px" height="1000px" />
            </div>
            <div>
            <Image src={'/../public/images/image-product-4.jpg'} alt="p4" width="1000px" height="1000px" />
            </div>
          </div>
        </div>
        <div className='details'>
            <span>SNEAKER COMPANY</span>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they`&apos;`ll withstand everything the weather can offer.
            </p>

        <div className='price'>
          
          <div className='discount'>
            <div>$125.00</div> 
            <small>50%</small>
          </div>
          
          <span>$250.00</span>
        </div>
        <div className='addToCart'>
          <div className='quantity'>
            <div>
            <Image src={minus} alt="minus" />
            </div>
            <span>0</span>
            <div>
            <Image src={plus} alt="plus"/>
            </div>

          </div>
          <div className='button'>
            <Image src={cart} alt="next" />
              Add to cart
          </div >

        </div>
        </div>
        



      </div>
    </div>
  )
}
