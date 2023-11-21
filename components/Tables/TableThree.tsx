interface Registration {
  fullName: string;
  numberOfPeople: number;
  // Add other properties if necessary
}

const TableThree = ({ registrations }: { registrations: Registration[] }) => {
  return (
    <div className="rounded-sm border rtl text-right border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-right dark:bg-meta-4">
              <th className=" py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                שם מלא
              </th>
              <th className=" py-4 px-4 font-medium text-black dark:text-white">
                כמות אנשים
              </th>
              <th className=" py-4 px-4 font-medium text-black dark:text-white">
                סטטוס
              </th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration: any, key: any) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {registration.fullName}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black text-right dark:text-white">
                    {registration.numberOfPeople}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full text-right bg-opacity-10 py-1 px-3 text-sm font-medium ${"text-success bg-success"}`}
                  >
                    אושר
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
