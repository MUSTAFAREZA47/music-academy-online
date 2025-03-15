import Image from 'next/image'

const AboutUs = () => {
    return (
        <section className="bg-black text-white min-h-screen px-6 pt-[200px] pb-[200px]">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
                {/* Left Section - Text */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-red-500 mb-4">
                        Welcome to B1 Music Academy
                    </h2>
                    <p className="text-lg mb-4 leading-relaxed">
                        At{' '}
                        <span className="font-semibold">B1 Music Academy</span>,
                        music is more than just sound—it's a journey. Whether
                        you're a beginner or an aspiring pro, we help you master
                        **instruments, vocals, and performance skills** with
                        expert guidance.
                    </p>
                    <ul className="text-md mb-6 space-y-2">
                        <li>🎸 Learn Guitar, Piano, Drums, Violin & more.</li>
                        <li>
                            🎼 Explore Classical, Jazz, Rock, Pop, and Fusion.
                        </li>
                        <li>🎤 Train in Vocal & Stage Performance.</li>
                    </ul>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-semibold rounded-md transition">
                        Join Us Today!
                    </button>
                </div>

                {/* Right Section - Image */}
                <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                    <Image
                        src="/musician.jpg"
                        alt="B1 Music Academy"
                        width={500}
                        height={350}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutUs
