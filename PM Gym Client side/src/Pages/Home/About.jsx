import about from '../../assets/Gym-amico.svg';

const About = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-6 px-16 mx-auto'>
                <div>
                    <img src={about} className='w-4/5 mx-auto' alt="" />
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <h1 className='text-4xl font-bold'>🏋️ Welcome to PM GYM center – Powering Your Fitness Goals!</h1>
                    <p>At PM GYM, we believe that fitness is not just about lifting weights—it's about building strength, confidence, and a healthier lifestyle. Established in [Year], our gym has been dedicated to helping individuals of all fitness levels achieve their goals through expert guidance, cutting-edge facilities, and a supportive community.</p>
                </div>
            </div>
        </div>
    );
};

export default About;