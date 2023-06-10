export const limitString = (str, maxLength) => {
  if (str.length > maxLength) {
    str.substring(0, maxLength + `...`);
  }
  return str;
};

export const getYear = (date) => {
  let dt = new Date(date);
  const year = dt.getFullYear();
  return year;
};

export const userTypes = [
    { value: "executive", label: "Executive Member" },
    { value: "member", label: "Member" },
    { value: "partner", label: "Partner" },
  ];

  export const userRoles = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ];


export const convertDate = (date: string | number | Date) => {
  const event = new Date(date);
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  return event.toLocaleDateString("en-GB", options).replace(/ /g, " ");
};

  export const localStore = {
    setUser: (token) => {
      localStorage.setItem('token', token);
      const time: any = new Date(Date.now()).getTime();
      localStorage.setItem("lastLoginTime", time);
   },

    getUser: () => {
      let now: number = new Date(Date.now()).getTime();
      let thirtyMinutes = 1000 * 60 * 30;
      let lastLogin: any = localStorage.getItem("lastLoginTime");
      let timeSinceLastLogin = now - lastLogin
      if (timeSinceLastLogin < thirtyMinutes) {
        return localStorage.getItem("token");
      }
    },

    removeUser: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("lastLoginTime");
    },
  }


