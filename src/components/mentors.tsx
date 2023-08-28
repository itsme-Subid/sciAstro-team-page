const mentors = [
  {
    name: "Ava Lee",
    university: "Stanford University",
  },
  {
    name: "Ben Smith",
    university: "MIT",
  },
  {
    name: "Clara Jones",
    university: "Harvard University",
  },
  {
    name: "David Brown",
    university: "Caltech",
  },
  {
    name: "Evelyn Green",
    university: "UC Berkeley",
  },
  {
    name: "Frank Williams",
    university: "Princeton University",
  },
  {
    name: "Grace Johnson",
    university: "Yale University",
  },
  {
    name: "Henry White",
    university: "Columbia University",
  },
  {
    name: "Iris Black",
    university: "University of Chicago",
  },
  {
    name: "James Davis",
    university: "Cornell University",
  },
  {
    name: "Katherine Miller",
    university: "University of Pennsylvania",
  },
  {
    name: "Liam Wilson",
    university: "Johns Hopkins University",
  },
];

const Mentors = () => {
  return (
    <div className="container-custom grid min-h-screen place-content-center">
      <h2 className="gradient-text text-center text-4xl font-bold">
        Meet your Mentors
      </h2>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mentors.map((mentor) => (
          <li
            className="my-4 grid place-content-center gap-4"
            key={mentor.name}
          >
            <img
              className="w-full rounded-full shadow-md"
              src={`https://avatars.dicebear.com/api/avataaars/${mentor.name}.svg`}
              alt={mentor.name}
            />
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold">{mentor.name}</h3>
              <p>{mentor.university}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mentors;
