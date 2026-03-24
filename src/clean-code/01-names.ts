(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map(file => file.flagged);

  // Malos
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Rename the variables to be more descriptive

  const today = new Date();

  const elapsedTimeInDays: number = 23;

  const numberOfFilesInDirectory = 33;

  const firstName = "Estefanía";

  const lastName = "Bermúdez";

  const daysSinceModification = 12;

  const maxClassesPerStudent = 6;
})();
