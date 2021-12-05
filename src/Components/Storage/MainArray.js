import Monk from "../../PDF/The_Monk_Who_Sold_His_Ferrari_Thunder_compressed.pdf";
import Rich from "../../PDF/Rich-Dad-Poor-Dad-eBook-compressed.pdf";
import Cheese from "../../PDF/Who_Moved_my_cheese_compressed.pdf";
import Habits from "../../PDF/atomic-habits-compressed.pdf";
import Alchemist from "../../PDF/the-alchemist-paulo-coelho_compressed.pdf";
import Zero from "../../PDF/Zero to One_ Notes on Startups, or How to Build the Future ( PDFDrive )_compressed.pdf";
import Attitude from "../../PDF/Attitude_is_Everything_compressed.pdf";
import Thinkandgrowrich from "../../PDF/Think-And-Grow-Rich_compressed.pdf";

const MainArray = [
  {
    id: 1,
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg",
    Title: "Think Like a Monk",
    Description: "Jay Shetty ",
    Url: "https://indianpdf.files.wordpress.com/2021/08/think-like-a-monk-jay-shetty-www.indianpdf.com_-book-novel-download-online-free.pdf",
  },
  {
    id: 2,
    Image:
      "https://images-eu.ssl-images-amazon.com/images/I/51u2E5fNq8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title: "Rich Dad Poor Dad",
    Description: "Robert T. Kiyosaki",
    Url: Rich,
  },
  {
    id: 3,
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/51YCf2t-JIL._SX331_BO1,204,203,200_.jpg",
    Title: "Unscripted: Life, Liberty, and the Pursuit of Entrepreneurship",
    Description: "MJ DeMarco",
    Url: "https://indianpdf.files.wordpress.com/2021/07/unscripted_-life-liberty-and-the-pursuit-of-entrepreneurship-mj-demarco-www.indianpdf.com_-download-book-novel-pdf.pdf",
  },
  {
    id: 4,
    Image:
      "https://images-eu.ssl-images-amazon.com/images/I/410BqHSamiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title: "Monk who sold his Ferrari",
    Description: "Robin Sharma",
    Url: Monk,
  },
  {
    id: 5,
    Image:
      "https://images-eu.ssl-images-amazon.com/images/I/51osPUQRNtL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title: "who Moved My Cheese?",
    Description: "Dr Spencer Johnson ",
    Url: Cheese,
  },
  {
    id: 6,
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/41EmGYdoPOL._SX308_BO1,204,203,200_.jpg",
    Title: "The Alchemist",
    Description: "Paulo Coelho",
    Url: Alchemist,
  },
  {
    id: 7,
    Image:
      "https://images-eu.ssl-images-amazon.com/images/I/51bhhK6yobL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title: "Think and Grow Rich",
    Description: "Napoleon Hill",
    Url: Thinkandgrowrich,
  },
  {
    id: 8,
    Image:
      "https://images-eu.ssl-images-amazon.com/images/I/51z7mZZKRgL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title: "Zero to One",
    Description: "Peter Thiel",
    Url: Zero,
  },
  {
    id: 9,
    Image:
      "https://images-eu.ssl-images-amazon.com/images/I/41F8ATXoMOL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title: "Attitude Is Everything",
    Description: "Jeff Keller",
    Url: Attitude,
  },
  {
    id: 10,
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/51CPNIRSWeL._SX339_BO1,204,203,200_.jpg",
    Title: "Atomic Habits",
    Description: "James Clear",
    Url: Habits,
  },
  {
    id: 11,
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/51AffTW1D6L._SX324_BO1,204,203,200_.jpg",
    Title: "The Subtle Art of Not Giving AF",
    Description: "Mark Manson ",
    Url: "https://kingauthor.net/books/Mark%20Manson/The%20Subtle%20Art%20Of%20Not%20Giving%20A%20Fuck/The%20Subtle%20Art%20Of%20Not%20Giving%20A%20Fuck%20-%20Mark%20Manson.pdf",
  },
  {
    id: 10442388.411959229,
    Title: "The Richest Man in Babylon",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/51pLtgRCXSL._SX323_BO1,204,203,200_.jpg",
    Description: "George S. Clason",
    Url: "https://thediamondsmine.com/files/Ebooks/Clason-RichestManInBabylon.pdf",
  },
  {
    id: 9543834.989831828,
    Title: "The 48 Laws Of Power (The Modern Machiavellian Robert Greene, 1)",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/418WzmONssL._SX339_BO1,204,203,200_.jpg",
    Description: "Robert Greene",
    Url: "https://irp-cdn.multiscreensite.com/cb9165b2/files/uploaded/The%2048%20Laws%20Of%20Power.pdf",
  },
  {
    id: 1072769.0692754986,
    Title:
      "The Millionaire Fastlane: Crack The Code to Wealth and Live Rich for a Lifetime!",
    Image: "https://m.media-amazon.com/images/I/71-WC94CI7L._AC_SL1360_.jpg",
    Description: "MJ Demarco",
    Url: "https://ia801009.us.archive.org/27/items/the-millionaire-fastlane-140113153049-phpapp01/the-millionaire-fastlane.pdf",
  },
  {
    id: 11747579.529407252,
    Title: "The Rudest Book Ever",
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/51rVr4utFRL._SX325_BO1,204,203,200_.jpg",
    Description: " Shwetabh Gangwar",
    Url: "https://server121.onuploads.com/cgi-bin/dl.cgi/hljx63dfqm6l6xfnauvfdtal7aaxerxq2lnv5s5pt6ct4whzogwmt4y/The%20Rudest%20Book%20Ever%20%5BBooksLD%5D.pdf",
  },
];

export default MainArray;
