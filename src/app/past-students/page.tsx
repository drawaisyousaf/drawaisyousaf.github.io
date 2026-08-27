export default function PastStudents() {
  const students = [
    {
      thesis: 'Attacks on Shipboard Alarm Management Subsystems',
      name: 'Chua Lung Chin',
      degree: 'Master of Science in Security by Design (MSSD)',
      university: 'Singapore University of Technology and Design (SUTD)',
      year: '2026',
    },  
    {
      thesis: 'Asset Inventory Tool for IACS UR Compliance Checking Onboard Vessels',
      name: 'Ding Jie Wong',
      degree: 'Master of Science in Security by Design (MSSD)',
      university: 'Singapore University of Technology and Design (SUTD)',
      year: '2025',
    },
    {
      thesis: 'Threat Modeling for Maritime Shipboard Systems',
      name: 'Wong Chee Teck',
      degree: 'Master of Science in Security by Design (MSSD)',
      university: 'Singapore University of Technology and Design (SUTD)',
      year: '2025',
    },
    {
      thesis: 'Likelihood Estimation of Maritime Cybersecurity Events',
      name: 'Sanjay Kumar Sharma',
      degree: 'Master of Science in Security by Design (MSSD)',
      university: 'Singapore University of Technology and Design (SUTD)',
      year: '2025',
    },
    {
      thesis: 'Mitigation and Detection Strategies for Cyber-Induced Control Failures in Maritime Autonomous Systems',
      name: 'Choo Fung Hai',
      degree: 'Master of Science in Security by Design (MSSD)',
      university: 'Singapore University of Technology and Design (SUTD)',
      year: '2025',
    },
    {
      thesis: 'MITRE ATT&CK Matrix for Maritime Cyber Security',
      name: 'Tay Wei Liang Andy',
      degree: 'Master of Science in Security by Design (MSSD)',
      university: 'Singapore University of Technology and Design (SUTD)',
      year: '2024',
    },
    {
      thesis: 'Stealthy Cyber Attacks to an Autonomous Ship',
      name: 'Lee Ling Yi Kalvin',
      degree: 'Master of Science in Security by Design (MSSD)',
      university: 'Singapore University of Technology and Design (SUTD)',
      year: '2023',
    },
    {
      thesis: 'USB Secure: Defending Attacks via USB Ports',
      name: 'Varrey Abhishek',
      degree: 'Master of Science in Security by Design (MSSD)',
      university: 'Singapore University of Technology and Design (SUTD)',
      year: '2023',
    },    
  ];


  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold text-primary-900 mb-8">Past Research Students</h1>

      <div className="space-y-6">
        {students.map((students, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-zinc-50 to-zinc-100 border-l-4 border-zinc-500 rounded-lg shadow-md p-8 mb-8"
          >
            <div className="text-lg font-semibold text-primary-900">
              <h2 className="text-xl font-bold text-primary-800 mb-1">{students.thesis}</h2>
              <h2 className="text-lg text-primary-800 italic font-semibold mb-1">{students.name}</h2>
            </div>
            <p className="text-gray-800 text-base mb-1">{students.degree}</p>
            <p className="text-gray-800 text-base mb-1">{students.university}{", "}{students.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


