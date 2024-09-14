import { ArrowUpDown } from "lucide-react";
import { useMemo, useState } from "react";

export default function RecentStreamsTable() {
  const [sortConfig, setSortConfig] = useState({});
  const [songFilter, setSongFilter] = useState(null);
  const [artistFilter, setArtistFilter] = useState(null);

  const recentStreamsData = useMemo(
    () => [
      {
        "Song Name": "Song A",
        Artist: "Artist X",
        "Date Streamed": "2023-06-01",
        "Stream Count": 1000,
        "User Id": "user123",
      },
      {
        "Song Name": "Song B",
        Artist: "Artist Y",
        "Date Streamed": "2023-06-02",
        "Stream Count": 950,
        "User Id": "user456",
      },
      {
        "Song Name": "Song C",
        Artist: "Artist Z",
        "Date Streamed": "2023-06-03",
        "Stream Count": 900,
        "User Id": "user789",
      },
      {
        "Song Name": "Song D",
        Artist: "Artist W",
        "Date Streamed": "2023-06-04",
        "Stream Count": 850,
        "User Id": "user101",
      },
      {
        "Song Name": "Song E",
        Artist: "Artist V",
        "Date Streamed": "2023-06-05",
        "Stream Count": 800,
        "User Id": "user202",
      },
    ],
    []
  );

  //   const sortedData = useMemo(() => {
  //     let data = [...recentStreamsData];
  //     if (sortConfig?.columnName !== null) {
  //       data.sort((a, b) => {
  //         if (a?.sortConfig?.key < b?.sortConfig?.key) {
  //           return sortConfig?.order === "ascending" ? -1 : 1;
  //         }
  //         if (a?.sortConfig?.key > b?.sortConfig?.key) {
  //           return sortConfig?.order === "ascending" ? 1 : -1;
  //         }
  //         return 0;
  //       });
  //     }
  //     console.log("here");
  //     return data;
  //   }, [recentStreamsData, sortConfig]);

  //   const filteredData = useMemo(() => {
  //     let data = [...sortedData];
  //     console.log(" = ", data);
  //     return data.filter(
  //       (val) =>
  //         (songFilter === null || songFilter === val["Song Name"]) &&
  //         (artistFilter === null || artistFilter === val["Artist"])
  //     );
  //   }, [sortedData, artistFilter, songFilter]);

  const sortedfilter = useMemo(() => {
    let data = [...recentStreamsData];
    if (sortConfig?.columnName !== null) {
      return data.sort((a, b) => {
        if (a?.sortConfig?.columnName < b?.sortConfig?.columnName)
          return sortConfig?.order === "ascending" ? -1 : 1;
        if (a?.sortConfig?.columnName > b?.sortConfig?.columnName)
          return sortConfig?.order === "ascending" ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [recentStreamsData, sortConfig]);

  const filteredData = useMemo(() => {
    let data = [...sortedfilter];
    return data.filter(
      (item) =>
        artistFilter === null ||
        artistFilter?.length === 0 ||
        (artistFilter === item["Artist"] &&
          (songFilter === null ||
            songFilter?.length === 0 ||
            songFilter === item["Song Name"]))
    );
  }, [sortedfilter, artistFilter, songFilter]);
  const handleColumnsSort = (columnName) => {
    let order = "ascending";
    if (sortConfig?.columnName === columnName && sortConfig?.order === order) {
      order = "descending";
    }
    setSortConfig({ columnName: columnName, order: order });
  };

  return (
    <div className="border border-gray-300 p-4 flex flex-col space-y-3 bg-white rounded-lg">
      <h2 className="text-2xl font-bold">Recent Streams</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 content-evenly mt-10 mb-5">
        <input
          className="p-2 border border-gray-400 rounded-md text-black"
          placeholder="Filter by Artist"
          onChange={(e) => setArtistFilter(e.target.value)}
        />
        <input
          className="p-2 border border-gray-400 rounded-md text-black"
          placeholder="Filter by Song"
          onChange={(e) => setSongFilter(e.target.value)}
        />
      </div>
      <table className="flex flex-col w-full overflow-x-auto">
        <thead className="w-full">
          <tr className=" flex justify-between hover:bg-gray-100">
            {recentStreamsData &&
              recentStreamsData?.length > 0 &&
              Object.keys(recentStreamsData[0]).map((head) => {
                return (
                  <th
                    key={head}
                    onClick={() => handleColumnsSort(head)}
                    className="text-md font-semibold p-3 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer my-1 flex items-center"
                  >
                    {head}
                    <ArrowUpDown className="w-4 h-4 ml-2" />
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {filteredData &&
            filteredData?.length > 0 &&
            filteredData?.map((data, index) => {
              return (
                <tr
                  key={index}
                  className="flex justify-between border-t border-gray-200 py-2"
                >
                  {Object.values(data).map((value, index) => (
                    <td
                      key={index}
                      className="p-3 text-md flex justify-start font-semibold "
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
