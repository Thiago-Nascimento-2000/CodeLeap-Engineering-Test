import { Provider } from "react-redux";
import { store } from "./store";

type ProviderStoreProps = {
  children: React.ReactNode;
};
export const ProviderStore = ({ children }: ProviderStoreProps) => {
  return <Provider store={store}>{children}</Provider>;
};
