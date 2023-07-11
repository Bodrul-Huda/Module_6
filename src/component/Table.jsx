const Table = (info) => {
  console.log(info);
  return (
    <>
      <div className="container mx-auto h-screen">
        <div className="p-2 mt-6 bg-orange-50 rounded-md shadow-md">
          <div className="p-2 m-2 bg-slate-100">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                    Email
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                    Comment
                  </th>
                </tr>
              </thead>
              <tbody>
                {info.info.map((msg, i) => (
                  <tr key={i} className="border-b-2">
                    <td className="px-4 py-3 ">{msg.name}</td>
                    <td className="px-4 py-3">{msg.email}</td>
                    <td className="px-4 py-3">{msg.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
