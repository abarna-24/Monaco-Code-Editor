export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "12rem",
    borderRadius: "5px",
    color: "#fff", // White text color
    fontSize: "0.8rem",
    lineHeight: "2rem",
    backgroundColor: "#50C878", // Electric Blue background color
    cursor: "pointer", // Set border to none
    border: "solid #50C878",
    ":hover": {
      backgroundColor: "white",
      border: "solid #50C878",
    },
  }),
  option: (styles) => ({
    ...styles,
    color: "black", // Black text color
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    width: "100%",
    background: "#fff", // White background color
    fontWeight: "bold", // Bold font
    ":hover": {
      backgroundColor: "#50C878", // Electric Blue hover color
      color: "#fff", // White text on hover
      cursor: "pointer",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#50C878", // Electric Blue background color
    maxWidth: "14rem",
    borderRadius: "5px",
    color: "white",
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "white !important",
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.75rem",
  }),
};
