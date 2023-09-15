import TeamMember from "./TeamMember";

function TeamMembers() {
  const teamMembers = [
    {
      _id: 1,
      name: "Yonas",
      designation: "CEO",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/4.jpg",
    },
    {
      _id: 2,
      name: "Bonney",
      designation: "CTO",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/4.jpg",
    },
    {
      _id: 3,
      name: "Yonas",
      designation: "Director",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/7.jpg",
    },
    {
      _id: 4,
      name: "Yonas",
      designation: "Product Manager",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/1.jpg",
    },
    {
      _id: 5,
      name: "Yonas",
      designation: "Digital Marketer",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/3.jpg",
    },
    {
      _id: 6,
      name: "Yonas",
      designation: "Director",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/7.jpg",
    },
    {
      _id: 7,
      name: "Yonas",
      designation: "Developer",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/4.jpg",
    },
    {
      _id: 8,
      name: "Yonas",
      designation: "Support Manager",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/1.jpg",
    },
  ];
  return (
    <section className="bg-[#F9FCFF] py-16">
      <div className="container mx-auto px-5">
        <div className="text-center mb-4 md:mb-8 lg:mb-16">
          <div class="flex flex-col items-center align-self-start">
            <p class="font-medium text-[18px] text-[var(--button-color)]">
              Ketari Team
            </p>
            <p class="text-2xl md:text-[36px] font-bold text-[0A093D] mb-4">
              Our Team Members
            </p>
            <p class="text-[15px] text-[#656464] max-w-sm">
              multinational and interdisciplinary team of
            </p>
            <p class="text-[15px] text-[#656464] max-w-sm">
              young and ambitious people
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <TeamMember key={member._id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
