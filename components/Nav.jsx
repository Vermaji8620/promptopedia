"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/images/logo.svg";
import { signOut, signIn, getProviders, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Nav = () => {
  const isUserloggedIn = true;
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProvides = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvides();
  }, []);

  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <Link className="gap-2 flex flex-center" href="/">
        <Image
          width={40}
          height={50}
          alt="fsd"
          className="object-contain"
          src={Logo}
        />
        <p className="logo_text">Propmtopedia</p>
      </Link>

      {/* desktop navigation */}
      <div className="sm:flex hidden">
        {isUserloggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" className="outline_btn" onClick={signOut}>
              SignOut
            </button>

            <Link href="/profile">
              <Image src={Logo} width={37} height={37} />
            </Link>
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                ></button>
              ))}
            SignIn
          </div>
        )}
      </div>

      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {isUserloggedIn ? (
          <div className="flex">
            <Image
              width={40}
              height={50}
              alt="fsd"
              className="object-contain"
              src={Logo}
              onClick={() => {
                setToggleDropDown((prev) => !prev);
              }}
            />

            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create_prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  SignOut
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex">
            <Image
              width={40}
              height={50}
              alt="fsd"
              className="object-contain"
              src={Logo}
              onClick={() => {}}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
