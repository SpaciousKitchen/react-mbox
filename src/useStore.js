import User from "./store/user";

const useStore = () => {
  const user = new User();
  return { user };
};

export default useStore;
