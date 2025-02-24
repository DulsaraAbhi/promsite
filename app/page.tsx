import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <header className="flex flex-wrap justify-between items-center w-full p-6 bg-white shadow-md">
        <div className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full mr-3"
          />
          <span className="text-xl font-bold text-blue-600">LunaRest</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#features" className="text-black hover:text-black">
            Features
          </a>
          <a href="#team" className="text-black hover:text-black">
            Technologies
          </a>
          <a href="#research" className="text-black hover:text-black">
            Team
          </a>
          <a href="#technologies" className="text-black hover:text-black">
            Contact Us
          </a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Get Started
        </button>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 text-center p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
          <path d="M20 3v4" />
          <path d="M22 5h-4" />
        </svg>
        <h1 className="text-5xl text-black font-bold mb-4">
          Better Sleep for Better Grades
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A comprehensive sleep quality management platform designed
          specifically for university students. Improve your academic
          performance through better sleep habits.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Start Your Sleep Journey
        </button>
      </main>
      <section id="features" className="w-full max-w-5xl p-6 text-center">
        <h2 className="text-3xl text-black font-bold mb-4 ">Key Features</h2>
        <p className="text-lg text-black mb-8">
          Our platform offers comprehensive tools to help you achieve better
          sleep.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
              <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
              <path d="M6 18a4 4 0 0 1-1.967-.516" />
              <path d="M19.967 17.484A4 4 0 0 1 18 18" />
            </svg>
            <h3 className="text-xl text-black font-semibold mb-2">
              Sleep Quality Prediction
            </h3>
            <p className="text-gray-400">
              Advanced ML algorithms predict your sleep quality based on
              personal metrics.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <h3 className="text-xl text-black font-semibold mb-2">
              Personalized Recommendations
            </h3>
            <p className="text-gray-400">
              Get tailored advice from sleep experts to improve your sleep
              habits.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <h3 className="text-xl text-black font-semibold mb-2">
              Sleep Journal & History
            </h3>
            <p className="text-gray-400">
              Track your sleep patterns and see how they change over time.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
            <h3 className="text-xl text-black font-semibold mb-2">
              Goal Setting & Progress
            </h3>
            <p className="text-gray-400">
              Set sleep goals and track your progress towards better sleep
              habits.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            <h3 className="text-xl text-black font-semibold mb-2">
              Data Analytics Dashboard
            </h3>
            <p className="text-gray-400">
              Visualize your sleep data and identify areas for improvement.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <h3 className="text-xl text-black font-semibold mb-2">
              Lifestyle Management
            </h3>
            <p className="text-gray-400">
              Tools to help you manage your daily routine for optimal sleep.
            </p>
          </div>
        </div>
      </section>
      <section id="team" className="w-full max-w-5xl p-6 text-center">
        <h2 className="text-3xl text-black font-bold mb-4">Our Team</h2>
        <p className="text-lg text-gray-600 mb-8">
          Meet the talented developers behind the Sleep Quality Platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/avatar.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Rusira Sandul</h3>
            <p className="text-gray-400">W2051886 / 20231180</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/avatar.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Fathima Nihla</h3>
            <p className="text-gray-400">W2053085 / 20232264</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/avatar.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-black">
              Dewmi Jayasundara
            </h3>
            <p className="text-gray-400">W2053736 / 20232161</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/avatar.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-black">
              Chalitha T. Wickramasingha
            </h3>
            <p className="text-gray-400">W20521752 / 20231629</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/avatar.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-black">
              Dulsara Abeywardena
            </h3>
            <p className="text-gray-400">W2051887 / 20231183</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/avatar.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Lakindu Perera</h3>
            <p className="text-gray-400">W20518695 / 20231153</p>
          </div>
        </div>
      </section>
      <section id="technologies" className="w-full max-w-5xl p-6 text-center">
        <h2 className="text-3xl text-black font-bold mb-4">Technology Stack</h2>
        <p className="text-lg text-gray-600 mb-8">
          Built with modern technologies for optimal performance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black">Frontend</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Chart.js</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg ">
            <h3 className="text-xl font-semibold mb-2 text-black">Backend</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Spring boot</li>
              <li>PostgreSQL</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black">
              Machine Learning
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Python</li>
              <li>TensorFlow</li>
              <li>Pandas</li>
              <li>NumPy</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black">APIs</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Fitbit API</li>
              <li>Sleep Cycle API</li>
              <li>Google Calendar API</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full max-w-5xl p-6 text-center">
        <h2 className="text-3xl text-black font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-black mb-8">
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>
        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 border border-gray-300 rounded-lg"
            rows={4}
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Send Message
          </button>
        </form>
      </section>

      <footer className="w-full bg-white p-6 mt-12 shadow-md">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600">
            © 2023 Sleep Quality Platform. All rights reserved.
          </p>
          <p className="text-gray-600">Developed by the CS-40 Group.</p>
        </div>
      </footer>
    </div>
  );
}
