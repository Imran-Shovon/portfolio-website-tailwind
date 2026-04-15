import { Link } from 'react-router-dom';

export default function MyWork() {
  const projects = [
    {
      title: 'Dosevana by Thrivewell',
      type: 'Website',
      img: '/images/slimup.png',
      link: 'https://nexgenmdscientific.com/',
      bgClass: 'bg-blue-200',
    },
    {
      title: 'Dosevana by Thrivewell',
      type: 'Website',
      img: '/images/dosevana2.png',
      link: 'https://nexgenmdscientific.com/',
      bgClass: 'bg-purple-200 flex justify-center',
      imgClass: 'block mx-auto',
    },
    {
      title: 'DocMedilink',
      type: 'Website',
      img: '/images/docmedicLink.png',
      link: 'https://nexgenmdscientific.com/',
      bgClass: 'bg-green-200',
    },
    {
      title: 'Epiq Script',
      type: 'SaaS - Health Tech',
      img: '/images/epiqScript.png',
      link: 'https://nexgenmdscientific.com/',
      bgClass: 'bg-green-300',
    },
    {
      title: 'NexGen Scientific',
      type: 'Website',
      img: '/images/nexgen.png',
      link: 'https://nexgenmdscientific.com/',
      bgClass: 'bg-blue-300',
    },
    {
      title: 'Rizz Pharma',
      type: 'Website',
      img: '/images/ufc.png',
      link: 'https://nexgenmdscientific.com/',
      bgClass: 'bg-purple-400',
    },
  ];

  return (
    <section id="work" className="max-w-[1170px] mx-auto px-4 md:px-0 mt-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase">My Work</h2>
        <Link to="/my-work" className="text-sm underline cursor-pointer hover:text-gray-600">
          View All
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer"
          >
            <div
              className={`rounded-lg overflow-hidden max-w-[370px] h-[360px] ${project.bgClass}`}
            >
              <img
                src={project.img}
                className={`w-full h-full object-cover group-hover:scale-105 transition duration-300 ${
                  project.imgClass || ''
                }`}
                alt={project.title}
              />
            </div>
            <h3 className="mt-4 font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.type}</p>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-12 gap-3">
        <span className="w-10 h-1 bg-gray-800 rounded-full"></span>
        <span className="w-3 h-1 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-1 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-1 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
}
