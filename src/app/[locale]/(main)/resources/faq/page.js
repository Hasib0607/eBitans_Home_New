import Image from 'next/image';
import banner from "@/assets/images/webBanner/faq.webp"
import styles from "@/components/home/home.module.css"
import FaqContent from '@/components/faq/FaqContent';
import Registration from '@/components/pricing/Registration';

export const metadata = {
  title: "FAQ",
  description: "Here, we aim to answer your most frequently asked questions about using the Ebitans platform and launching your e-commerce journey in Bangladesh. If you can't find your specific question here, feel free to contact our friendly support team.",
};


const Faq = ({ params: { locale } }) => {
  const bangla = locale !== "en"

  return (
    <div className='relative z-[1] bg-[#F9F7F6]'>
      
      <div className='container px-5 lg:px-10 sm:pt-[100px] pt-[65px] relative z-[1]'>
               <div className="relative flex justify-center items-center">
                    <Image width={500} height={500} src={banner} alt="career image" className="w-full h-auto rounded-lg border-white border-2" />
                    <h1 className={`${styles.archivo} absolute z-[1] text-gray-800 tracking-[15px] text-xl lg:text-4xl mt-[-120px]`}>{bangla ? "eBitans সম্পর্কে কিছু কথা" : "Full Fill Your Curiosity"}</h1>
                    <h1 className={` ${styles.archivo} absolute z-[1] text-gray-200 font-bold tracking-[15px] text-2xl lg:text-6xl`}>{bangla ? "টার্মস এবং কন্ডিশনস" : "FAQ"}</h1>
                </div>
      </div>
      <FaqContent />
      <div className='container px-5 lg:px-10'>
        <Registration />
      </div>
    </div>
  );
};

export default Faq;