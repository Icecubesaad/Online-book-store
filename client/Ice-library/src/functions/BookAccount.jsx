import { useState, useEffect } from "react";
import BooksContext from "./Context";
const BooksState = (props) => {
  // front end array to display books
  const userl = [];
  const [user, setuser] = useState(userl);
  const books = [
    {
      Coding: [
        {
          Name: "Python Ultimate Course",
          Url: "https://media.geeksforgeeks.org/wp-content/uploads/20190709181948/Python-Crash-Course.jpg",
          price: "69$",
          field: "python",
          Id: "1",
          description:
            "A comprehensive guide to learn Python programming language.",
          pages: "500",
          author: "John Smith",
        },
        {
          Name: "C++ Ultimate Course",
          Url: "https://lh5.googleusercontent.com/EGpOmNGM0ndPhq2LiuJxQCb6IO4NFDe2-LUCT57eQYfdDlo-GBgg1jGznUnUq1zHGsOllNuaB9AKFcgiOVSqQxpJRPbHQY1XkwQpLo59mTRjAm5A6Fsuhro8fBYZ3Wj9LiAS15-DchmPb-fA9q83jWMdYDoyJrYjJfpp0xyC9YNpJKzFLaZuFGVDy5iy",
          price: "60$",
          field: "c++",
          Id: "2",
          description:
            "A complete guide to master the C++ programming language.",
          pages: "600",
          author: "Jane Doe",
        },
        {
          Name: "Node Js Ultimate Course",
          Url: "https://learning.oreilly.com/library/cover/9781785888960/250w/",
          price: "59$",
          field: "node js",
          Id: "3",
          description:
            "A comprehensive guide to learn Node.js and its ecosystem.",
          pages: "450",
          author: "Bob Johnson",
        },
        {
          Name: "Java Script Ultimate Course",
          Url: "https://uploads.sitepoint.com/wp-content/uploads/2017/03/1488480428eloquent-js.jpg",
          price: "79$",
          field: "java script",
          Id: "4",
          description:
            "A complete guide to master the JavaScript programming language.",
          pages: "700",
          author: "Amy Lee",
        },
        {
          Name: "React js Ultimate Course",
          Url: "https://josipmisko.com/img/books/The-Road-to-React.jpg",
          price: "89$",
          field: "react",
          Id: "5",
          description:
            "A comprehensive guide to learn React.js and its ecosystem.",
          pages: "800",
          author: "Tom Smith",
        },
      ],
      "Fiction": [
        {
          "Name": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "description": "The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.",
          "Url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
          "Id": "59",
          "price": "$89",
          "pages": "180"
        },
        {
          "Name": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "description": "The novel is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality.",
          "Url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCC1ng4Ed5xDF7jBcI9Qin8FqXo4D-LPbtQ&usqp=CAU",
          "Id": "19",
          "price": "$89",
          "pages": "281"
        },
        {
          "Name": "Pride and Prejudice",
          "author": "Jane Austen",
          "description": "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
          "Url": "https://cdn2.penguin.com.au/covers/original/9780141949055.jpg",
          "Id": "29",
          "price": "$56",
          "pages": "432"
        },
        {
          "Name": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "description": "The novel details two days in the life of Holden Caulfield after he has been expelled from prep school.",
          "Url": "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
          "Id": "89",
          "price": "$89",
          "pages": "277"
        },
        {
          "Name": "The Lord of the Rings",
          "author": "J.R.R. Tolkien",
          "description": "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
          "Url": "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
          "Id": "69",
          "price": "$89",
          "pages": "1178"
        }
      ],
      "comics": [
        {
          "Id": 100,
          "Name": "Spider-Man",
          "description": "The web-slinging hero battles a variety of villains in New York City.",
          "Url": "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/09/12210235/clean.jpg",
          "price": "$89",
          "author": "Stan Lee",
          "pages": 200
        },
        {
          "Id": 200,
          "Name": "Batman",
          "description": "The Dark Knight protects Gotham City from its criminal underworld.",
          "Url": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Batman_Comic_Book_-_NARA_-_595420.gif",
          "price": "$89",
          "author": "Bob Kane",
          "pages": 180
        },
        {
          "Id": 300,
          "Name": "Superman",
          "description": "The Man of Steel uses his incredible powers to protect Earth from all manner of threats.",
          "Url": "https://i0.wp.com/www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2020/05/07-smot11.jpg?fit=1400%2C2152&ssl=1",
          "price": "$89",
          "author": "Jerry Siegel",
          "pages": 220
        },
        {
          "Id": 400,
          "Name": "X-Men",
          "description": "A group of mutants fight against prejudice and evil to protect a world that fears and hates them.",
          "Url": "https://lumiere-a.akamaihd.net/v1/images/p_xmen1992_21369_452338d2.jpeg",
          "price": "$89",
          "author": "Stan Lee",
          "pages": 180
        },
        {
          "Id": 500,
          "Name": "The Avengers",
          "description": "A team of superheroes unite to defend the Earth from threats too big for any one hero to handle alone.",
          "Url": "https://www.practicalmoneyskills.com/assets/images/non-card/marvels_avengers_cover.jpg",
          "price": "$89",
          "author": "Stan Lee",
          "pages": 240
        }
      ],
      New: [
        {
          Id: "9780062978211",
          Name: "The Four Winds",
          author: "Kristin Hannah",
          description:
            "From the #1 New York Times bestselling author of The Nightingale and The Great Alone comes an epic novel of love and heroism and hope, set against the backdrop of one of America's most defining eras—the Great Depression.",
          Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1594925043l/53138081.jpg",
          price: "$28.99",
          category: "Fiction",
          publisher: "St. Martin's Press",
          publishedDate: "2023-02-01",
          language: "English",
          pages:"380"
        },
        {
          Id: "9780735220252",
          Name: "The Sanatorium",
          author: "Sarah Pearse",
          description:
            "Half-hidden by forest and overshadowed by threatening peaks, Le Sommet has always been a sinister place. Once a sanatorium treating tuberculosis patients, it was abandoned years ago and had fallen into disrepair. Long plagued by troubling rumours, it has recently been renovated into a lavish hotel. ",
          Url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612344489i/56935099.jpg",
          price: "$27.00",
          category: "Thriller",
          publisher: "Penguin Books",
          publishedDate: "2023-02-07",
          language: "English",
          pages:"580"
        },
        {
          Id: "9780593139134",
          Name: "Empire City",
          author: "Matt Gallagher",
          description:
            "A sweeping, propulsive, darkly humorous new novel of the modern American West from the writer who has been called “the new voice of the region” by author Mark Bowden, already optioned for television by Westworld co-creator Lisa Joy and producer Jonathan Nolan.",
          Url: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501177804/empire-city-9781501177804_hr.jpg",
          price: "$28.00",
          category: "Fiction",
          publisher: "Atria Books",
          publishedDate: "2023-02-14",
          language: "English",
          pages:"480"
        },
        {
          Id: "9780593319494",
          Name: "The Forever Home",
          author: "Sue Monk Kidd",
          description:
            "New York Times bestselling author Sue Monk Kidd’s The Secret Life of Bees, a heartwarming coming of age tale set in South Carolina, and her beloved debut The Dance of the Dissident Daughter together in one volume.",
          Url: "https://kbimages1-a.akamaihd.net/661fdc3b-03d5-44c2-9863-591d33bcf6df/1200/1200/False/the-forever-home.jpg",
          price: "$27.00",
          category: "Fiction",
          publisher: "Penguin Random House",
          publishedDate: "2023-02-28",
          language: "English",
          pages:"420"
        },
        {
          Id: "9780593418517",
          Name: "The Souvenir Museum",
          author: "Elizabeth McCracken",
          description:
            "From the beloved, award-winning author of Thunderstruck & Other Stories, a poignant and unforgettable new collection of short stories that showcases Elizabeth McCracken's singular gift for character, and big-heartedness.",
          Url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595210683i/54496117.jpg",
          price: "$27.00",
          category: "Fiction",
          publisher: "Penguin Random House",
          publishedDate: "2023-02-28",
          language: "English",
          pages:"400"
        },
      ],
    },
  ];
  let width = true;
  let loading = false;
  const [loggedhehe, setlog] = useState(false);
  const [signInerror, setsignInerror] = useState(true);
  const [alert1, setalert] = useState(false);
  const [filterUIuser, setfilterUIuser] = useState(user);
  const [alert2, setalert2] = useState(false);
  const [alert_error1, seterror] = useState(false);
  const [booksChange, setbooksChanege] = useState(books);
  const [optionsChange, setOptionChanege] = useState([]);
  console.log("hehe", loggedhehe);
  const check2 = () => {
    setlog(true);
  };
  useEffect(() => {
    if (localStorage.getItem("key")) {
      check2();
    }
  }, []);
  // searching filter
  const search = (Search) => {
    const searchBooks = books.filter((i) => {
      if (Search === "") {
        return books;
      } else {
        return i.Name.toLowerCase().includes(Search.toLowerCase());
      }
    });
    setbooksChanege(searchBooks);
  };

  // adding books to the data base and the front end array
  const buy = async (id, Name, Url, price,description,author,pages) => {
    console.log(id, Name, Url, price);
    const books = await fetch("/account/add/addl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        jwt_data: JSON.parse(localStorage.getItem("key")),
      },
      body: JSON.stringify({
        id,
        Name,
        Url,
        price,
        description,
        author,
        pages
      }),
    });
    const books_data = await books.json();
    if (books.status === 500) {
      seterror(true); // error alert on page if you add the same book
      setTimeout(() => {
        seterror(false);
      }, 6000);
    } else {
      update(books_data);
    }
    console.log(books_data);
  };

  const filteruser = (bookh) => {
    const filter_book = user.filter((book) => {
      return book.Id === bookh;
    });
    setfilterUIuser(filter_book);
  };
  //checking if book already exists
  const update = (lol) => {
    setTimeout(() => {
      if (user.some((b) => b.Name === lol.Name)) {
        seterror(true);
      } else {
        setuser((us) => [...us, lol]);
        setalert(true);
      }
    }, 2000);
    setTimeout(() => {
      seterror(false);
      setalert(false);
    }, 6000);
  };
  // searching through options
  const Items = (Search1) => {
    const searchOptions = books.filter((i) => {
      if (Search1 === "") {
        return setOptionChanege([]);
      } else {
        return i.Name.toLowerCase().includes(Search1.toLowerCase());
      }
    });
    setOptionChanege(searchOptions);
  };
  const Option = (lol) => {
    const searchBooks = books.filter((i) => {
      if (lol === "") {
        return books;
      } else {
        return i.field.toLowerCase().includes(lol.toLowerCase());
      }
    });
    setbooksChanege(searchBooks);
  };
  const return_book = (_id, User) => {
    const deleting = fetch("/account/add/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        jwt_data: JSON.parse(localStorage.getItem("key")),
      },
      body: JSON.stringify({
        _id,
        User,
      }),
    });
    setalert2(true);
    const nikal = user.filter((m) => {
      return _id !== m._id;
    });
    setuser(nikal);
    setTimeout(() => {
      setalert2(false);
    }, 6000);
  };
  const [filterUI, setfilter] = useState(books);
  const filter = (name) => {
    const new_book = books
      .flatMap(Object.values)
      .flat()
      .filter((k) => {
        return k.Id === name;
      });
    setfilter(new_book);
  };
  // Getting books data from database
  const get_details = async () => {
    const res = await fetch("/account/add/gets", {
      method: "GET",
      headers: {
        jwt_data: JSON.parse(localStorage.getItem("key")),
      },
    });
    const data = await res.json();
    setuser(data);
  };
  return (
    <BooksContext.Provider
      value={{
        booksChange,
        optionsChange,
        filterUI,
        filterUIuser,
        Items,
        filter,
        search,
        Option,
        buy,
        user,
        filteruser,
        loading,
        alert1,
        alert2,
        alert_error1,
        get_details,
        return_book,
        loggedhehe,
        setlog,
        signInerror,
        setsignInerror,
        width,
        books,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
export default BooksState;
