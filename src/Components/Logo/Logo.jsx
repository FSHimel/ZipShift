import logo from '../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="logo" />
            <p className='text-3xl font-bold -ms-2.5'>ZapShift </p>
        </div>
    );
};

export default Logo;