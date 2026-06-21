import review from '../../../assets/customer-top.png'
const Header = () => {
    return (
        <div className='text-center flex flex-col items-center my-10 mb-24'>
            <img src={review} alt="customer-top" className='w-60 h-fit'/>
            <h2 className='text-2xl font-bold text-secondary'>What our customers are sayings</h2>
            <p className='text-secondary/40'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>
    );
};

export default Header;