import {
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  // Pagination,
} from "@mui/material";
import "../index.css";

import dummyData from "../dummy_data/dummy_data.json";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import { ProfileDetails } from "../dataTypes/data_types";
import { CustomPagination } from "./CustomPagination";

function TableOfPeople() {
  const [showProfile, setShowProfile] = useState(false);

  const rowsPerPage = 5;
  const pages = Math.round(dummyData.length / rowsPerPage);

  const [displayData, setDisplayData] = useState(dummyData.slice(0, 5));

  const [clickedProfile, setClickedProfile] = useState<ProfileDetails>({
    id: 0,
    profile_image: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    description: "",
  });

  const clickProfile = (details: ProfileDetails) => {
    setShowProfile(true);
    setClickedProfile(details);
  };

  const changeContentInTable = (pageNumber: number) => {
    setDisplayData(
      dummyData.slice(rowsPerPage * (pageNumber - 1), rowsPerPage * pageNumber)
    );
  };

  return (
    <>
      <h1 className="table-title"> People Profiles </h1>
      <TableContainer>
        <Table className="people-table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Profile Images</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {displayData.map((row) => (
              <TableRow
                style={
                  row.id % 2 == 0
                    ? { backgroundColor: "#FFFFFF" }
                    : { backgroundColor: "whitesmoke" }
                }
                key={row.id}
                onClick={() => clickProfile(row)}
              >
                <TableCell align="center">
                  <img src={row.profile_image} alt="profile pic" />
                </TableCell>
                <TableCell align="center">
                  {row.first_name} {row.last_name}
                </TableCell>
                <TableCell align="center"> {row.email} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Pagination
        className="paginate-table"
        count={pages}
        onChange={(e, pageNumber) => changeContentInTable(e, pageNumber)}
      ></Pagination> */}

      <CustomPagination
        numPages={pages}
        changeContent={changeContentInTable}
      ></CustomPagination>

      <ProfileCard
        props={clickedProfile}
        show={showProfile}
        setShowProfile={setShowProfile}
      />
    </>
  );
}

export default TableOfPeople;
