export default function SkillBar() {
  const skills = [
    'App Design',
    'Dashboard',
    'SaaS Products',
    'Business & Platform Design',
    'E-commerce Platform',
    'Website Design',
    'App Design',
    'Dashboard',
    'SAAS',
  ];

  return (
    <div className="bg-black text-white py-3 mt-4 md:-ml-12 -mr-12 -rotate-2 overflow-hidden">
      <div className="flex gap-7 text-[20px] font-bold whitespace-nowrap px-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-7">
            <span>{skill}</span>
            {index !== skills.length - 1 && (
              <img src="/images/divider.png" alt="divider" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
