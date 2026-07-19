import Link from 'next/link';

const education = [
  {
    year: '2012 - 2018',
    degree: 'Ph.D. Electrical Engineering - Cyber Security',
    university: 'University of Engineering and Technology (U-E-T) Lahore, Pakistan'
  },
  {
    year: '2008 - 2010',
    degree: 'M.Sc. Electrical Engineering - Telecommunications',
    university: 'University of Engineering and Technology (U-E-T) Lahore, Pakistan'
  },
  {
    year: '2004 - 2008',
    degree: 'B.Sc. Electrical Engineering - Electronics and Communications',
    university: 'University of Engineering and Technology (U-E-T) Lahore, Pakistan'
  },
  {
    year: '2002 - 2004',
    degree: 'F.Sc. Pre-Engineering',
    university: 'Crescent Model Higher Secondary School Lahore, Pakistan'
  },
  {
    year: '2000 - 2002',
    degree: 'Matriculation - Science',
    university: 'Govt. Comprehensive Higher Secondary School Lahore, Pakistan'
  },
];

const theses = [
  {
    deg: 'Ph.D.',
    thesis: 'Asymptotic Intrusion Detection System for Stealthy Intruders'
  },
  {
    deg: 'M.Sc.',
    thesis: 'Jamming of CPM Modem'
  },
  {
    deg: 'B.Sc.',
    thesis: 'Effect of Jamming Techniques on the Performance of Spread Spectrum Systems'
  },
];

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Education</h1>
      
      {/*  <div className="bg-white rounded-lg shadow-md p-8 mb-8 space-y-8">   */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-8 mb-8 rounded-lg shadow-md">
        
          <p className="text-xl font-bold tracking-wide text-blue-700 mb-2">Education</p>

          <div className="space-y-4">
            {education.map((education) => (
              <div key={education.year} className="bg-white rounded-lg border border-blue-100 p-5 shadow-sm">

                <div className="flex items-start gap-3">
                  <span className="w-20 sm:w-28 md:w-36 shrink-0 font-semibold">
                    {education.year}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-base md:text-lg font-semibold text-gray-900 break-words">
                      {education.degree}
                    </h2>

                    <p className="mt-2 text-sm md:text-base text-gray-700 break-words">
                      {education.university}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-green-900 mb-2">Theses</h3>

        <div className="space-y-4">
            {theses.map((theses) => (
              <div key={theses.deg} className="bg-white rounded-lg border border-blue-100 p-5 shadow-sm">
              
                <div className="flex items-center gap-3">
                  <span className="w-20 sm:w-28 md:w-36 shrink-0 font-semibold text-center">
                    {theses.deg}
                  </span>

                  <div>
                    <h2 className="text-lg text-gray-900 break-words">
                      {theses.thesis}
                    </h2>
                  </div>
                </div>
              
              </div>
            ))}
          </div>
        </div>


      </div>
  );
}
