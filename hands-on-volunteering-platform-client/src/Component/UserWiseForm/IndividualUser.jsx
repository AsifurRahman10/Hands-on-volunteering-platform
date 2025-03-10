import Select from "react-select";
import "./style.css";

export const IndividualUser = () => {
  const options = [
    { value: "teaching", label: "Teaching/Tutoring" },
    { value: "mentoring", label: "Mentoring" },
    { value: "event-planning", label: "Event Planning" },
    { value: "fundraising", label: "Fundraising" },
    { value: "first-aid", label: "First Aid/CPR" },
    { value: "nursing", label: "Nursing" },
    { value: "tree-planting", label: "Tree Planting" },
    { value: "gardening", label: "Gardening" },
    { value: "painting", label: "Painting" },
    { value: "food-distribution", label: "Food Distribution" },
    { value: "homeless-support", label: "Homeless Shelter Support" },
    { value: "translation", label: "Translation Services" },
    { value: "driving", label: "Driving" },
    { value: "cooking", label: "Cooking" },
    { value: "pet-care", label: "Pet Care" },
  ];
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium">
        Continuing as Individual Volunteer
      </h2>
      {/* skills */}
      <label className="fieldset-label ml-4 text-[#333333] hidden md:block">
        Skills & Interests
      </label>
      <Select
        name="skills"
        isMulti
        options={options}
        onMenuOpen={() => console.log("Menu opened")}
        placeholder="Select skills..."
      />
      {/* skills */}
      <label className="fieldset-label lg:ml-4 text-[#333333] block">
        Causes They Support
      </label>
      <div className="flex flex-wrap gap-3">
        <label className="fieldset-label">
          <input
            type="checkbox"
            className="checkbox  rounded-none"
            style={{ backgroundColor: "#f2f2f2", color: "black" }}
          />
          Environmental
        </label>
        <label className="fieldset-label">
          <input
            type="checkbox"
            className="checkbox bg-[#f2f2f2] rounded-none"
            style={{ backgroundColor: "#f2f2f2" }}
          />
          Education
        </label>
        <label className="fieldset-label">
          <input
            type="checkbox"
            className="checkbox bg-[#f2f2f2] rounded-none"
            style={{ backgroundColor: "#f2f2f2" }}
          />
          healthcare
        </label>
        <label className="fieldset-label">
          <input
            type="checkbox"
            className="checkbox bg-[#f2f2f2] rounded-none"
            style={{ backgroundColor: "#f2f2f2" }}
          />
          Animal Welfare
        </label>
      </div>
      <button
        type="submit"
        className="btn rounded-[6px] py-5 bg-main border-none text-white md:mt-8 w-full"
      >
        Sign up
      </button>
    </div>
  );
};
