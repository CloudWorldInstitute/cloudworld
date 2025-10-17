import React from 'react';
import './StudentsWorkingIn.css'; // 👈 import custom CSS for scroll animations

const StudentsWorkingIn = () => {
  const companies = [
    { name: 'TCS', logo: 'https://asset.brandfetch.io/idK2mWG2SJ/idzXhAFpP5.png' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png' },
    { name: 'HCL Technologies', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HCL_Technologies_logo.svg/2560px-HCL_Technologies_logo.svg.png' },
    { name: 'Tech Mahindra', logo: 'https://download.logo.wine/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.png' },
    { name: 'Cognizant', logo: 'https://download.logo.wine/logo/Cognizant/Cognizant-Logo.wine.png' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png' },
    { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
    { name: 'Mindtree', logo: 'https://companieslogo.com/img/orig/MINDTREE.NS-54bd2372.png' },
    { name: 'L&T', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
    { name: 'GlobalLogic', logo: 'https://images.seeklogo.com/logo-png/51/1/globallogic-logo-png_seeklogo-516422.png' },
    { name: 'KPIT', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/KPIT_Technologies_logo.png' },
    { name: 'FIS', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/FIS_logo.svg' },
    { name: 'IGT Solutions', logo: 'https://mma.prnewswire.com/media/842856/IGT_Solutions_Logo.jpg' },
    { name: 'Cybage', logo: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-76015,resizemode-75,msid-100091399/tech/information-tech/gopikrishnan-konnanath-joins-cybage-software-as-president.jpg' },
  ];

  const companies1 = [
   { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
    { name: 'GlobalLogic', logo: 'https://images.seeklogo.com/logo-png/51/1/globallogic-logo-png_seeklogo-516422.png' },
    { name: 'KPIT', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/KPIT_Technologies_logo.png' },
    { name: 'FIS', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/FIS_logo.svg' },
    { name: 'IGT Solutions', logo: 'https://mma.prnewswire.com/media/842856/IGT_Solutions_Logo.jpg' },
    { name: 'Cybage', logo: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-76015,resizemode-75,msid-100091399/tech/information-tech/gopikrishnan-konnanath-joins-cybage-software-as-president.jpg' },
];



  return (
    <section className="py-16 bg-gradient-to-tr    from-indigo-500 to-violet-600 min-h-screen">
      <div className=" bg-indigo-200 rounded-3xl mx-auto p-4 text-center">
        <h1 className="text-5xl text-primary text-shadow-black font-bold mb-8">Our Students Are Working In</h1>
        <p className="text-2xl mb-12 text-gray-800">
          Discover the top IT companies where our graduates are making an impact.
        </p>

        {/* Scrolling Logos Section */}
        <div className="relative overflow-hidden space-y-5">
          {/* Row 1 - Scroll Right */}
          <div className="flex gap-8 p-7 animate-scroll-right">
            {companies.concat(companies).map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-30 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
              >
                <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 - Scroll Left */}
          <div className="flex gap-8 p-7 animate-scroll-left">
            {companies1.concat(companies1).map((company, index) => (
              <div
                key={index + companies.length}
                className="flex-shrink-0 w-40 h-30 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
              >
                <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsWorkingIn;
