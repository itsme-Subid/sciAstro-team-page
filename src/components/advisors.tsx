const advisors = [
  {
    name: "Dr. Omkar",
    designation: "Principal Project Scientist",
    university: "IIT Madras",
    img: "https://www.sciastra.com/teams/dr_omkar.jpg",
  },
  {
    name: "Akhil Tripathi",
    messagable: true,
    img: "https://www.sciastra.com/teams/akhil_tripathi_niser.jpg",
  },
  {
    name: "Vivek Dwivedi",
    messagable: true,
    img: "https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg",
  },
];

const Advisors = () => {
  return (
    <div className="container-custom grid min-h-screen place-content-center">
      <h2 className="gradient-text text-center text-4xl font-bold">
        Mentor & Advisor
      </h2>
      <ul className="mt-8 grid grid-cols-3 gap-8">
        {advisors.map((advisor) => (
          <li className="my-4 grid place-content-center gap-4">
            <img
              className="aspect-square w-full rounded-full object-cover shadow-md"
              src={
                advisor.img ||
                `https://avatars.dicebear.com/api/avataaars/${advisor.name}.svg`
              }
              alt={advisor.name}
            />
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold">{advisor.name}</h3>
              {advisor.designation && <p>{advisor.designation}</p>}
              {advisor.university && <p>{advisor.university}</p>}
              {advisor.messagable && (
                <button className="gradient-button mt-4 rounded-full px-8 py-2">
                  <span className="gradient-text">Message him now</span>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Advisors;
