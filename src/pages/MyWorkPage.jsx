import React from 'react';

export default function MyWorkPage() {
  const projects = [
    {
      title: 'SlimUp Austin',
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
      bgClass: 'bg-purple-400 flex justify-center', // The screenshot shows a lighter purple or maybe the image has a different bg for this page. Let's use bg-purple-400.
      imgClass: 'block mx-auto',
    },
    {
      title: 'DocMedilink',
      type: 'Website',
      img: '/images/docmedicLink.png',
      link: 'https://nexgenmdscientific.com/',
      bgClass: 'bg-[#e3f9a6]', // Approximate color from the picture
    },
    {
      title: 'Rizz Pharma',
      type: 'Website',
      img: '/images/ufc.png',
      link: 'https://nexgenmdscientific.com/',
      bgClass: 'bg-[#c5218d]', // Approximate color from the picture
    },
  ];

  return (
    <div className="max-w-[1170px] mx-auto px-4 md:px-0 md:pt-15 pb-24">
      <h1 className="text-5xl md:text-6xl font-extrabold uppercase text-center mt-12 mb-16 font-last-shuriken text-[#323131]">
        MY WORK
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer block"
          >
            <div
              className={`rounded-[1.5rem] overflow-hidden w-full aspect-[4/3] ${project.bgClass} flex items-center justify-center p-0`}
            >
              <img
                src={project.img}
                className={`w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out ${
                  project.imgClass || ''
                }`}
                alt={project.title}
              />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-gray-800">{project.title}</h3>
            <p className="text-base text-gray-500 mt-1">{project.type}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
