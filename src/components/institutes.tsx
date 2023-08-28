const institutes = [
  {
    name: "Cambridge University",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/225px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png",
  },
  {
    name: "Harvard University",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/225px-Harvard_shield_wreath.svg.png",
  },
  {
    name: "Stanford University",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Stanford_University.png/225px-Stanford_University.png",
  },
  {
    name: "Massachusetts Institute of Technology",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",
  },
  {
    name: "University of Oxford",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_the_University_of_Oxford.svg/203px-Coat_of_arms_of_the_University_of_Oxford.svg.png",
  },
  {
    name: "University of California, Berkeley",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/225px-Seal_of_University_of_California%2C_Berkeley.svg.png",
  },
  {
    name: "Princeton University",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/210px-Princeton_seal.svg.png",
  },
  {
    name: "Yale University",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/225px-Yale_University_Shield_1.svg.png",
  },
  {
    name: "University of Chicago",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/195px-University_of_Chicago_shield.svg.png",
  },
  {
    name: "University of California, Los Angeles",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/225px-The_University_of_California_UCLA.svg.png",
  },
  {
    name: "Columbia University",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/270px-Columbia_University_shield.svg.png",
  },
];

const Institutes = () => {
  return (
    <div className="container-custom grid min-h-screen place-content-center">
      <div className="headers flex flex-col items-center gap-4">
        <h2 className="gradient-text text-center text-4xl font-bold">
          Team Page
        </h2>
        <p className="text-xl text-gray-600">
          Learn from scientists, research scholors from the top institutes in
          the world.
        </p>
      </div>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {institutes.map((institute) => (
          <li
            className="grid place-content-center gap-4 rounded-xl px-12 py-4 shadow-md transition-shadow hover:shadow-lg"
            key={institute.name}
          >
            <img src={institute.img} alt={institute.name} />
            <h3 className="text-center">{institute.name}</h3>
          </li>
        ))}
        <li className="grid place-content-center rounded-xl px-12 py-4">
          and so on...
        </li>
      </ul>
    </div>
  );
};

export default Institutes;
