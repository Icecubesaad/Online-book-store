import React, { useContext } from "react";
import BooksContext from "../functions/Context";
import UserCards from "../components/UserCards";
import { Link } from "react-router-dom";
const UserDifferentPages = () => {
  const context = useContext(BooksContext);
  const { filterUIuser, return_book, alert1 } = context;
  return (
      <>
        {filterUIuser.map((element) => {
          return (
            <div className="page">
              <div className="picture">
                <UserCards
                  Name={element.Name}
                  Url={element.Url}
                  Unique={element.id}
                />
              </div>
              <div className="info">
                <h2 className="my-2">Title : {element.Name}</h2>
                <h2 className="my-2">Author : {element.Author}</h2>
                <h3 className="my-2">Description : {element.Description}</h3>
                <h3 className="my-2">Pages : {element.Pages}</h3>
                <h3 className="my-3">Price : {element.Price}</h3>
                <button
                  className="btn_sale btn btn-danger btn-lg"
                  onClick={() => {
                    return_book(element._id, element.User);
                  }}
                >
                  <Link to="/User_account">Return</Link>
                </button>
              </div>
            </div>
          );
        })}
      </>
  );
};

export default UserDifferentPages;
