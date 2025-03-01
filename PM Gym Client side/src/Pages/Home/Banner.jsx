
import banner from '../../assets/Banner.avif';
const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${banner})`}} className='w-full h-[400px] bg-cover  object-fit '>
            
        </div>
    );
};

export default Banner;