function Footer() {
    return (


        <footer className="bg-primary shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-text">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="src\assets\logo.svg" className="h-8" alt="Logo" />
                        <span className="self-center text-3xl whitespace-nowrap font-display">Indie Game Hub</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-md font-medium  sm:mb-0 font-body">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-secondary lg:my-8" />
                <span className="block text-sm sm:text-center font-body">© 2024 <a href="#" className="hover:underline">Indie Game Hub™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
export default Footer;