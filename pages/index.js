import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useRef } from "react";
import * as axios from 'axios';
import { useRouter } from "next/router";


export default function Home() {
  
 

  const [message, setMessage] = useState('');
  const [orderId, setOrderId] = useState('');

  const handleOrderCancellation = async (e) => {
    console.log('orderId', orderId)
    const { data } = await axios.default.delete(`https://shipping-one.vercel.app/api/shipments/${orderId}`, {
      
    });
    if (data) {
      setMessage(`Success! : ${data.id}`);
    }
  };

  const handleOrderStatus = async (e) => {
    const { data } = await axios.default.get(`https://shipping-one.vercel.app/api/shipments/${orderId}`, {
      
    });
    if (data) {
      setMessage(`Success! : ${data.id}`);
    }
  };
  

  return (
    <div className={styles.container}>
      <Head>
        <title>shipment</title>
        
       
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a > rabbit mart</a> 
        </h1>

        <p className={styles.description}>
          Get started by tracking your order 
          <input 
            type="text"
            placeholder="Search.."
            id = "searchbox"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button
              className="border p-2 mb-8 border-black shadow-offset-lime w-2/3 font-bold"
              onClick={(e) => handleOrderStatus(e)}
            >
              check order status
            </button>
          <button
              className="border p-2 mb-8 border-black shadow-offset-lime w-2/3 font-bold"
              //onClick={(e) => handleOrderCancellation (e)}
              onClick={(e) => handleOrderCancellation(e)}
            >
              Cancel Order
            </button>
        </p>
  
        
    

        <div className={styles.grid}>
          <a href="https://www.facebook.com/"  className={styles.card}>
            <h2> Home &rarr;</h2>
            <p></p>
          </a>

          
          
            <div>
            <span className="text-red-600 leading-7 font-bold mt-3">
              {message}
            </span>
          </div>
            
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
