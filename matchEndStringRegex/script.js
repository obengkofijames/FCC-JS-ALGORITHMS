const email = "obengkofijames@st.ug.edu.gh";

// const regex = /(?<=@)[^.]+(?=\.)/;
const regex = /@st.ug.edu.gh$/

const result = regex.test(email);
result === true? console.log("Valid email"): console.log("Invalid email");