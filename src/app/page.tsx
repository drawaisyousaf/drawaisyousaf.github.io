export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative text-center py-48 text-white min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/Banner_Web.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4">

          <h1 className="text-6xl font-bold mb-8 drop-shadow-lg">
            Dr. Awais Yousaf
          </h1>
          
          <h1 className="text-4xl font-bold mb-8 drop-shadow-lg">
            Senior Research Fellow
          </h1>
        
          <h2 className="text-2xl font-semibold mb-10 drop-shadow-md">
            dr.awaisyousaf@gmail.com
          </h2>

          
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
            {/* Google Scholar Badge */}
            <a
              href="https://scholar.google.com/citations?user=dJ-bNLkAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-8 py-6 rounded-lg shadow-lg bg-opacity-90 backdrop-blur-sm w-full max-w-xs transform hover:scale-105 transition-transform flex flex-col justify-center"
            >
              <p className="font-semibold text-lg mb-2"></p>
              <p className="text-3xl font-bold mb-3">Google Scholar</p>
            </a>

            {/* LinkedIN Badge */}
            <a
              href="https://sg.linkedin.com/in/drawaisyousaf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-8 py-6 rounded-lg shadow-lg bg-opacity-90 backdrop-blur-sm w-full max-w-xs transform hover:scale-105 transition-transform flex flex-col justify-center"
            >
              <p className="font-semibold text-lg mb-2"></p>
              <p className="text-3xl font-bold mb-3">LinkedIn</p>
            </a>


            {/* ORCID Badge */}
            <a
              href="https://orcid.org/0000-0001-8593-8273"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-8 py-6 rounded-lg shadow-lg bg-opacity-90 backdrop-blur-sm w-full max-w-xs transform hover:scale-105 transition-transform flex flex-col justify-center"
            >
              <p className="font-semibold text-lg mb-2"></p>
              <p className="text-3xl font-bold mb-3">ORCID</p>
            </a>

          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center"> 

            {/* Photo */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <img
                src="/Awais.jpg"
                alt="Dr. Awais Yousaf"
                className="w-48 h-60 object-cover rounded-lg shadow-md border-2 border-primary-200"
              />
            </div>

            {/* Biography */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary-900 mb-1">
                Biography
              </h3>
              
              <p className="mb-4 text-justify text-lg">
              Dr. Awais Yousaf is a Senior Research Fellow at iTrust, Singapore University of Technology and
              Design (SUTD), Singapore. He completed his B.Sc., M.Sc., and Ph.D. in Electrical Engineering
              from the University of Engineering and Technology (UET) Lahore, Pakistan, in 2008, 2010,
              and 2018 respectively. His prior research has focused on secure cyber-physical systems,
              intrusion detection systems, signal processing for defense, and performance modeling and
              simulation of multicore microprocessor platforms and architectures. His current research
              interests include maritime cybersecurity, maritime cybersecurity testbeds, and maritime
              cyber risk management.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-3xl font-bold text-primary-900 mb-6">News</h3>
          <ul className="space-y-4">

            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">July 16, 2026</span>
              <span>
                <a
                  href="https://www.linkedin.com/pulse/charting-safer-seas-how-singapore-building-worlds-first-industry-grade-51dnc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-700 hover:underline"
                >
                  MariOT
                </a>
                {" – "}
                <span className="text-gray-700">
                  World's First Industry-Grade Maritime Cybersecurity Testbed
                </span>
              </span>
            </li>

            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">July 13, 2026</span>
              <span className="text-gray-700">Personal website is launched</span>
            </li>


          </ul>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/more" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-600">
            <h4 className="text-xl font-bold text-primary-900 mb-2">Entrepreneurships</h4>
            <p className="text-gray-600">MIT Enterprise Forum Pakistan – Startup School 2017</p>
          </a>
          <a href="/more" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-600">
            <h4 className="text-xl font-bold text-primary-900 mb-2">Memberships</h4>
            <p className="text-gray-600">Professional Engineer - Telecommunication Engineering</p>
          </a>
          <a 
            href="https://www.sutd.edu.sg/profile/awais-yousaf" 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="text-xl font-bold text-primary-900 mb-2">Affiliation</h4>
            <p className="text-gray-600">iTrust, Singapore University of Technology and Design (SUTD)</p>
          </a>
        </div>
      </section>
    </div>
  );
}
