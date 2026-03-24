(() => {
  const temperaturesCelsius = [33.6, 12.34];

  const serverIp = "123.123.123.123";

  const users = [
    { id: 1, email: "teffidev@google.com" },
    { id: 2, email: "estefania@google.com" },
    { id: 3, email: "bermudeztef@google.com" },
  ];

  const userEmails = users.map((user) => user.email);

  const canJump = true;
  const canRun = false;
  const hasItems = true;
  const isLoading = false;

  const startTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  const endTime = new Date().getTime() - startTime;

  // Funciones
  function getBooks() {
    throw new Error("Function not implemented.");
  }

  function getBooksByUrl(url: string) {
    throw new Error("Function not implemented.");
  }

  function getSquareArea(side: number) {
    throw new Error("Function not implemented.");
  }

  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
