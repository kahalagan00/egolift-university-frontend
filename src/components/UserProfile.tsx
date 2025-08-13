import { useState } from "react";
import { DEFAULT_USER_PFP, UserType } from "../utils/constants";

interface UserProfileProps {
  user: UserType;
}

const UserProfile = ({ user }: UserProfileProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dateOnlyRegex =
    /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])))$/;

  // Make sure date is not behind
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function parseDateString(dateString: any) {
    if (dateOnlyRegex.test(dateString)) {
      const utcDate = new Date(dateString);
      const localDate = new Date(
        utcDate.getTime() + utcDate.getTimezoneOffset() * 60000,
      );
      return localDate;
    }
    return new Date(dateString);
  }

  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdown"
          className={`absolute z-10 w-44 translate-y-12 list-none divide-y divide-gray-100 rounded-lg bg-white text-base drop-shadow-xl dark:bg-gray-700 ${
            !showDropdown && "hidden"
          }`}
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src={DEFAULT_USER_PFP}
          alt="Default user pfp"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.firstName} {user.lastName}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {/* {new Date(user.birthDate).toDateString()} */}
          {parseDateString(user.birthDate).toDateString()}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.weight}kg &emsp; {user.height}m
        </span>
        <div className="mt-4 flex md:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="ms-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
