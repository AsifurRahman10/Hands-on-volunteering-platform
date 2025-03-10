export const OrganizationUser = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium">Continuing as organization</h2>
      {/* name */}
      <label className="fieldset-label ml-4 text-[#333333] hidden md:block">
        Name
      </label>
      <input
        type="text"
        className="input bg-[#f2f2f2] border-none h-[48px] w-full lg-placeholder lg:mb-4"
        placeholder="Enter Organization name"
        required
      />
      <select
        // value={selectedUserType}
        className="select w-full bg-[#f2f2f2] border-none h-[48px]"
        // onChange={handleUserSelect}
        required
      >
        <option value="" disabled={true}>
          Organization type{" "}
        </option>
        <option value="NGO">NGO</option>
        <option value="Charity">Charity</option>
        <option value="Company">Company</option>
      </select>
      <button
        type="submit"
        className="btn rounded-[6px] py-5 bg-main border-none text-white md:mt-8 w-full"
      >
        Sign up
      </button>
    </div>
  );
};
