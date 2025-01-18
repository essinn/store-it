import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Search from "./search";
import FileUploader from "./file-uploader";
import { signoutUser } from "@/lib/actions/user.actions";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <form
          action={async () => {
            "use server";
            await signoutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
