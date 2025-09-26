import React, { useState } from 'react';

const App = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      name: 'High Tech Industries',
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]
    },
    { name: 'Administrative',
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ] },
    { name: 'Construction',
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ] },
    { name: 'Customer Service',
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ] },
    { name: 'Energy' ,
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]},
    { name: 'Financial Services' ,
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]},
    { name: 'Healthcare' ,
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]},
    { name: 'AI / ML',
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ] },
    { name: 'Automotive' ,
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]},
    { name: 'Creative',
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ] },
    { name: 'ERP',
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ] },
    { name: 'Engineering' ,
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]},
    { name: 'Hospitality' ,
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]},
    { name: 'Legal',
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ] },
    { name: 'Manufacturing' ,
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]},
    { name: 'Media & Entertainment' ,
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]},
    { name: 'Sales',
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ] },
    { name: 'Real Estate' ,
      image: 'https://i.ibb.co/6y45sKq/image-6047bd.jpg',
      description: 'Explore limitless opportunities in high-tech industries with us. Your future in innovation starts here',
      list: [
        'Web Developer',
        'Software Development',
        'Information Security Analysts',
        'Database Administrator',
        'Information technology management',
        'User experience design',
        'Computer Systems Analyst',
        'Software engineering',
        'Product Manager',
        'Computer Network Architects',
      ]}
  ];

  const handleToggle = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="yochana-container">
      <style jsx="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .yochana-container {
          font-family: 'Inter', sans-serif;
          background-color: #e6e6fa; /* Light purple background */
          padding: 2rem;
          min-height: 100vh;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-content {
          max-width: 1200px;
          margin-bottom: 2rem;
        }

        .header-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a40; /* Dark text color */
          margin-bottom: 1rem;
        }

        .header-content p {
          font-size: 1rem;
          color: #333;
          line-height: 1.6;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          max-width: 1200px;
          width: 100%;
        }

        .category-item {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease-in-out;
        }

        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 1.1rem;
          color: #444;
          user-select: none;
        }

        .toggle-icon {
          font-size: 1.5rem;
          font-weight: 600;
          color: #444;
          transition: transform 0.3s ease;
        }

        .category-content {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.5s ease-in-out;
        }

        .category-item.expanded .category-content {
          max-height: 1000px; /* A large value to accommodate content */
          padding: 1rem 1.5rem;
        }
        
        .category-item.expanded .category-header {
          border-bottom: 1px solid #ddd;
        }

        .expanded-image {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 1rem;
          max-height: 400px;
        }

        .expanded-description {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          color: #555;
        }

        .expanded-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .expanded-list li {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #555;
        }

        .expanded-list li::before {
          content: '✔';
          color: #007bff; /* Blue checkmark */
          margin-right: 0.5rem;
          font-size: 1.2em;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .yochana-container {
            padding: 1rem;
          }

          .header-content h1 {
            font-size: 1.8rem;
          }

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .category-header {
            font-size: 1rem;
            padding: 0.8rem 1rem;
          }

          .expanded-content {
            padding: 0.8rem 1rem;
          }
        }
      `}</style>

      <div className="header-content" >
        <h1>Yochana – Your Trusted Partner for IT Talent Solutions & Hiring</h1>
        <p>Servicing all sectors and roles Yochana, a top employment firm, can locate the best people for any industry or position using its knowledge, contacts, and network.</p>
      </div>

      <div className="categories-grid" id="allindustries">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-item ${expandedCategory === category.name ? 'expanded' : ''}`}
          >
            <div className="category-header" onClick={() => handleToggle(category.name)}>
              <span>{category.name}</span>
              <span className="toggle-icon">{expandedCategory === category.name ? '-' : '+'}</span>
            </div>
            {category.description && (
              <div className="category-content">
                <img src={category.image} alt={category.name} className="expanded-image" />
                <p className="expanded-description">{category.description}</p>
                <ul className="expanded-list">
                  {category.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
