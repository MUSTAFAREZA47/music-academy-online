import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
                {/* About Us */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        About Us
                    </h2>
                    <p className="text-sm">
                        B1 Music Academy is a premier institution dedicated to
                        teaching the art and science of music. We nurture talent
                        from the ground up, fostering a vibrant community of
                        musicians.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Quick Links
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="hover:text-white transition duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/courses"
                                className="hover:text-white transition duration-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="hover:text-white transition duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Follow Us
                    </h2>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-white transition duration-300 text-xl"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition duration-300 text-xl"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition duration-300 text-xl"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Contact Us
                    </h2>
                    <p className="text-sm">New Delhi, India</p>
                    <p className="text-sm">Delhi 10001</p>
                    <p className="text-sm">Email: info@b1music.com</p>
                    <p className="text-sm">Phone: (123) 456-7890</p>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-center text-xs text-gray-500 pt-8">
                © {new Date().getFullYear()} B1 Music Academy. All rights
                reserved.
            </p>
        </footer>
    )
}

export default Footer
