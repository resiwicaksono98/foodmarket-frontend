import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserLogin } from "../features/authSlice";

export const AuthMiddleware = ({ children }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUserLogin());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading....
      </div>
    );
  }

  return <div>{children}</div>;
};
