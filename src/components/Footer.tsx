export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-3">Profiles</h4>
            
            <ul className="space-y-1 text-gray-300 text-sm mb-2">
              <li>
                <a
                  href="https://scholar.google.com/citations?user=dJ-bNLkAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Google Scholar
                </a>
              </li>

              <li>
                <a
                  href="https://orcid.org/0000-0001-8593-8273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ORCID
                </a>
               </li>

              <li>
                <a
                  href="https://sg.linkedin.com/in/drawaisyousaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">
              For collaboration, please contact:
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>
                <a href="mailto:awais_yousaf@sutd.edu.sg" className="hover:text-white transition-colors">
                  awais_yousaf@sutd.edu.sg
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Dr. Awais Yousaf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
