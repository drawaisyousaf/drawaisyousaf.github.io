const reviewed_journals = [
    "Transactions on Privacy and Security – ACM",
    "Transactions on Reliability – IEEE",
    "Signal Processing Letters – IEEE",
    "Transactions on Information Forensics & Security – IEEE",
    "International Journal of Information Security – Springer",
];

const reviewed_conf = [
    "29th Information Security Conference (ISC 2026)",
    "4th IEEE LCN Special Track on Maritime Communication and Security (MarCaS 2026)",
    "2nd International Conference on the Design of Cyber-Secure Water Plants (DCS-Water 2025)",
    "10th ACM Cyber-Physical System Security Workshop (CPSS 2024)",
    "17th IEEE International Conference on Cyber, Physical and Social Computing (CPSCom 2024)",
    "1st International Conference on the Design of Cyber-Secure Water Plants (DCS-Water 2024)",
    "5th International Conference on Electrical Engineering (ICEE 2018)",
    "1st International Symposium on Wireless Systems and Networks (ISWSN 2017)",
];

const reviewed_tech_reports = [
    "Liu Ming et al., “Mitigation Technology and Environmental Impact from Ammonia Bunkering Release,” Maritime Energy and Sustainable Development (MESD) Centre of Excellence (CoE) Nanyang Technological University (NTU), Institute of High Performance Computing (IHPC) A*STAR, Tropical Marine Science Institute (TMSI) National University of Singapore (NUS), Singapore, 2026.",
];

const talks = [
  {
    talk_title: 'Introduction of iTrust and MariOT Testbed', 
    talk_info: 'Co-presented with a colleague at Estonian Maritime Academy of Tallinn University of Technology, Estonia, 2025.',
  },
  {
    talk_title: 'Maritime Cybersecurity Risk Assessment Frameworks',
    talk_info: 'Online Seminar, Estonian Maritime Academy of Tallinn University of Technology, Estonia, 2025.',
  },
  {
    talk_title: 'Maritime Cybersecurity and MariOT Testbed',
    talk_info: 'Invited Talk, Norway Singapore Science Week, Singapore, 2025.',
  },
];

export default function Professional_Activities() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Professional Activities</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        
        {/* Conference and Workshops */}
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Conference and Workshop</h2>
        

        <div className="space-y-4 text-gray-700">
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-md w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-1">Program Chair</h4>
              <p>6th International Workshop on Critical Infrastructure and Maritime Systems Security (CIMSS 2026), New York, USA.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-md w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-1">Publication Chair</h4>
              <p>An International Conference on Secure-by-Design for Critical Infrastructure (DCS-CI 2026), Georgia, USA.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-md w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold mb-1">Program Chair</h4>
              <p>11th ACM Cyber-Physical System Security Workshop (CPSS 2025), Ha Noi, Vietnam.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-md w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-semibold mb-1">Registration & Finance Chair</h4>
              <p>19th ACM ASIA Conference on Computer and Communications Security (ACM ASIACCS 2024), Singapore.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-md w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              5
            </div>
            <div>
              <h4 className="font-semibold mb-1">Publication Chair</h4>
              <p>10th ACM Cyber-Physical System Security Workshop (CPSS 2024), Singapore.</p>
            </div>
          </div>

        </div>
      </div>
     {/* Conference and Workshops above! */}

      {/* Invited Talks */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Talks and Presentations</h2>
        <div className="space-y-6">
          {talks.map((talk, index) => (
          <div key={index} className="border-b-2 pb-4 border-grey last:border-b-2">
            <p className="text-gray-700 font-bold text-justify text-lg leading-relaxed">
              {talk.talk_title}{", "}
              <span className="text-gray-700 font-normal italic text-justify text-lg leading-relaxed">
              {talk.talk_info}
              </span>
            </p>
          </div>
          ))}
        </div>    
      </div>
      { /* Invited Talks above! */}

      {/* Reviewer - Journals */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Reviewer - Journals</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {reviewed_journals.map((journals, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{journals}</span>
            </li>
          ))}
        </ul>
      </div>
      { /* Reviewer - Journals above! */}

      {/* Reviewer - Conferences */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Reviewer - Conferences</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {reviewed_conf.map((conferences, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{conferences}</span>
            </li>
          ))}
        </ul>
      </div>
      { /* Reviewer - Conferences above! */}

      {/* Reviewer - Tech Reports */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Reviewer - Technical Reports</h2>
        <ul className="grid md:grid-cols-1 gap-3">
          {reviewed_tech_reports.map((reports, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-justify">{reports}</span>
            </li>
          ))}
        </ul>
      </div>
      { /* Reviewer - Tech Reports above! */}


    </div>
  );
}
