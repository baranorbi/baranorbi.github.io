export const fetchGreeting = async () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      const time = new Date().getHours();
      let greeting = "Hi";
      
      if (time < 12) greeting = "Good morning";
      else if (time < 18) greeting = "Good afternoon";
      else greeting = "Good evening";
      
      resolve(greeting);
    }, 500);
  });
};
