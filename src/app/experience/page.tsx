import Link from 'next/link';

const experience = [
  {
    year: '2023 - DATE',
    employer: 'Singapore University of Technology and Design (SUTD), Singapore',
    title: 'Senior Research Fellow'
  },
  {
    year: '2019 - 2023',
    employer: 'University of Engineering and Technology (U-E-T) Lahore, Pakistan',
    title: 'Assistant Professor'
  },
  {
    year: '2011 - 2019',
    employer: 'The University of Lahore, Pakistan',
    title: 'Assistant Professor'
  },
  {
    year: '2010 - 2011',
    employer: 'Lahore University of Management Sciences (LUMS), Pakistan',
    title: 'Research Engineer'
  },
  {
    year: '2008 - 2010',
    employer: 'The University of Lahore, Pakistan',
    title: 'Lecturer'
  },
];


export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Work Experience</h1>
      
      {/*  <div className="bg-white rounded-lg shadow-md p-8 mb-8 space-y-8">   */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-8 mb-8 rounded-lg shadow-md">
        
        
          <p className="text-2xl font-bold tracking-wide text-blue-700 mb-2">Academic Experience</p>

          <div className="space-y-4">
            {experience.map((experience) => (
              <div key={experience.year} className="bg-white rounded-lg border border-blue-100 p-5 shadow-sm">
                
                <div className="flex items-start gap-3">
                    <span className="w-20 sm:w-28 md:w-36 shrink-0 font-semibold">
                      {experience.year}
                    </span> 
                   <div className="flex-1 min-w-0">
                      <h2 className="text-base md:text-lg font-semibold text-gray-900 break-words">            
                        {experience.employer}
                      </h2>
                      <p className="mt-2 text-sm md:text-base text-gray-700 break-words">
                        {experience.title}
                      </p>
                    </div>
                </div>

              </div>
            ))}
          </div>
        </div>

   

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Teaching</h2>
        <p className="text-gray-700 mb-6 italic">
          Throughout my academic career, I have taught a broad spectrum of undergraduate and graduate courses in the Department of Electrical Engineering.
          Selected couses are listed below:        
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg border-2 border-cyan-300 opacity-75">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Undergraduate Courses</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">- Digital Signal Processing</span></li>
              <li><span className="font-semibold">- Communication Systems</span></li>
              <li><span className="font-semibold">- Control Systems</span></li>
              <li><span className="font-semibold">- Digital Systems</span></li>
              <li><span className="font-semibold">- Embedded Systems</span></li>
              <li><span className="font-semibold">- Computer Architecture</span></li>
              <li><span className="font-semibold">- Probability Theory and Random Processes</span></li>
              <li><span className="font-semibold">- Electronic Devices and Circuits</span></li>              
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-lg border-2 border-primary-300 opacity-75">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Graduate Courses</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">- Advanced Computer Architecture</span></li>
              <li><span className="font-semibold">- Stochastic Processes</span></li>
            </ul>
          </div>
        </div>


        <h2 className="text-2xl font-bold text-primary-800 mb-4 mt-6">Research</h2>
        <p className="text-gray-700 mb-6 italic text-justify">
          Throughout my academic career, I have worked across a broad range of research areas. My earlier research focused on intrusion detection systems, signal processing, performance modeling, 
          and the simulation of multicore microprocessor platforms and architectures. My current research work centers on secure cyber-physical systems, maritime cybersecurity, maritime cybersecurity testbeds, 
          and maritime cyber risk management.        
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg border-2 border-cyan-300 opacity-75">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Previous Research Interests</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">- Signal Processing</span></li>
              <li><span className="font-semibold">- Intrusion Detection Systems</span></li>
              <li><span className="font-semibold">- Computer Architecture</span></li>            
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-lg border-2 border-primary-300 opacity-75">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Current Research Interests</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">- Secure Cyber-Physical Systems</span></li>
              <li><span className="font-semibold">- Maritime Cybersecurity</span></li>
              <li><span className="font-semibold">- Maritime Cybersecurity Testbeds</span></li>
              <li><span className="font-semibold">- Maritime Cyber Risk Management</span></li>
            </ul>
          </div>
        </div>




            
    </div>

    

  </div>

  );
}
