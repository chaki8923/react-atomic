import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molcules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/template/DefaultLayout";
import { HeaderOnly } from "./components/template/HeaderOnly";

import "./styles.css";

export default function App() {
  const user = {
    image: "https://source.unsplash.com/hikQ6zIVLiY",
    name: "chaki",
    email: "test@com",
    tell: "09025453741",
    company: {
      name: "やんちゃ株式会社"
    },
    web: "yancha@com"
  };

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <PrimaryButton>テスト</PrimaryButton>
          <SecondaryButton>検索</SecondaryButton>
          <SearchInput />
        </div>
        <DefaultLayout>
          <UserCard user={user} />
        </DefaultLayout>
      </BrowserRouter>
    </>
  );
}
